/**
 * STUDYHUB - Master PDF Index
 * ============================================================
 * HOW TO ADD YOUR PDFs:
 * 1. Upload your PDF to any free host (Google Drive, GitHub, Dropbox, etc.)
 * 2. Get the direct download link
 * 3. Add an entry below in this format
 *
 * This file acts as your "database" - just a JS array.
 * You can have 10,000+ entries here with zero lag because
 * search runs locally in the browser using fast filtering.
 * ============================================================
 */

const STUDY_DATA = [
 
  
{
  id: 2,
  title: "SSC Reasoning Notes",
  subject: "SSC",
  class: "Competitive",
  board: "SSC",
  type: "Notes",
  tags: ["ssc","reasoning"],
  size: "4 MB",
  pages: 80,
  downloads: 0,
  url: "#"
},

{
  id: 3,
  title: "Railway Reasoning Notes",
  subject: "Railway",
  class: "Competitive",
  board: "Railway",
  type: "Notes",
  tags: ["railway","reasoning"],
  size: "3 MB",
  pages: 60,
  downloads: 0,
  url: "#"
},

{
  id: 4,
  title: "Air Force Physics Notes",
  subject: "Air Force",
  class: "Competitive",
  board: "Air Force",
  type: "Notes",
  tags: ["airforce","physics"],
  size: "4 MB",
  pages: 75,
  downloads: 0,
  url: "#"
},

{
  id: 5,
  title: "ICG Navik GD Notes",
  subject: "ICG",
  class: "Competitive",
  board: "ICG",
  type: "Notes",
  tags: ["icg","navik"],
  size: "4 MB",
  pages: 90,
  downloads: 0,
  url: "#"
}
];

// ── Search Engine (runs entirely in browser) ──────────────────
// Tokenizes and scores results — handles 10,000+ entries with zero lag
function searchMaterials(query, filters = {}) {
  if (!query && !filters.subject && !filters.board && !filters.type && !filters.classLevel) {
    return STUDY_DATA;
  }

  const q = query.toLowerCase().trim();
  const tokens = q.split(/\s+/).filter(Boolean);

  return STUDY_DATA.filter((item) => {
    // Filter chips
    if (filters.subject && item.subject !== filters.subject) return false;
    if (filters.board && item.board !== filters.board) return false;
    if (filters.type && item.type !== filters.type) return false;
    if (filters.classLevel && item.class !== filters.classLevel) return false;

    // Text search across title, subject, board, tags
    if (!q) return true;
    const haystack = [
      item.title,
      item.subject,
      item.board,
      item.class,
      item.type,
      ...item.tags,
    ]
      .join(" ")
      .toLowerCase();

    return tokens.every((token) => haystack.includes(token));
  }).sort((a, b) => {
    // Boost exact title matches
    const aTitle = a.title.toLowerCase().includes(q) ? 1 : 0;
    const bTitle = b.title.toLowerCase().includes(q) ? 1 : 0;
    if (aTitle !== bTitle) return bTitle - aTitle;
    return b.downloads - a.downloads;
  });
}

// Unique values for filter dropdowns
const SUBJECTS = [...new Set(STUDY_DATA.map((d) => d.subject))].sort();
const BOARDS   = [...new Set(STUDY_DATA.map((d) => d.board))].sort();
const TYPES    = [...new Set(STUDY_DATA.map((d) => d.type))].sort();
const CLASSES  = [...new Set(STUDY_DATA.map((d) => d.class))].sort();
