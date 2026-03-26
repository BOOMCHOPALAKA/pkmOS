# Memory

> **This file is ready to use out of the box.** CLAUDE.md tells you the rules. This file teaches you how to apply them well. It holds judgment calls, procedural detail, and patterns learned from real use. As you use the system, add entries specific to the user's life, preferences, and the patterns you notice. The user can also add things manually anytime.

> **The split:** CLAUDE.md = what to do (directives, structure, rules). MEMORY.md = how to do it well (procedures, judgment calls, common mistakes to avoid). If something is a rule, it belongs in CLAUDE.md. If it's a learned pattern about how to follow that rule effectively, it belongs here.

---

## Vault Philosophy
- Flat vault. Notes in root, folders only for Calendar, Map, Templates, Downloads.
- Links do the organizing. Not folders. When in doubt, link rather than file.
- CLAUDE.md is the source of truth for conventions. This file extends, never contradicts.

## Meeting Transcript Processing

This is the most common complex task. Follow these steps in order:

**Step 1: Speaker identification.** Before writing anything, present the speaker mapping for review. Use vault context (participant lists from Basecamps, roles mentioned in prior meetings, speech patterns, topics each speaker discusses) to identify speakers. Format as:
```
Speaker 1 = Name — [reasoning]
Speaker 2 = Name — [reasoning]
```
Get sign-off before proceeding. Do not skip this step even if speaker names seem obvious.

**Step 2: Vault search.** Search the vault for existing notes, Basecamps, and tickets related to the meeting topics. You'll need these for linking in Step 3.

**Step 3: Topic extraction and summary.** Break the transcript into discrete topics. Each becomes its own subsection (#### heading) under the meeting header (### heading) in the daily note Body. For each topic:
- What was discussed. Key points, not a transcript rehash.
- What was decided, if anything.
- What's still open or waiting.
- Links to relevant existing notes and Basecamps from Step 2.

**Step 4: TODO extraction.** Apply CLAUDE.md's TODO filtering rules. Only items the user owns, is bottleneck for, or needs to chase. Write as checkbox items with anchor links back to the meeting section.

**Step 5: Vault updates.** If the meeting surfaced real new information about an existing topic, update that knowledge note or Basecamp. The test: does this change understanding of the topic, or is it just a status mention? Only update for the former.

**Step 6: Offer daily note update.** After processing, confirm what was added to the daily note and ask if anything else should be captured.

**Common transcript problems:**
- Speaker labels are generic (Speaker 1, Speaker 2). Never trust them as names. Always identify.
- Transcription tools hallucinate during silence ("Thank you for watching!", repeated word loops). Ignore these.
- One person can get split across multiple speaker labels mid-transcript. Watch for this.
- Quick utterances ("yeah," "right," "mm-hmm") are often misattributed. Don't use these alone to identify speakers.
- Names get mangled. Always check the People and Spelling Corrections sections in CLAUDE.md.
- "Microphone" labels in some transcription tools are duplicates of the previous speaker line, not a separate person.

## Session Handoff

After deep working sessions (transcript processing, note creation, problem-solving, research), proactively offer to update:
1. The daily note with what was accomplished
2. Relevant knowledge notes with conclusions or decisions
3. Any Basecamps that should reflect new information

The nudge should be specific: "Want me to update the project Basecamp with what we just figured out?" not "Want me to save anything?"

If the user says "update the handoff" or similar shorthand, they mean: update whatever cross-session context file or note captures the current state of active work.

## Linking Judgment Calls

CLAUDE.md says to link every note. Here's how to judge what's worth linking:

- **First mention of a topic that has an existing note = always link.** No judgment needed.
- **Updating an existing note with new info from a meeting?** Only if the new info changes understanding. "We discussed the project" is a status mention, skip. "We decided to change the architecture" is real new info, update.
- **Cross-linking between notes on the same topic from different angles?** Yes. If a meeting summary discusses something that a standalone knowledge note also covers, link them both ways.
- **Forcing a link because words match?** No. "Budget" appearing in two unrelated notes doesn't mean they should be linked. Link for understanding, not keyword matching.

## Persistence Judgment Calls

CLAUDE.md defines three tiers. Here's how to handle the gray areas:

- **User shares something offhand ("oh yeah, we decided to go with Option B").** This sounds casual but it's a decision. Tier 2: ask if they want it captured.
- **User vents or thinks out loud ("I'm not sure this approach is going to work").** Not a decision yet. Don't capture unless they signal it's worth saving.
- **User shares factual data (a workout, a purchase, something that happened today).** Tier 1: log it in the daily note without asking.
- **User shares something about a person ("Sarah got promoted," "Marcus is leaving the company").** Tier 2: ask. This might warrant updating a People entry or a related note.
- **Long conversation with multiple substantive topics, user seems to be wrapping up.** Tier 3: sweep. "We covered X, Y, and Z. X is in the daily note. Want me to capture Y as a note?"

## Note Quality Checks

Before saving any note, quick self-check:
- Does it have a `## Compass` section? (Every note and Basecamp needs one.)
- Does it link to at least one other note or Basecamp? (No orphans.)
- Is it in the right location? (Root for notes, Map/ for Basecamps, Calendar/ for daily notes.)
- If it's a Basecamp, does it have a `## Trails` section?
- Are `[[wiki links]]` used, not markdown links? Are internal anchors using `[[#Heading]]` syntax, not `[text](#slug)`?

<!-- AI will add memories below this line as patterns emerge from your use. -->
<!-- You can also add your own entries manually at any time. -->
