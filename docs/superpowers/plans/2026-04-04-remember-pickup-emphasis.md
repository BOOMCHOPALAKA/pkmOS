# Remember/Pickup Emphasis Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate the remember/pickup session continuity workflow from a buried skills subsection to a central part of the noteOS pitch in both README.md and the landing page.

**Architecture:** Five content changes applied to two files (README.md and docs/index-updated.html). Each change modifies specific text blocks. Changes are sequential within each file but the two files are independent.

**Tech Stack:** Markdown (README), HTML (landing page)

---

### Task 1: README — Add "Imagine a World" Beat #2

**Files:**
- Modify: `README.md:28-29` (between "It remembers what you don't" and "Things start connecting themselves")

- [ ] **Step 1: Insert new beat after "It remembers what you don't"**

In `README.md`, find this text:

```
**It remembers what you don't.** You had a conversation with your doctor three months ago. Or a contractor gave you a quote. Or you made a decision in a meeting and can't remember the reasoning. Instead of digging through emails or hoping you wrote it down somewhere, you ask. The system traces through your notes and gives you the answer with full context. Not because you organized everything perfectly. Because the system did.

**Things start connecting themselves.**
```

Insert between those two paragraphs:

```markdown
**You pick up right where you left off.** You close your laptop Friday afternoon in the middle of a complex project. Or halfway through planning a trip. Or after a long conversation about a decision you're weighing. Monday morning you open a new chat, pick up where you left off, and you're back in it. What you were working on, where you stopped, what's still open. No re-explaining. No scrolling through old chats trying to reconstruct what happened.

```

- [ ] **Step 2: Verify the edit**

Read README.md lines 28-34 and confirm the new beat appears between "It remembers" and "Things start connecting."

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "README: add session continuity beat to Imagine a World section"
```

---

### Task 2: README — Replace Ceiling Paragraph with Intern-to-Partner Contrast

**Files:**
- Modify: `README.md` (the "What This Actually Is" opening, currently lines ~42-46)

- [ ] **Step 1: Replace the ceiling and noteOS intro paragraphs**

In `README.md`, find this text:

```
But there's a ceiling. And if you've used these various AI chatbots enough, you've hit your head on it. Carrying on a conversation in one chat, then moving to another session and bringing something up expecting it to just know. But it acts like it doesn't have the slightest clue. Or constantly having to give it background info on something for the umpteenth time.

That's where this idea of a personal operating system comes in. Your own Wikipedia that you're both the editor and reader of, with AI as the engine that helps you build and search through it all. Your projects, your ideas, your info, your plans, your decisions, your preferences, your life. All in files you control on your computer. Plain text. Nothing proprietary. It gets more useful the more you put into it. That's noteOS.
```

Replace with:

```markdown
But there's a ceiling. And if you've used these tools enough, you've hit your head on it. Every conversation seems to start from scratch. You re-explain your projects, your thoughts on something, the background, your preferences. You tell it things you've told it before. You double-check its answers because you know it's filling gaps with confident guesses. It's like working with a brilliant intern. Smart, fast, capable. But every morning they show up having forgotten everything from yesterday. So you manage them. You re-explain context. You verify their work. You get useful output, but it takes effort to get there every time.

That's where this idea of a personal operating system comes in. What if instead of managing an intern, you were working with a partner who already knew your projects, your history, and your preferences? Who you could trust to check their own work against real context? Who got sharper the more you worked together, not because the AI got smarter, but because the system around it got richer? That's noteOS.
```

- [ ] **Step 2: Verify the edit**

Read the "What This Actually Is" section and confirm the intern metaphor flows into the partner framing, ending with "That's noteOS."

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "README: add intern-to-partner contrast in What This Actually Is"
```

---

### Task 3: README — Insert Session Continuity Walkthrough and Update Island Bullet

**Files:**
- Modify: `README.md` (insert new subsection after "That's noteOS." paragraph, before "Things You Won't Have to Do Anymore"; also update one bullet in that list)

- [ ] **Step 1: Insert session continuity subsection**

In `README.md`, find this text:

```
That's where this idea of a personal operating system comes in. What if instead of managing an intern, you were working with a partner who already knew your projects, your history, and your preferences? Who you could trust to check their own work against real context? Who got sharper the more you worked together, not because the AI got smarter, but because the system around it got richer? That's noteOS.

### Things You Won't Have to Do Anymore
```

