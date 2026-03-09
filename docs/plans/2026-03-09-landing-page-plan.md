# noteOS Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page marketing site for noteOS that non-technical users can land on, understand the value, and download the starter vault.

**Architecture:** Plain HTML + CSS + minimal vanilla JS. No build step, no dependencies. Hosted via GitHub Pages from `/site` folder. Copy adapted from the README.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, GitHub Pages

**Design doc:** `docs/plans/2026-03-09-landing-page-design.md`

---

### Task 1: Set up site folder and GitHub Pages infrastructure

**Files:**
- Create: `site/index.html` (skeleton only)
- Create: `site/styles.css` (empty)
- Create: `site/script.js` (empty)
- Modify: `.gitattributes` (create or modify to exclude site from archives)

**Step 1: Create `.gitattributes` to exclude site from download archives**

```
site/ export-ignore
docs/ export-ignore
```

This ensures anyone who downloads the repo as a .zip from GitHub's "Download ZIP" button gets only the vault files, not the website code or design docs.

**Step 2: Create the site directory and skeleton HTML**

Create `site/index.html` with:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>noteOS — A Personal Operating System Powered by AI</title>
    <meta name="description" content="A starter vault of folders, text files, and AI instructions that connects everything you know. Free. No code. No account needed.">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <main>
        <p>Site under construction.</p>
    </main>
    <script src="script.js"></script>
</body>
</html>
```

**Step 3: Verify the skeleton loads**

Open `site/index.html` in a browser. Should see "Site under construction."

**Step 4: Commit**

```bash
git add .gitattributes site/
git commit -m "scaffold: site folder, skeleton HTML, gitattributes for download isolation"
```

---

### Task 2: Build the CSS foundation

**Files:**
- Modify: `site/styles.css`

**Step 1: Write the full base stylesheet**

This establishes the warm/personal visual identity: typography, colors, spacing, responsive layout, button styles, section rhythm.

```css
/* Reset and base */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --color-bg: #FDFBF7;
    --color-text: #2D2D2D;
    --color-text-secondary: #5A5A5A;
    --color-accent: #5B7F5B;
    --color-accent-hover: #4A6B4A;
    --color-card-bg: #FFFFFF;
    --color-card-border: #E8E4DC;
    --color-divider: #E8E4DC;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --max-width: 760px;
    --section-padding: 100px 24px;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    font-size: 18px;
    line-height: 1.7;
    color: var(--color-text);
    background-color: var(--color-bg);
    -webkit-font-smoothing: antialiased;
}

/* Layout */
.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--section-padding);
}

section {
    border-bottom: 1px solid var(--color-divider);
}

section:last-of-type {
    border-bottom: none;
}

/* Typography */
h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
}

h2 {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
    margin-bottom: 16px;
}

h3 {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 8px;
}

p {
    margin-bottom: 16px;
    color: var(--color-text);
}

p.secondary {
    color: var(--color-text-secondary);
}

.subhead {
    font-size: 1.15rem;
    color: var(--color-text-secondary);
    margin-bottom: 32px;
    line-height: 1.6;
}

/* Buttons */
.btn-primary {
    display: inline-block;
    background-color: var(--color-accent);
    color: #FFFFFF;
    padding: 14px 32px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.2s ease;
}

.btn-primary:hover {
    background-color: var(--color-accent-hover);
}

.btn-secondary {
    display: inline-block;
    color: var(--color-accent);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    margin-left: 16px;
}

.btn-secondary:hover {
    text-decoration: underline;
}

.cta-group {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 32px;
}

/* Cards */
.card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 32px;
}

.card {
    background: var(--color-card-bg);
    border: 1px solid var(--color-card-border);
    border-radius: 12px;
    padding: 28px;
}

.card h3 {
    margin-bottom: 8px;
}

.card p {
    margin-bottom: 0;
    color: var(--color-text-secondary);
    font-size: 0.95rem;
}

/* Steps */
.steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 32px;
}

