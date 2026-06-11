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
  // ── MATHEMATICS ────────────────────────────────────────────
  {
    id: 1,
    title: "Calculus – Limits & Derivatives",
    subject: "Mathematics",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["calculus", "limits", "derivatives", "maths", "class 12"],
    size: "2.4 MB",
    pages: 48,
    downloads: 12400,
    url: "https://drive.google.com/file/d/1DkghHKZ4x_nVsEd1UxwxN3Sym_95Szoc/view?usp=drive_link", // Replace with your actual PDF link
  },
  {
    id: 2,
    title: "Algebra – Matrices & Determinants",
    subject: "Mathematics",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["algebra", "matrices", "determinants", "maths", "class 12"],
    size: "1.8 MB",
    pages: 36,
    downloads: 9800,
    url: "#",
  },
  {
    id: 3,
    title: "Trigonometry Formula Sheet",
    subject: "Mathematics",
    class: "Class 11",
    board: "CBSE",
    type: "Formula Sheet",
    tags: ["trigonometry", "formulas", "maths", "class 11", "quick revision"],
    size: "0.5 MB",
    pages: 4,
    downloads: 31200,
    url: "#",
  },
  {
    id: 4,
    title: "Probability & Statistics – Complete Notes",
    subject: "Mathematics",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["probability", "statistics", "maths", "class 12"],
    size: "3.1 MB",
    pages: 60,
    downloads: 7600,
    url: "#",
  },
  {
    id: 5,
    title: "JEE Maths – Previous Year Questions (2015–2024)",
    subject: "Mathematics",
    class: "JEE",
    board: "JEE",
    type: "PYQ",
    tags: ["jee", "maths", "previous year", "pyq", "entrance"],
    size: "5.2 MB",
    pages: 120,
    downloads: 54000,
    url: "#",
  },

  // ── PHYSICS ────────────────────────────────────────────────
  {
    id: 6,
    title: "Mechanics – Laws of Motion",
    subject: "Physics",
    class: "Class 11",
    board: "CBSE",
    type: "Notes",
    tags: ["mechanics", "laws of motion", "physics", "class 11", "newton"],
    size: "2.2 MB",
    pages: 44,
    downloads: 18700,
    url: "#",
  },
  {
    id: 7,
    title: "Electrostatics – Full Chapter",
    subject: "Physics",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["electrostatics", "electricity", "physics", "class 12", "coulomb"],
    size: "2.9 MB",
    pages: 56,
    downloads: 22300,
    url: "#",
  },
  {
    id: 8,
    title: "Optics – Ray & Wave Optics",
    subject: "Physics",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["optics", "ray optics", "wave optics", "physics", "class 12", "lens"],
    size: "3.4 MB",
    pages: 64,
    downloads: 15900,
    url: "#",
  },
  {
    id: 9,
    title: "JEE Physics – Thermodynamics PYQ",
    subject: "Physics",
    class: "JEE",
    board: "JEE",
    type: "PYQ",
    tags: ["thermodynamics", "jee", "physics", "previous year", "heat"],
    size: "2.1 MB",
    pages: 52,
    downloads: 33100,
    url: "#",
  },
  {
    id: 10,
    title: "Modern Physics – Atoms & Nuclei",
    subject: "Physics",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["modern physics", "atoms", "nuclei", "physics", "class 12"],
    size: "1.9 MB",
    pages: 38,
    downloads: 11200,
    url: "#",
  },

  // ── CHEMISTRY ──────────────────────────────────────────────
  {
    id: 11,
    title: "Organic Chemistry – Reaction Mechanisms",
    subject: "Chemistry",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["organic chemistry", "reactions", "mechanisms", "chemistry", "class 12"],
    size: "4.1 MB",
    pages: 88,
    downloads: 29400,
    url: "#",
  },
  {
    id: 12,
    title: "Periodic Table – Complete Properties",
    subject: "Chemistry",
    class: "Class 11",
    board: "CBSE",
    type: "Notes",
    tags: ["periodic table", "elements", "chemistry", "class 11"],
    size: "1.3 MB",
    pages: 24,
    downloads: 41800,
    url: "#",
  },
  {
    id: 13,
    title: "Chemical Bonding & Molecular Structure",
    subject: "Chemistry",
    class: "Class 11",
    board: "CBSE",
    type: "Notes",
    tags: ["chemical bonding", "molecular structure", "chemistry", "class 11"],
    size: "2.7 MB",
    pages: 52,
    downloads: 13600,
    url: "#",
  },
  {
    id: 14,
    title: "NEET Chemistry – Biomolecules",
    subject: "Chemistry",
    class: "NEET",
    board: "NEET",
    type: "Notes",
    tags: ["neet", "chemistry", "biomolecules", "biology chemistry"],
    size: "1.6 MB",
    pages: 32,
    downloads: 19900,
    url: "#",
  },

  // ── BIOLOGY ────────────────────────────────────────────────
  {
    id: 15,
    title: "Cell Biology – Structure & Function",
    subject: "Biology",
    class: "Class 11",
    board: "CBSE",
    type: "Notes",
    tags: ["cell biology", "cell structure", "biology", "class 11"],
    size: "3.2 MB",
    pages: 68,
    downloads: 21500,
    url: "#",
  },
  {
    id: 16,
    title: "NEET Biology – PYQ 2015–2024",
    subject: "Biology",
    class: "NEET",
    board: "NEET",
    type: "PYQ",
    tags: ["neet", "biology", "previous year", "pyq", "entrance"],
    size: "6.8 MB",
    pages: 160,
    downloads: 67000,
    url: "#",
  },
  {
    id: 17,
    title: "Human Physiology – Digestive System",
    subject: "Biology",
    class: "Class 11",
    board: "CBSE",
    type: "Notes",
    tags: ["physiology", "digestive system", "biology", "class 11", "human body"],
    size: "2.0 MB",
    pages: 40,
    downloads: 14300,
    url: "#",
  },
  {
    id: 18,
    title: "Genetics – Mendelian Inheritance",
    subject: "Biology",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["genetics", "mendelian", "inheritance", "biology", "class 12"],
    size: "2.5 MB",
    pages: 50,
    downloads: 17800,
    url: "#",
  },

  // ── ENGLISH ────────────────────────────────────────────────
  {
    id: 19,
    title: "English Grammar – Complete Guide",
    subject: "English",
    class: "Class 10",
    board: "CBSE",
    type: "Notes",
    tags: ["english", "grammar", "class 10", "cbse", "language"],
    size: "1.4 MB",
    pages: 28,
    downloads: 35600,
    url: "#",
  },
  {
    id: 20,
    title: "Writing Skills – Essay & Letter Format",
    subject: "English",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["english", "writing", "essay", "letter", "class 12"],
    size: "0.9 MB",
    pages: 18,
    downloads: 23100,
    url: "#",
  },

  // ── COMPUTER SCIENCE ───────────────────────────────────────
  {
    id: 21,
    title: "Python Programming – Basics to Advanced",
    subject: "Computer Science",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["python", "programming", "computer science", "class 12", "coding"],
    size: "3.8 MB",
    pages: 80,
    downloads: 44200,
    url: "#",
  },
  {
    id: 22,
    title: "Data Structures – Arrays, Stacks, Queues",
    subject: "Computer Science",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["data structures", "arrays", "stacks", "queues", "computer science"],
    size: "2.3 MB",
    pages: 48,
    downloads: 28700,
    url: "#",
  },
  {
    id: 23,
    title: "SQL & Database Management",
    subject: "Computer Science",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["sql", "database", "dbms", "computer science", "class 12"],
    size: "1.7 MB",
    pages: 34,
    downloads: 19500,
    url: "#",
  },

  // ── ECONOMICS ──────────────────────────────────────────────
  {
    id: 24,
    title: "Microeconomics – Demand & Supply",
    subject: "Economics",
    class: "Class 11",
    board: "CBSE",
    type: "Notes",
    tags: ["economics", "microeconomics", "demand", "supply", "class 11"],
    size: "1.5 MB",
    pages: 30,
    downloads: 12800,
    url: "#",
  },
  {
    id: 25,
    title: "Macroeconomics – National Income",
    subject: "Economics",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["economics", "macroeconomics", "national income", "gdp", "class 12"],
    size: "1.8 MB",
    pages: 36,
    downloads: 10400,
    url: "#",
  },

  // ── HISTORY ────────────────────────────────────────────────
  {
    id: 26,
    title: "Modern Indian History – Complete Notes",
    subject: "History",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["history", "modern india", "independence", "class 12", "freedom struggle"],
    size: "2.6 MB",
    pages: 56,
    downloads: 16200,
    url: "#",
  },
  {
    id: 27,
    title: "World History – World Wars I & II",
    subject: "History",
    class: "Class 11",
    board: "CBSE",
    type: "Notes",
    tags: ["history", "world war", "wwi", "wwii", "class 11"],
    size: "2.1 MB",
    pages: 44,
    downloads: 13900,
    url: "#",
  },

  // ── GEOGRAPHY ──────────────────────────────────────────────
  {
    id: 28,
    title: "Physical Geography – Atmosphere & Climate",
    subject: "Geography",
    class: "Class 11",
    board: "CBSE",
    type: "Notes",
    tags: ["geography", "atmosphere", "climate", "physical geography", "class 11"],
    size: "2.4 MB",
    pages: 48,
    downloads: 9700,
    url: "#",
  },
  {
    id: 29,
    title: "Indian Geography – Resources & Agriculture",
    subject: "Geography",
    class: "Class 12",
    board: "CBSE",
    type: "Notes",
    tags: ["geography", "india", "resources", "agriculture", "class 12"],
    size: "2.0 MB",
    pages: 40,
    downloads: 8900,
    url: "#",
  },

  // ── COMPETITIVE EXAMS ──────────────────────────────────────
  {
    id: 30,
    title: "General Knowledge – Current Affairs 2024",
    subject: "General Knowledge",
    class: "Competitive",
    board: "General",
    type: "Notes",
    tags: ["general knowledge", "current affairs", "gk", "upsc", "ssc", "competitive"],
    size: "4.5 MB",
    pages: 96,
    downloads: 78500,
    url: "#",
  },
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
