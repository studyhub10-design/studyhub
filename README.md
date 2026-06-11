# 📚 StudyHub — Owner's Guide

## What This Is
A fully static study material website. No server, no database, no backend.
Everything runs in the visitor's browser. Zero lag, zero cost.

---

## 📁 File Structure
```
studyhub/
├── index.html          ← The entire website (all pages)
├── css/
│   └── style.css       ← All styling
└── js/
    ├── data.js         ← YOUR DATABASE (add PDFs here)
    └── app.js          ← Search engine & page logic
```

---

## 🔑 HOW TO ADD YOUR PDFs (The Most Important Part)

Open `js/data.js` and add entries to the `STUDY_DATA` array:

```js
{
  id: 31,                            // unique number, increment each time
  title: "Class 10 Science Notes",   // what students will see
  subject: "Science",                // subject name
  class: "Class 10",                 // class level
  board: "CBSE",                     // board name
  type: "Notes",                     // Notes | PYQ | Formula Sheet | Textbook
  tags: ["science", "class 10", "cbse", "notes"],  // search keywords
  size: "2.1 MB",                    // file size (just for display)
  pages: 44,                         // number of pages (for display)
  downloads: 0,                      // download count (cosmetic, update manually)
  url: "https://your-pdf-link.com/file.pdf",  // ← PUT YOUR PDF LINK HERE
},
```

### Where to host your PDFs for free:
| Host | How to get link |
|------|----------------|
| **Google Drive** | Upload → Share (Anyone with link) → Copy link → convert to direct link |
| **GitHub** | Upload to a repo → click file → Raw button → copy URL |
| **Dropbox** | Share → copy link → change `dl=0` to `dl=1` at end |

#### Google Drive → Direct Download Link:
```
Original:  https://drive.google.com/file/d/FILE_ID/view?usp=sharing
Direct:    https://drive.google.com/uc?export=download&id=FILE_ID
```

---

## 🎨 HOW TO CUSTOMIZE

### Change site name:
In `index.html`, search for `StudyHub` and replace with your site name.

### Change colors (in `css/style.css`):
```css
:root {
  --accent:  #4F8EF7;   /* main blue — change to your brand color */
  --accent2: #7C5CFC;   /* secondary purple */
  --green:   #22C55E;   /* success green */
  --bg:      #0D0F14;   /* page background */
  --card:    #1C2030;   /* card background */
}
```

### Add a new subject icon (in `js/app.js`):
```js
const SUBJECT_ICONS = {
  "Science": { icon: "🔬", color: "#22C55E" },
  // add yours here
};
```

### Change quick search tags (in `index.html`):
```html
<span class="qtag" data-query="your search term">Label Text</span>
```

---

## 🚀 HOW TO DEPLOY (Make it live on the internet)

### Option 1 — GitHub Pages (Recommended, Free)
1. Create a free account at [github.com](https://github.com)
2. Create a new repository (e.g. `studyhub`)
3. Upload all your files (index.html, css/, js/ folders)
4. Go to Settings → Pages → Source: main branch → Save
5. Your site is live at: `https://yourusername.github.io/studyhub`

### Option 2 — Netlify (Easiest, Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop your `studyhub` folder onto their deploy zone
3. Done. Live instantly at a random URL (you can set a custom one)

### Option 3 — Vercel (Fast, Free)
1. Push to GitHub first
2. Go to [vercel.com](https://vercel.com) → Import project → connect GitHub repo
3. Deploy — done

### Option 4 — Custom Domain
After deploying to any of the above, you can add a custom domain
(like `studyhub.in`) for ~₹800/year from GoDaddy, Namecheap, etc.

---

## ⚡ HOW IT HANDLES 10,000+ PDFs WITH ZERO LAG

The trick: `js/data.js` is just a JavaScript array. When a student searches:
1. The browser already has the full index loaded (it's just text, ~1-2MB for 10k entries)
2. Search runs locally using `.filter()` — no network call needed
3. Results appear in <10 milliseconds

To keep it fast even at scale:
- Keep `data.js` under ~5MB (10,000 entries ≈ ~2MB)
- If you exceed 5MB, split into `data-math.js`, `data-science.js` etc. and load lazily

---

## 📊 TRACKING DOWNLOADS (Optional)

Since there's no backend, you can't auto-count downloads. Options:
1. **Google Analytics** — add the GA script to `index.html` for page views
2. **Bit.ly** — use shortened links, their dashboard shows click counts
3. **Manually update** the `downloads` number in `data.js` periodically

---

## 🛠 QUICK WINS — THINGS TO DO FIRST

- [ ] Replace all `url: "#"` in data.js with real PDF links
- [ ] Update `downloads` numbers to realistic values
- [ ] Change the site name from "StudyHub" to your brand
- [ ] Add your own color in `--accent` in style.css
- [ ] Deploy to GitHub Pages or Netlify
- [ ] Share the link!
