# Weekly Status Report

## Purpose

Create clear, scannable weekly status reports for projects or clients. These are meant for external readers (stakeholders, managers, clients) who don't have access to your vault.

---

## Key Rules

### Audience
- External readers who don't have access to the Obsidian vault
- Strip all wiki links (`[[]]`), hashtags, and markdown tables before sharing
- Never reference vault-internal work (note creation, knowledge base updates, etc.)

### Tone
- Informative and succinct. No filler.
- Plain language, no buzzwords or corporate phrasing ("mission-critical", "synergy", etc.)
- Don't sound alarmist or overly critical. State facts, note real risks, and move on.
- Let the numbers and details speak for themselves.

---

## Template

```markdown
# [Project/Client] Weekly Status Report - Week of [Month Day, Year]

---

## COMPLETED

### [Item Name] — [Status/Date]
[1-2 sentences. What was the problem, what was done, where it stands now.]

### [Item Name] — [Status/Date]
[1-2 sentences.]

### Other Completed Items
- [Small item] ([who])
- [Small item] ([who])

---

## IN PROGRESS

### [Critical/Blocking Item Name]
[Short description. What's blocking, what's the next step. Lead with critical items.]

### [Another Major Item]
[Short description.]

### Other In Progress
- [Item]: [one-line status]
- [Item]: [one-line status]

---

## DECISIONS

- [Decision made, and by whom if relevant]
- [Decision made]

---

## UPCOMING

- [Date]: [What's happening]
- [Date]: [What's happening]

---

## NOTES

- [Standout callout: exceptional work, biggest risk, or systemic issue worth flagging]
- [Only include notes that add perspective beyond what's already above]
```

---

## Section Guidelines

### COMPLETED
- Bold headers per item with deploy/completion date
- 1-2 sentences max per item
- Consolidate related small items (e.g. "6 of 11 items passed QA" + one-line list)
- Group trivial fixes under "Other Completed Items" as compact bullets

### IN PROGRESS
- Lead with critical/blocking items as their own bold sections
- State what's blocking and what the next step is
- Group smaller items under "Other In Progress" as compact bullets

### DECISIONS
- Bullet list
- Include who made the call when relevant
- Only decisions that affect schedule, scope, or approach

### UPCOMING
- Bullet list with dates or timeframes
- Combine related items on one line where possible

### NOTES
- Only standout callouts: exceptional work, biggest risks, systemic issues
- 2-3 bullets max. If nothing warrants a note, skip the section entirely.

<!--
NOTES FOR AI (not for the user to fill in):

When asked to create a weekly status report:
1. Read the relevant daily notes for the week, the project Basecamp, and any
   recent meeting summaries to gather what happened.
2. Separate items by client/project if the user manages multiple. Never mix
   items from different clients in one report.
3. Use the template structure above. Don't add sections that aren't needed.
4. Strip all vault formatting (wiki links, hashtags, tables) from the final output.
5. If the user needs to post it somewhere external, offer a clean copy in a
   code block they can copy/paste.
-->