.step {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.step-number {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    background-color: var(--color-accent);
    color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
}

.step-content h3 {
    margin-bottom: 4px;
}

.step-content p {
    margin-bottom: 0;
    color: var(--color-text-secondary);
    font-size: 0.95rem;
}

/* Anecdotes */
.anecdote {
    margin-bottom: 28px;
    padding-left: 20px;
    border-left: 3px solid var(--color-divider);
}

.anecdote:last-child {
    margin-bottom: 0;
}

.anecdote p {
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    margin-bottom: 0;
}

/* Footer */
footer {
    text-align: center;
    padding: 40px 24px;
    font-size: 0.85rem;
    color: var(--color-text-secondary);
}

footer a {
    color: var(--color-text-secondary);
    text-decoration: underline;
}

/* Small note under CTA */
.small-note {
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    margin-top: 16px;
}

/* Responsive */
@media (min-width: 640px) {
    .card-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .steps {
        grid-template-columns: repeat(3, 1fr);
    }

    .step {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}

@media (max-width: 639px) {
    :root {
        --section-padding: 64px 20px;
    }

    .cta-group {
        flex-direction: column;
        align-items: flex-start;
    }

    .btn-secondary {
        margin-left: 0;
    }
}
```

**Step 2: Verify styles load**

Update `index.html` body to include a test heading with class `container`, reload browser. Confirm warm cream background, Inter font loading, charcoal text.

**Step 3: Commit**

```bash
git add site/styles.css
git commit -m "style: full CSS foundation with warm/personal design system"
```

---

### Task 3: Build the Hero section

**Files:**
- Modify: `site/index.html`

**Step 1: Write the Hero HTML**

Replace the skeleton `<main>` content with the hero section. The headline, subhead, and CTA buttons.

```html
<!-- Hero -->
<section id="hero">
    <div class="container">
        <h1>Your life is worth remembering.<br>All of it.</h1>
        <p class="subhead">noteOS is a personal knowledge system powered by AI. A starter vault of folders, text files, and instructions that connects everything you know, gets smarter the more you use it, and belongs entirely to you.</p>
        <div class="cta-group">
            <a href="https://github.com/BOOMCHOPALAKA/noteOS/releases/latest/download/noteOS-starter-vault.zip" class="btn-primary">Download the Starter Vault</a>
            <a href="https://github.com/BOOMCHOPALAKA/noteOS#readme" class="btn-secondary">Read the full guide &rarr;</a>
        </div>
    </div>
</section>
```

Note: The download link points to a GitHub Release asset. We'll create the release in Task 7.

**Step 2: Verify in browser**

Large headline, subhead in muted text, green button + text link. Responsive on mobile.

**Step 3: Commit**

```bash
git add site/index.html
git commit -m "feat: hero section with headline and CTAs"
```

---

### Task 4: Build The Problem and The Fix sections

**Files:**
- Modify: `site/index.html`

**Step 1: Add The Problem section after Hero**

```html
<!-- The Problem -->
<section id="problem">
    <div class="container">
        <h2>AI is useful. But there's a ceiling.</h2>
        <p>You're probably already using ChatGPT, Claude, or Gemini. It helps with emails, brainstorming, explaining things. But the memory is shallow. You keep re-explaining your situation. You can't verify where it got its answers. And everything you've built is locked inside that one app. If you switch tools, you start from zero.</p>
    </div>
</section>
```

**Step 2: Add The Fix section with three value prop cards**

```html
<!-- The Fix -->
<section id="fix">
    <div class="container">
        <h2>noteOS removes the ceiling.</h2>
        <div class="card-grid">
            <div class="card">
                <h3>It remembers everything.</h3>
                <p>AI searches through a structured knowledge base of everything you've built. Your projects, your people, your decisions. Not shallow memory. Real context that compounds over time.</p>
            </div>
            <div class="card">
                <h3>You can check its work.</h3>
                <p>Ask "where did you get that?" and AI points to specific notes and sections. You can open them and verify. Not vague answers. Real references you can trace.</p>
            </div>
            <div class="card">
                <h3>You own it all.</h3>
                <p>Plain text files on your computer. Nothing proprietary. If something better comes along tomorrow, take your entire knowledge base with you. Full context, day one.</p>
            </div>
        </div>
    </div>
</section>
```

**Step 3: Verify in browser**

Problem section should read clean. Three cards should be side-by-side on desktop, stacked on mobile.

**Step 4: Commit**

```bash
git add site/index.html
git commit -m "feat: problem and value prop sections"
```

---

### Task 5: Build How It Works and Anecdotes sections

**Files:**
- Modify: `site/index.html`

**Step 1: Add How It Works section**

```html
<!-- How It Works -->
<section id="how">
    <div class="container">
        <h2>Three steps. Twenty minutes.</h2>
        <div class="steps">
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h3>Download Obsidian</h3>
                    <p>Free app that makes your notes look good. Clickable links, instant search, visual graph of how everything connects.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h3>Get the starter vault</h3>
                    <p>A pre-built folder with templates, structure, and an instruction file that teaches AI how to work with your notes.</p>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h3>Point your AI tool at it</h3>
                    <p>Same chat experience you already know. One setting change. Now AI can read, create, and search through all your notes.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Step 2: Add What It Looks Like In Practice section**

```html
<!-- In Practice -->
<section id="practice">
    <div class="container">
        <h2>What it looks like after a few months of just talking.</h2>
        <div class="anecdote">
            <p>You had a conversation with your doctor three months ago. Details are fuzzy. You ask the system. It pulls up the full summary, links to related notes, and reminds you of the follow-up you said you'd do. Not because you organized everything perfectly. Because the system did.</p>
        </div>
        <div class="anecdote">
            <p>A contractor gave you a quote last fall. You can't find the email. You ask. The system traces through your notes and gives you the number, the date, and what you said you'd want changed. One question, full context.</p>
        </div>
        <div class="anecdote">
            <p>You're planning a trip and the system connects it to a restaurant your friend mentioned six months ago in a completely different conversation. Your life is full of these threads. The system finds them for you.</p>
        </div>
    </div>
</section>
```

**Step 3: Verify in browser**

Steps should display as numbered circles with text. On desktop, three columns. On mobile, stacked with circles on the left. Anecdotes should have a subtle left border.

**Step 4: Commit**

```bash
git add site/index.html
git commit -m "feat: how it works steps and real-life anecdotes"
```

---

### Task 6: Build bottom CTA and Footer

**Files:**
- Modify: `site/index.html`

**Step 1: Add bottom CTA section**

```html
<!-- Get Started -->
<section id="start">
    <div class="container" style="text-align: center;">
        <h2>Start building your second brain.</h2>
        <p class="subhead">Free. No account needed. Just a folder of text files and an AI tool you already have.</p>
        <div class="cta-group" style="justify-content: center;">
            <a href="https://github.com/BOOMCHOPALAKA/noteOS/releases/latest/download/noteOS-starter-vault.zip" class="btn-primary">Download the Starter Vault</a>
            <a href="https://github.com/BOOMCHOPALAKA/noteOS#readme" class="btn-secondary">Read the full guide &rarr;</a>
        </div>
    </div>
</section>
```

**Step 2: Add footer**

```html
<!-- Footer -->
<footer>
    <p>noteOS is open source. <a href="https://github.com/BOOMCHOPALAKA/noteOS">View on GitHub</a>.</p>
</footer>
```

**Step 3: Close out the HTML tags and add Google Fonts link**

Make sure the `<head>` includes:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Step 4: Verify full page flow in browser**

Scroll through the entire page. Check: hero reads clean, problem is punchy, cards are balanced, steps are clear, anecdotes feel personal, bottom CTA is prominent, footer is minimal. Check mobile by resizing.

**Step 5: Commit**

```bash
git add site/
git commit -m "feat: bottom CTA, footer, Google Fonts integration"
```

---

### Task 7: Add minimal JS and create GitHub Release

**Files:**
- Modify: `site/script.js`

**Step 1: Add smooth scroll behavior for any internal links (minimal)**

```js
// Smooth scroll for anchor links (fallback for browsers without CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
```

**Step 2: Create the GitHub Release with vault-only .zip**

This is a manual/CLI step. Create a .zip of only the vault files (excluding `site/` and `docs/`):

```bash
cd /Users/chop/Documents/chopOS/repos/noteOS
# Create a clean vault-only zip
zip -r noteOS-starter-vault.zip . \
    -x "site/*" \
    -x "docs/*" \
    -x ".git/*" \
    -x ".gitattributes" \
    -x ".gitignore"

# Create a GitHub release and upload the asset
gh release create v1.0.0 noteOS-starter-vault.zip \
    --title "noteOS Starter Vault v1.0.0" \
    --notes "The starter vault. Download, unzip, open in Obsidian, point your AI tool at it."

# Clean up local zip
rm noteOS-starter-vault.zip
```

**Step 3: Verify release asset download link works**

The download button URL should be:
`https://github.com/BOOMCHOPALAKA/noteOS/releases/latest/download/noteOS-starter-vault.zip`

**Step 4: Commit JS**

```bash
git add site/script.js
git commit -m "feat: smooth scroll JS, site complete"
```

---

### Task 8: Enable GitHub Pages and final verification

**Step 1: Push all commits**

```bash
git push
```

**Step 2: Enable GitHub Pages**

```bash
# Configure GitHub Pages to deploy from /site on main
gh api repos/BOOMCHOPALAKA/noteOS/pages -X PUT \
    -f source.branch=main \
    -f source.path=/site
```

Or do it manually: GitHub repo > Settings > Pages > Source: "Deploy from a branch" > Branch: `main`, Folder: `/site`.

**Step 3: Verify the live site**

Visit `https://boomchopalaka.github.io/noteOS/` and verify:
- Page loads with warm cream background and Inter font
- Hero headline is prominent and readable
- Both CTA buttons work (download link and README link)
- Three value prop cards display correctly
- Steps section is clear
- Anecdotes feel personal
- Mobile responsive (test on phone or dev tools)
- Download link actually downloads the vault .zip

**Step 4: Commit any final tweaks**

---

## Summary

8 tasks. Each one is a self-contained commit. The site goes from skeleton to live in a single session. No build step at any point. Every change is verifiable by opening `index.html` in a browser.
