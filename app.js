/* ============================================================
   STUDYHUB — App Logic
   Pure client-side: search, routing, rendering
   ============================================================ */

// ── Subject config ─────────────────────────────────────────
const SUBJECT_ICONS = {
  "UPSC":      { icon: "🏛️", color: "#F97316" },
  "SSC":       { icon: "🚔", color: "#4F8EF7" },
  "Railway":   { icon: "🚆", color: "#22C55E" },
  "Air Force": { icon: "✈️", color: "#7C5CFC" },
  "ICG":       { icon: "⚓", color: "#14B8A6" },
  "Banking":   { icon: "🏦", color: "#EC4899" },
  "JEE":       { icon: "📐", color: "#06B6D4" },
  "NEET":      { icon: "🩺", color: "#84CC16" },
  "CBSE":      { icon: "📚", color: "#A855F7" }
};

const TYPE_BADGE = {
  "Notes":       "badge-notes",
  "PYQ":         "badge-pyq",
  "Formula Sheet":"badge-formula",
  "Textbook":    "badge-textbook",
};

// ── State ──────────────────────────────────────────────────
const state = {
  query: "",
  filters: { subject: "", board: "", type: "", classLevel: "" },
  results: [],
  page: "home",  // "home" | "results"
};

// ── DOM refs ───────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── Page router ────────────────────────────────────────────
function showPage(id) {
  $$(".page").forEach(p => p.classList.remove("active"));
  $(`#page-${id}`).classList.add("active");
  state.page = id;
  window.scrollTo(0, 0);
}

// ── Search trigger ─────────────────────────────────────────
function doSearch(query, filters = {}) {
  state.query = query;
  state.filters = { subject: "", board: "", type: "", classLevel: "", ...filters };
  state.results = searchMaterials(query, state.filters);
  renderResults();
  showPage("results");
  // Sync input on results page
  $("#results-input").value = query;
  syncFilterDropdowns();
}

// ── Render results ─────────────────────────────────────────
function renderResults() {
  const list = state.results;
  const count = list.length;
  const grid = $("#results-grid");
  const countEl = $("#results-count");

  countEl.innerHTML = `Found <strong>${count.toLocaleString()}</strong> result${count !== 1 ? "s" : ""}${state.query ? ` for "<strong>${escHtml(state.query)}</strong>"` : ""}`;

  if (count === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="emoji">🔍</div>
        <h3>No materials found</h3>
        <p>Try different keywords or remove some filters.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(item => materialCard(item)).join("");
}

function materialCard(item) {
  const badgeClass = TYPE_BADGE[item.type] || "badge-other";
  const tags = item.tags.slice(0, 3).map(t => `<span class="meta-chip">${escHtml(t)}</span>`).join("");
  const dl = item.downloads >= 1000
    ? (item.downloads / 1000).toFixed(1) + "k"
    : item.downloads;

  return `
  <div class="material-card">
    <div class="card-top">
      <span class="card-badge ${badgeClass}">${escHtml(item.type)}</span>
      <div style="font-size:12px;color:var(--muted)">${escHtml(item.subject)}</div>
    </div>
    <div class="card-title">${escHtml(item.title)}</div>
    <div class="card-meta">
      <span class="meta-chip">📚 ${escHtml(item.class)}</span>
      <span class="meta-chip">🏫 ${escHtml(item.board)}</span>
      <span class="meta-chip">📄 ${item.pages} pages</span>
      <span class="meta-chip">💾 ${escHtml(item.size)}</span>
    </div>
    <div class="card-footer">
      <span class="card-stats">⬇️ ${dl} downloads</span>
      <a href="${escHtml(item.url)}" class="download-btn" ${item.url === "#" ? 'onclick="demoDownload(event)"' : 'download target="_blank"'}>
        ⬇ Download
      </a>
    </div>
  </div>`;
}

// Demo click handler for placeholder URLs
function demoDownload(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  btn.textContent = "✓ Link not set";
  btn.style.background = "#22C55E";
  setTimeout(() => {
    btn.textContent = "⬇ Download";
    btn.style.background = "";
  }, 2000);
}

// ── Render homepage popular section ───────────────────────
function renderPopular() {
  const popular = [...STUDY_DATA]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 6);
  const grid = $("#popular-grid");
  grid.innerHTML = popular.map(item => materialCard(item)).join("");
}

