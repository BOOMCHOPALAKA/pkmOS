# noteOS Landing Page Design

## Summary

Single-page marketing site for noteOS. Target audience: non-technical users (the "Lisa persona") who use AI casually and would benefit from a structured knowledge system but don't know it exists yet. The page sells the idea and gets them to download the starter vault. The README remains the comprehensive guide.

## Decisions

- **Hosting:** GitHub Pages, deployed from `/site` folder on `main` branch
- **Tech:** Plain HTML + CSS + minimal vanilla JS (smooth scrolling). No framework, no build step, no dependencies.
- **Visual style:** Warm and personal. Off-white/cream background, dark charcoal text, earth-tone accent (muted green or warm amber for buttons/highlights). Generous whitespace. System font stack or Inter via Google Fonts.
- **Scope:** Single scrolling page. Not multi-page.
- **Primary CTA:** "Download the Starter Vault" linking to a GitHub Release .zip asset (vault files only, no site code)
- **Secondary CTA:** "Read the full guide" linking to the README on GitHub
- **Isolation:** `/site` folder excluded from the starter vault download via `.gitattributes` export-ignore or GitHub Release asset containing only vault files

## Page Sections

### 1. Hero
- Headline (workshop during implementation, something like "Your life is worth remembering. All of it.")
- One-line subhead naming what noteOS is
- Primary CTA button: "Download the Starter Vault"
- Secondary text link: "Read the full guide"

### 2. The Problem
- 3-4 sentences adapted from the README's ceiling paragraph
- AI forgets, you re-explain, you can't verify answers, you're locked into one app
- Short and punchy. Not a wall of text.

### 3. The Fix (three value props)
- Three cards or blocks, each with a headline and 1-2 sentences:
  - **It remembers everything.** Structured knowledge base vs. shallow memory.
  - **You can check its work.** AI cites specific notes, not vague summaries. The trust/verification value prop.
  - **You own it all.** Plain text files on your computer. Portable. Not locked in.

### 4. How It Works
- Visual 3-step flow:
  1. Download Obsidian (free app that makes your notes look good)
  2. Get the starter vault (pre-built folder structure + AI instructions)
  3. Point your AI tool at it (same chat experience, now with your knowledge behind it)
- One sentence under each step.

### 5. What It Looks Like In Practice
- 2-3 short anecdotes from real use, adapted from README Step 4
- Focus on relatable scenarios for Lisa: meeting notes that surface three weeks later, a contractor quote you forgot about, a doctor conversation with full context, a recipe that connects to a vacation cooking class
- These read like mini-stories, not feature bullets

### 6. Get Started (bottom CTA)
- Repeat primary CTA: "Download the Starter Vault"
- Secondary: "Read the full guide on GitHub"
- Small note: "Free. No account needed. Just a folder of text files."

### 7. Footer
- Minimal. GitHub repo link. "Built by Scott Schopman" or similar credit.

## Visual Design Details

- **Typography:** Inter (Google Fonts) or system font stack. Hero headline large and bold. Body text 18-20px for readability. Generous line-height (1.6-1.7).
- **Colors:**
  - Background: warm off-white/cream (#FDFBF7 or similar)
  - Text: dark charcoal (#2D2D2D)
  - Accent: muted sage green (#5B7F5B) or warm amber (#C4883A) for buttons and highlights
  - Cards/blocks: slightly darker cream or white with subtle shadow
- **Layout:** Max-width content container (~720-800px). Centered. Sections separated by generous padding (80-120px vertical).
- **Mobile:** Fully responsive. Single column. Touch-friendly button sizes. Hero text scales down gracefully.
- **No images for v1.** Copy does the selling. Screenshots or graph view visual can be added later.

## Technical Details

### File structure
```
noteOS/
├── site/
│   ├── index.html
│   ├── styles.css
│   └── script.js      (minimal: smooth scroll, maybe a subtle animation)
├── .gitattributes      (exclude /site from download archives)
├── README.md
├── CLAUDE.md
├── MEMORY.md
└── [vault files...]
```

### GitHub Pages setup
- Deploy from `/site` folder on `main` branch
- URL: `https://boomchopalaka.github.io/noteOS/` (custom domain can be added later)

### Download isolation
- `.gitattributes` with `site/ export-ignore` to exclude site code from `git archive` downloads
- OR: Create a GitHub Release with a manually uploaded vault-only .zip as the release asset
- The release asset approach is more reliable for non-technical users (direct download link, no confusion)

### Content source
- Page copy adapted from README sections. The landing page is a condensed, visual version of the README's best material. Not a duplicate of it.