Insert between those two blocks:

```markdown
### How session continuity actually works

Two commands. `/remember` is the save. `/pickup` is the load.

You're in a session and you've covered a lot of ground. Decisions made, new information surfaced, things still open. You type `/remember`. AI assesses everything substantive from the conversation, figures out where each piece goes. Daily note, project notes, your cross-session context file, your chat log. You don't have to explain what to save or where. It reads the conversation, reads the vault, and connects the dots. It also nudges you when it notices a natural breakpoint. After a big decision, after processing a meeting, after any substantial block of work. Use it whenever it feels right. Mid-session, end of session, multiple times in a long conversation. Think of it like hitting save.

There's a practical reason this matters beyond convenience. AI tools have a context window. The longer a conversation goes, the more likely things get missed, repeated, or slightly off. Starting fresh conversations regularly is genuinely better practice. But only if you have a way to carry the important stuff forward. That's what remember does. You get the benefits of a clean slate without the cost of lost context.

Next session. You type `/pickup`. AI reads what was saved, traces the links to the relevant notes, and gives you a concise briefing. Where you left off. What's active. What's waiting on someone else. What needs attention. Then it asks where you want to pick up from. You pick one and you're back in it.

Here's what's actually happening. When you run `/remember`, AI writes to your vault. Meeting notes and updates go to your daily note. Status changes go to project notes. A context file tracks what's active, what's blocked, and what's next. A chat log records what was discussed and what got saved. Everything gets linked together. When you run `/pickup`, AI reads that context file, follows the links, and reconstructs where you are. It's not magic. It's just well-organized text files that AI knows how to read and write.

noteOS is already set up to persist things proactively as you work. Auto-logging routine items, nudging you when something substantive comes up that should be captured. But `/remember` is you taking control. It's the manual save that makes sure nothing gets missed. The system tries to catch things on its own. Remember guarantees it.

That's the loop. Save when you've done meaningful work. Load when you're back. The more you use it, the more natural it gets.

```

- [ ] **Step 2: Update the "island" bullet**

In the "Things You Won't Have to Do Anymore" list, find:

```
**Treat every conversation as an island.** Notes link to other notes. AI searches your vault before answering. The denser the web gets, the better it navigates. You build that density just by using it.
```

Replace with:

```markdown
**Treat every conversation as an island.** `/remember` saves where you are. `/pickup` gets you back. Your notes link to each other, AI searches across them, and the context compounds over time. New sessions start informed, not blank.
```

- [ ] **Step 3: Verify both edits**

Read the full "What This Actually Is" section. Confirm: intern-to-partner paragraph → "How session continuity actually works" subsection → "Things You Won't Have to Do Anymore" with updated island bullet.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "README: add session continuity walkthrough, update island bullet"
```

---

### Task 4: README — Replace Skills Section Session Continuity Walkthrough

**Files:**
- Modify: `README.md` (the "Going Deeper" skills section, session continuity subsection)

- [ ] **Step 1: Replace the session continuity subsection**

In `README.md`, find this text (the full subsection from heading through the end of its last paragraph):

```
#### Session continuity: never lose context again

The two most powerful skills in the vault are `remember` and `pickup`. They solve the single biggest frustration with AI: losing everything when you close the chat window.

**`/remember`** is the save. You type it (or say "log this chat") and AI assesses everything substantive from your conversation. What decisions were made, what new information surfaced, what's still open. Then it figures out where each piece goes. Daily note, project notes, your cross-session context file, your chat log. You don't have to explain what to save or where. It reads the conversation, reads the vault, and connects the dots. It also nudges you at natural breakpoints. After a big decision, after processing a batch of meeting transcripts, after any substantial block of work. "Want me to log this session? We covered X, Y, and Z."

**`/pickup`** is the load. You start a new session and type it. AI reads what was saved, traces the links to the relevant notes, and gives you a concise briefing. Where you left off. What's active. What's waiting on someone else. What needs attention. Then it asks "Where do you want to pick up from?" with a few options drawn from your active threads. You pick one and you're back in it. No re-explaining. No "so last time we were talking about..." Just pick up and go.