// ── Render subject grid ────────────────────────────────────
function renderSubjects() {
  const grid = $("#subject-grid");
  const counts = {};
  STUDY_DATA.forEach(d => { counts[d.subject] = (counts[d.subject] || 0) + 1; });

  grid.innerHTML = SUBJECTS.map(sub => {
    const cfg = SUBJECT_ICONS[sub] || { icon: "📁", color: "#6B7280" };
    return `
    <div class="subject-card" onclick="doSearch('', {subject: '${escHtml(sub)}'})" title="Browse ${escHtml(sub)}">
      <div class="subject-icon">${cfg.icon}</div>
      <div class="subject-name">${escHtml(sub)}</div>
      <div class="subject-count">${counts[sub] || 0} files</div>
    </div>`;
  }).join("");
}

// ── Populate filter dropdowns ──────────────────────────────
function buildFilters() {
  const selects = {
    "filter-subject": SUBJECTS,
    "filter-board":   BOARDS,
    "filter-type":    TYPES,
    "filter-class":   CLASSES,
  };
  for (const [id, vals] of Object.entries(selects)) {
    const el = $(`#${id}`);
    if (!el) continue;
    const placeholders = {
      "filter-subject": "All Subjects",
      "filter-board":   "All Boards",
      "filter-type":    "All Types",
      "filter-class":   "All Classes",
    };
    el.innerHTML = `<option value="">${placeholders[id]}</option>` +
      vals.map(v => `<option value="${escHtml(v)}">${escHtml(v)}</option>`).join("");
  }
}

function syncFilterDropdowns() {
  const f = state.filters;
  const map = { "filter-subject": f.subject, "filter-board": f.board,
                "filter-type": f.type, "filter-class": f.classLevel };
  for (const [id, val] of Object.entries(map)) {
    const el = $(`#${id}`);
    if (el) el.value = val || "";
  }
}

function getFiltersFromDOM() {
  return {
    subject:    $("#filter-subject")?.value || "",
    board:      $("#filter-board")?.value   || "",
    type:       $("#filter-type")?.value    || "",
    classLevel: $("#filter-class")?.value   || "",
  };
}

// ── Search total count ─────────────────────────────────────
function updateTotalCount() {
  const el = $("#total-count");
  if (el) el.textContent = STUDY_DATA.length.toLocaleString() + "+";
}

// ── Escape HTML ────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── Event bindings ─────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Init
  renderSubjects();
  renderPopular();
  buildFilters();
  updateTotalCount();

  // ── HOME search ──────────────────────────────────────────
  const heroInput = $("#hero-input");
  const heroBtn   = $("#hero-btn");

  function heroSearch() {
    doSearch(heroInput.value.trim());
  }
  heroBtn?.addEventListener("click", heroSearch);
  heroInput?.addEventListener("keydown", e => { if (e.key === "Enter") heroSearch(); });

  // Navbar mini search
  const navInput = $("#nav-input");
  navInput?.addEventListener("keydown", e => {
    if (e.key === "Enter") doSearch(navInput.value.trim());
  });

  // Quick tags
  $$(".qtag").forEach(tag => {
    tag.addEventListener("click", () => {
      const q = tag.dataset.query || tag.textContent.trim();
      doSearch(q);
    });
  });

  // Subject cards → handled inline via onclick

  // ── RESULTS search ───────────────────────────────────────
  const resInput = $("#results-input");
  const resBtn   = $("#results-btn");

  function resultsSearch() {
    const f = getFiltersFromDOM();
    doSearch(resInput.value.trim(), f);
  }
  resBtn?.addEventListener("click", resultsSearch);
  resInput?.addEventListener("keydown", e => { if (e.key === "Enter") resultsSearch(); });

  // Filter dropdowns
  $$(".filter-select").forEach(sel => {
    sel.addEventListener("change", () => {
      const f = getFiltersFromDOM();
      doSearch(resInput?.value.trim() || state.query, f);
    });
  });

  // Clear filters
  $("#filter-clear")?.addEventListener("click", () => {
    $$(".filter-select").forEach(s => s.value = "");
    state.filters = { subject: "", board: "", type: "", classLevel: "" };
    doSearch(resInput?.value.trim() || state.query, {});
  });

  // ── Nav buttons ───────────────────────────────────────────
  $("#nav-home")?.addEventListener("click", () => showPage("home"));
  $("#nav-browse")?.addEventListener("click", () => doSearch(""));
  $("#nav-about")?.addEventListener("click", () => {
    showPage("home");
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  });

  // Back button on results page
  $("#back-btn")?.addEventListener("click", () => showPage("home"));

  // "View All" popular button
  $("#view-all")?.addEventListener("click", () => doSearch(""));
});
