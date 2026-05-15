# Walkthrough Draft . Panels 4 . 8

Replacement copy for the middle section of the walkthrough. Same time-spine as today, restructured around three capture patterns:

- **Auto** . AI captures while you talk
- **Asks** . AI asks before adding to a note or Basecamp
- **On request** . you tell it to remember or update

Each panel below shows: time label, headline, body copy, chat bubbles, and any annotation. Where a slash command exists, it's mentioned as a shortcut, not the headline.

---

## Panel 4 . Tuesday, behind the scenes (auto-capture)

**Time label:** Tuesday Afternoon

**Headline:** You had a conversation. Notes got connected.

**Body:** While you were talking, the AI linked what came up to the right notes. You didn't ask it to. It just kept track. You can see what changed in the sidebar.

**(visual: same Obsidian sidebar + content view as current panel 4, but with one small addition . the chat bubble lists notes that were updated, and the headline frames it as "what changed" rather than "what your AI did")**

**Chat bubble (small, on the left side of the split):**

> Done. The kitchen quote comparison is saved. Three notes picked up the new info:
>
> . Contractor Quotes
> . Thursday Call
> . Today's daily note

**Annotation under the visual:**
You didn't tell it to file anything. The system noticed what you were talking about and updated the related notes. If you ever want to see what changed, the daily note is the running log.

---

## Panel 5 . Wednesday morning (natural language + shortcut intro)

**Time label:** Wednesday Morning

**Headline:** A clear view of the day, before you've had coffee.

**Body:** You open Claude and ask what's on your plate. It reads across your notes, your calendar, your inbox, and pulls together one view. Work and life, no switching tabs.

**Chat bubble . user:**

> what's on my plate today?

**Chat bubble . AI:** (same morning brief content as today, but trimmed to ~6 items per section instead of 11)

**Annotation under the visual:**
You can type it out, or use the `/morning-brief` shortcut. noteOS has a handful of these for things you'll do a lot. We'll show a couple more as we go.

---

## Panel 6 . Thursday evening (ask-before-capture)

**Time label:** Thursday Evening

**Headline:** The AI handles the busywork, but checks before filing.

**Body:** You drop in the transcript from your meeting with Dave. The AI processes it. Then, instead of silently spreading the information across your notes, it asks where things should go.

**Chat bubble . user:**

> Here's the transcript from today's call with Dave. Can you process it?

**Chat bubble . AI:**

> Processed: Kitchen Remodel Call with Dave (42 min)
>
> Speakers: You, Dave Morrison, Lisa
>
> Key Decisions
> . Going with the revised quote ($34,200)
> . Demolition starts April 28
> . Switching cabinet suppliers to avoid the backorder
>
> Action Items
> . You: Sign contract and send deposit by Monday
> . You: Pick cabinets from Dave's catalog
> . Dave: Send updated timeline
> . Lisa: Confirm countertop color
>
> Before I file this, a few things to confirm:
> . Add the action items to your Kitchen Basecamp?
> . Create a new note for Cabinet Selection? (you don't have one yet)
> . Carry the open items into tomorrow's daily note?

**Chat bubble . user:**

> Yes to all three.

**Chat bubble . AI:**

> Done. Three notes updated, one created.

**Annotation under the visual:**
You stay in charge of where things land. The AI suggests, you approve. If you want it to just do it without asking, you can tell it that too. It's your system.

---

## Panel 7 . Friday evening (NEW . explicit capture)

**Time label:** Friday Evening

**Headline:** Closing the laptop. Telling it where to start Monday.

**Body:** You've been working through the kitchen decisions all week. You don't want to lose the thread over the weekend. So before you sign off, you tell it to remember where you are.

**Chat bubble . user:**

> Save this. I'm mid-decision on cabinets and I want to pick this up Monday morning. Note what I'm leaning toward and what's still open.

**Chat bubble . AI:**

> Saved. Here's what I've captured for Monday:
>
> Where you are
> . Leaning toward the Shaker style in walnut. You liked the look but want to see it in person before committing.
> . Still open: whether the soft-close hinges are worth the upcharge.
>
> Still on your plate
> . Sign contract + send deposit (Dave needs it by Monday EOD)
> . Confirm countertop color with Lisa
>
> Next time you say "where were we" or use `/pickup`, I'll start here.

**Annotation under the visual:**
Two patterns showing up here. You can talk to it normally ("save this, I want to pick it up Monday"), or use the `/remember` shortcut. Both work. The AI writes it into a context note so anything you start with on Monday picks it up.

---

## Panel 8 . Monday morning (callback / restore)

**Time label:** Monday Morning

**Headline:** Picking up exactly where you left off.

**Body:** You closed the laptop Friday at 6 PM. Now it's Monday at 8 AM. The weekend's gone, your inbox has changed, and you have a standup in two hours. One question, and you're back in it.

**Chat bubble . user:**

> where were we?

**Chat bubble . AI:**

> Picking up from Friday evening.
>
> You were mid-decision on cabinets. Leaning Shaker in walnut, wanted to see it in person, weren't sure about the soft-close hinges.
>
> Still open from Friday
> . Sign contract + deposit (Dave needs it by today, EOD)
> . Confirm countertop color with Lisa
> . Cabinet decision
>
> What's changed since Friday
> . Dave emailed cabinet samples Saturday. They're in your inbox.
> . Lisa texted Sunday. She's good with the green-gray. Still need to confirm with Dave.
> . Your Monday standup is in 90 minutes.
>
> Want to start with the cabinet samples so you can knock that out before standup?

**Annotation under the visual:**
Nothing magic here. You told it to save your context Friday. It wrote that into a note. Monday morning, it reads that note plus everything else that came in over the weekend, and tells you where you are. The callback works because the capture happened. Save and pick up are two ends of the same loop.

---

## Notes on what changed from the original

**Pattern coverage (now explicit):**
- Auto-capture: Panel 4
- Natural language with shortcut as footnote: Panel 5
- Ask-before-capture: Panel 6 (this was the big gap)
- Explicit-capture: Panel 7 (new)
- Callback / restore: Panel 8 (rewritten to reference Friday's save directly)

**Voice changes:**
- "Your AI" almost entirely gone. Replaced with "the AI," "it," or no pronoun at all.
- Cut "really good," "watch what happens," "It just works."
- Slash commands moved to annotations, not chat bubble headlines.
- Hedged claims throughout. "Leaning toward" not "decided on." "Still open" not "blocked."

**Persona drift:**
- The "you" in these panels is someone with a kitchen remodel, a partner named Lisa, a contractor, a job with a standup. Less consultant-PM, more normal person with a life. The work side is still there (standup, project) but not dominant.

**What stays the same:**
- The time-progression spine (Tuesday → Wednesday → Thursday → Friday → Monday)
- The proactive-capture green-box pattern (now it's the dominant pattern, not the exception)
- The visual mockups (chat bubbles, sidebar, etc.) . only the copy changes