These two work together. The quality of the pickup depends entirely on the quality of what remember saved. And remember is designed to write for continuation. Not just "what happened" but "where things stand, what's next, and what to read to get the full picture." Every entry includes links to the specific notes and sections that have the details. Your chat log becomes a running record of every session, what was discussed, and what made it into the vault. It's a trail of breadcrumbs you can trace back anytime.
```

Replace with:

```markdown
#### Session continuity

The remember/pickup workflow is covered in detail above. See [How session continuity actually works](#how-session-continuity-actually-works). The skills section here focuses on the other workflows that ship with the vault.
```

- [ ] **Step 2: Also update the "done for the day" line in "What skills look like in practice"**

Find this line in the "What skills look like in practice" subsection:

```
You're done for the day. You type `/remember`. Everything gets saved, linked, timestamped. Tomorrow you type `/pickup`. You're caught up in 30 seconds and working again.
```

Replace with:

```markdown
You've covered a lot of ground in this session. You type `/remember`. Everything gets saved, linked, timestamped. Tomorrow you type `/pickup`. Caught up in 30 seconds.
```

- [ ] **Step 3: Verify the edit**

Read the skills section from "Skills: teaching AI how you work" through "What's included." Confirm the session continuity subsection is now a brief reference, and the "What skills look like in practice" line no longer implies end-of-day only.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "README: replace skills session continuity with reference to new location"
```

---

### Task 5: Landing Page — Add "Imagine a World" Beat #2

**Files:**
- Modify: `docs/index-updated.html:338-339` (between "It remembers" and "Things start connecting")

- [ ] **Step 1: Insert new beat**

In `docs/index-updated.html`, find:

```html
            <p><strong>It remembers what you don't.</strong> You had a conversation with your doctor three months ago. Or a contractor gave you a quote. Or you made a decision in a meeting and can't remember the reasoning. Instead of digging through emails or hoping you wrote it down somewhere, you ask. The system traces through your notes and gives you the answer with full context. Not because you organized everything perfectly. Because the system did.</p>
            <p><strong>Things start connecting themselves.</strong>
```

Insert between those two lines:

```html
            <p><strong>You pick up right where you left off.</strong> You close your laptop Friday afternoon in the middle of a complex project. Or halfway through planning a trip. Or after a long conversation about a decision you're weighing. Monday morning you open a new chat, pick up where you left off, and you're back in it. What you were working on, where you stopped, what's still open. No re-explaining. No scrolling through old chats trying to reconstruct what happened.</p>
```

- [ ] **Step 2: Verify the edit**

Read the Imagine a World section in the HTML and confirm the new beat appears in position #2.

- [ ] **Step 3: Commit**

```bash
git add docs/index-updated.html
git commit -m "Landing page: add session continuity beat to Imagine a World"
```

---

### Task 6: Landing Page — Replace Ceiling Paragraph with Intern-to-Partner Contrast

**Files:**
- Modify: `docs/index-updated.html:349-351` (the "What This Actually Is" section opening)

- [ ] **Step 1: Replace ceiling and noteOS intro paragraphs**

In `docs/index-updated.html`, find:

```html
            <p>But there's a ceiling. And if you've used these various AI chatbots enough, you've hit your head on it. Carrying on a conversation in one chat, then moving to another session and bringing something up expecting it to just know. But it acts like it doesn't have the slightest clue. Or constantly having to give it background info on something for the umpteenth time.</p>
            <p>That's where this idea of a personal operating system comes in. Your own Wikipedia that you're both the editor and reader of, with AI as the engine that helps you build and search through it all. Your projects, your ideas, your info, your plans, your decisions, your preferences, your life. All in files you control on your computer. Plain text. Nothing proprietary. It gets more useful the more you put into it. That's noteOS.</p>
```

Replace with:

```html
            <p>But there's a ceiling. And if you've used these tools enough, you've hit your head on it. Every conversation seems to start from scratch. You re-explain your projects, your thoughts on something, the background, your preferences. You tell it things you've told it before. You double-check its answers because you know it's filling gaps with confident guesses. It's like working with a brilliant intern. Smart, fast, capable. But every morning they show up having forgotten everything from yesterday. So you manage them. You re-explain context. You verify their work. You get useful output, but it takes effort to get there every time.</p>
            <p>That's where this idea of a personal operating system comes in. What if instead of managing an intern, you were working with a partner who already knew your projects, your history, and your preferences? Who you could trust to check their own work against real context? Who got sharper the more you worked together, not because the AI got smarter, but because the system around it got richer? That's noteOS.</p>
```

- [ ] **Step 2: Verify the edit**

Read the What This Actually Is section in the HTML. Confirm intern metaphor and partner framing.

- [ ] **Step 3: Commit**

```bash
git add docs/index-updated.html
git commit -m "Landing page: add intern-to-partner contrast"
```

---

### Task 7: Landing Page — Insert Session Continuity Section and Update Continuity Row

**Files:**
- Modify: `docs/index-updated.html` (insert new section after What This Actually Is, before Things You Won't Have to Do Anymore; update Continuity row in comparison grid)

- [ ] **Step 1: Insert session continuity section**

In `docs/index-updated.html`, find the closing of the "What This Actually Is" section:

```html
            <p>But there's a ceiling. And if you've used these tools enough, you've hit your head on it. Every conversation seems to start from scratch. You re-explain your projects, your thoughts on something, the background, your preferences. You tell it things you've told it before. You double-check its answers because you know it's filling gaps with confident guesses. It's like working with a brilliant intern. Smart, fast, capable. But every morning they show up having forgotten everything from yesterday. So you manage them. You re-explain context. You verify their work. You get useful output, but it takes effort to get there every time.</p>
            <p>That's where this idea of a personal operating system comes in. What if instead of managing an intern, you were working with a partner who already knew your projects, your history, and your preferences? Who you could trust to check their own work against real context? Who got sharper the more you worked together, not because the AI got smarter, but because the system around it got richer? That's noteOS.</p>
        </div>
    </section>

    <!-- Things You Won't Have to Do Anymore -->
```

Replace `</div>\n    </section>\n\n    <!-- Things You Won't Have to Do Anymore -->` with:

```html
            <h3 class="subsection-title" id="how-session-continuity-actually-works">How session continuity actually works</h3>
            <p>Two commands. <code>/remember</code> is the save. <code>/pickup</code> is the load.</p>
            <p>You're in a session and you've covered a lot of ground. Decisions made, new information surfaced, things still open. You type <code>/remember</code>. AI assesses everything substantive from the conversation, figures out where each piece goes. Daily note, project notes, your cross-session context file, your chat log. You don't have to explain what to save or where. It reads the conversation, reads the vault, and connects the dots. It also nudges you when it notices a natural breakpoint. After a big decision, after processing a meeting, after any substantial block of work. Use it whenever it feels right. Mid-session, end of session, multiple times in a long conversation. Think of it like hitting save.</p>
            <p>There's a practical reason this matters beyond convenience. AI tools have a context window. The longer a conversation goes, the more likely things get missed, repeated, or slightly off. Starting fresh conversations regularly is genuinely better practice. But only if you have a way to carry the important stuff forward. That's what remember does. You get the benefits of a clean slate without the cost of lost context.</p>
            <p>Next session. You type <code>/pickup</code>. AI reads what was saved, traces the links to the relevant notes, and gives you a concise briefing. Where you left off. What's active. What's waiting on someone else. What needs attention. Then it asks where you want to pick up from. You pick one and you're back in it.</p>
            <p>Here's what's actually happening. When you run <code>/remember</code>, AI writes to your vault. Meeting notes and updates go to your daily note. Status changes go to project notes. A context file tracks what's active, what's blocked, and what's next. A chat log records what was discussed and what got saved. Everything gets linked together. When you run <code>/pickup</code>, AI reads that context file, follows the links, and reconstructs where you are. It's not magic. It's just well-organized text files that AI knows how to read and write.</p>
            <p>noteOS is already set up to persist things proactively as you work. Auto-logging routine items, nudging you when something substantive comes up that should be captured. But <code>/remember</code> is you taking control. It's the manual save that makes sure nothing gets missed. The system tries to catch things on its own. Remember guarantees it.</p>
            <p>That's the loop. Save when you've done meaningful work. Load when you're back. The more you use it, the more natural it gets.</p>
        </div>
    </section>

    <!-- Things You Won't Have to Do Anymore -->
```

- [ ] **Step 2: Update the Continuity row in the comparison grid**

Find the Continuity row:

```html
                <div class="changes-row">
                    <div class="changes-before">
                        <div class="changes-label">Continuity</div>
                        <div class="changes-text">Each conversation is an island. There's no way to tell AI "always check that document" or "remember everything from this project." It can't connect things across sessions on its own.</div>
                    </div>
                    <div class="changes-after">
                        <div class="changes-label">&nbsp;</div>
                        <div class="changes-text">Notes link to other notes by design. AI searches your vault before answering and connects new content to what's already there. The denser the web, the better it navigates. You build that density just by using it.</div>
                    </div>
                </div>
```

Replace the "changes-after" text:

```html
                        <div class="changes-text"><code>/remember</code> saves where you are. <code>/pickup</code> gets you back. Your notes link to each other, AI searches across them, and the context compounds over time. New sessions start informed, not blank.</div>
```

- [ ] **Step 3: Verify both edits**

Read the What This Actually Is section through Things You Won't Have to Do Anymore. Confirm session continuity subsection appears between them and Continuity row is updated.

- [ ] **Step 4: Commit**

```bash
git add docs/index-updated.html
git commit -m "Landing page: add session continuity walkthrough, update continuity row"
```

---

### Task 8: Landing Page — Replace Skills Section Session Continuity

**Files:**
- Modify: `docs/index-updated.html` (the skills section session continuity subsection)

- [ ] **Step 1: Replace the session continuity subsection**

In `docs/index-updated.html`, find:

```html
            <h3 class="subsection-title">Session continuity: never lose context again</h3>
            <p>The two most powerful skills in the vault are <code>remember</code> and <code>pickup</code>. They solve the single biggest frustration with AI: losing everything when you close the chat window.</p>
            <p><strong><code>/remember</code></strong> is the save. Type it and AI assesses everything from your conversation. What decisions were made, what new information surfaced, what's still open. It figures out where each piece goes. Daily note, project notes, your cross-session context file, your chat log. You don't explain what to save or where. It reads the conversation, reads the vault, and connects the dots. It also nudges you at natural breakpoints. After a big decision, after processing transcripts, after any substantial block of work.</p>
            <p><strong><code>/pickup</code></strong> is the load. Start a new session, type it, and AI reads what was saved, traces the links, and briefs you. Where you left off. What's active. What's waiting on someone else. Then it asks "Where do you want to pick up from?" with a few options. You pick one and you're back in it. No re-explaining. Just pick up and go.</p>
            <p>These two work together. Remember writes for continuation. Not just "what happened" but "where things stand, what's next, and what to read." Your chat log becomes a running record you can trace back anytime.</p>
```

Replace with:

```html
            <h3 class="subsection-title">Session continuity</h3>
            <p>The remember/pickup workflow is covered in detail above. See <a href="#how-session-continuity-actually-works">How session continuity actually works</a>. The skills section here focuses on the other workflows that ship with the vault.</p>
```

- [ ] **Step 2: Update the "done for the day" line**

Find:

```html
            <p>You're done for the day. Type <code>/remember</code>. Everything gets saved, linked, timestamped. Tomorrow, type <code>/pickup</code>. Caught up in 30 seconds.</p>
```

Replace with:

```html
            <p>You've covered a lot of ground in this session. Type <code>/remember</code>. Everything gets saved, linked, timestamped. Tomorrow, type <code>/pickup</code>. Caught up in 30 seconds.</p>
```

- [ ] **Step 3: Verify the edit**

Read the skills section in the HTML. Confirm session continuity is now a brief reference and the practice example line is updated.

- [ ] **Step 4: Commit**

```bash
git add docs/index-updated.html
git commit -m "Landing page: replace skills session continuity with reference"
```

---

### Task 9: Final Review and Push

- [ ] **Step 1: Read full README.md top-to-bottom**

Verify the narrative flow: Imagine a World (with new beat #2) → What This Actually Is (intern-to-partner) → How session continuity works → Things You Won't Have to Do Anymore (updated island bullet) → How It Works → Going Deeper (skills with brief session continuity reference).

- [ ] **Step 2: Read landing page sections**

Open `docs/index-updated.html` and verify the same flow in HTML.

- [ ] **Step 3: Check for any remaining references to the old session continuity location**

Search both files for "never lose context" to confirm the old heading text is fully removed.

```bash
grep -n "never lose context" README.md docs/index-updated.html
```

Expected: no matches.

- [ ] **Step 4: Push**

```bash
git push
```
