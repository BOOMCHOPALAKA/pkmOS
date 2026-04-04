# Design: Elevate Remember/Pickup in README and Landing Page

## Goal

Make the remember/pickup session continuity workflow a central part of the noteOS pitch, not a feature buried in the skills section. Thread the intern-to-partner narrative throughout. Apply changes to both README.md and docs/index-updated.html.

## Changes

### Change 1: "Imagine a World" — New Beat #2

Insert after "It remembers what you don't" and before "Things start connecting themselves."

```markdown
**You pick up right where you left off.** You close your laptop Friday afternoon in the middle of a complex project. Or halfway through planning a trip. Or after a long conversation about a decision you're weighing. Monday morning you open a new chat, pick up where you left off, and you're back in it. What you were working on, where you stopped, what's still open. No re-explaining. No scrolling through old chats trying to reconstruct what happened.
```

Tone: emotional, aspirational. No command names. Includes both work and personal examples.

### Change 2: "What This Actually Is" — Intern-to-Partner Contrast

Replace the current opening paragraphs (lines 42-62 of README) with an expanded version that adds the intern metaphor.

Keep the first paragraph as-is:
> You're probably already using AI. ChatGPT, Claude, Gemini, whatever. Maybe you've had it help draft an email, summarize a meeting, do some research. Maybe you've even set up custom instructions or used the memory features.

Replace the second paragraph with:
```markdown
But there's a ceiling. And if you've used these tools enough, you've hit your head on it. Every conversation seems to start from scratch. You re-explain your projects, your thoughts on something, the background, your preferences. You tell it things you've told it before. You double-check its answers because you know it's filling gaps with confident guesses. It's like working with a brilliant intern. Smart, fast, capable. But every morning they show up having forgotten everything from yesterday. So you manage them. You re-explain context. You verify their work. You get useful output, but it takes effort to get there every time.

That's where this idea of a personal operating system comes in. What if instead of managing an intern, you were working with a partner who already knew your projects, your history, and your preferences? Who you could trust to check their own work against real context? Who got sharper the more you worked together, not because the AI got smarter, but because the system around it got richer? That's noteOS.
```

### Change 3: New Subsection — "How Session Continuity Actually Works"

Insert as a new subsection within "What This Actually Is," right after the intern-to-partner paragraph and before "Things You Won't Have to Do Anymore."

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

### Change 4: Update "Things You Won't Have to Do Anymore" — Island Bullet

Replace the current "Treat every conversation as an island" bullet:

```markdown
**Treat every conversation as an island.** `/remember` saves where you are. `/pickup` gets you back. Your notes link to each other, AI searches across them, and the context compounds over time. New sessions start informed, not blank.
```

### Change 5: "Going Deeper" Skills Section — Replace Session Continuity Walkthrough

Replace the "Session continuity: never lose context again" subsection (currently ~4 paragraphs with the full remember/pickup explanation) with a brief reference:

```markdown
#### Session continuity

The remember/pickup workflow is covered in detail above. See [How session continuity actually works](#how-session-continuity-actually-works). The skills section here focuses on the other workflows that ship with the vault.
```

Keep everything else in the skills section as-is: the "What skills look like in practice" subsection, the skills table (remember/pickup already at top), the "Building your own" subsection.

## Files to Modify

1. `README.md` — all 5 changes
2. `docs/index-updated.html` — same 5 changes, adapted to HTML structure

## Out of Scope

- No changes to skill files themselves
- No changes to CLAUDE.md or MEMORY.md
- No changes to the vault structure section or getting started flow
- No changes to the skills table (already has remember/pickup at top)
