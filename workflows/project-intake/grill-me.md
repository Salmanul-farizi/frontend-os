# Project Grill-Me — AI Intake Questionnaire

## Purpose

This document defines the structured intake interview that any AI assistant must run at the start of a new project or a new implementation task inside Frontend OS. 

**Do not skip this step.** Missing requirements discovered mid-implementation are far more expensive than two minutes of upfront questions.

The AI must ask these questions one at a time, in order, and wait for the developer's answer before proceeding. Once all answers are collected, the AI must summarize them and confirm before starting any design analysis or implementation work.

---

## When to Run This

Run the full Grill-Me protocol when:
- Starting a new project for the first time
- Starting a new page within an existing project
- Starting a section that has functionality beyond a static layout

Run only Section B (Task-Specific) when:
- You are already mid-project and just starting a new section

---

## Section A — Project-Level Questions

*(Run once per project)*

### Q1 — Delivery Path
> "What is the delivery target for this project?"

**Options:**
- A) HTML / CSS / JS files → WordPress handoff
- B) Figma → Webflow (Client-First)
- C) HTML / CSS / JS → React / Next.js integration
- D) Other (describe)

**Why it matters:** Determines CSS conventions (BEM vs Client-First), token format (variables.css vs Webflow Variables), and component architecture.

---

### Q2 — AI Tool
> "Which AI tool will be doing the implementation work?"

**Options:** Antigravity / Cursor / Claude Code / Codex CLI / OpenCode / VSCode Copilot

**Why it matters:** Ensures the correct `ai-setup/` configuration file is active before implementation starts.

---

### Q3 — Figma File Status
> "Has the Figma file been checked for completeness? Specifically:"
> - Is there a mobile frame for every page?
> - Are all color and text styles named in the Figma Styles panel?
> - Are all assets ready to export?

**Expected answer:** Yes to all / No (list what's missing)

**Why it matters:** Triggers Law #3 (variables.css) and Law #8 (asset naming) compliance before any code is written.

---

### Q4 — variables.css Status
> "Does a `variables.css` file already exist for this project with all design tokens defined?"

**Options:**
- Yes (provide the file path)
- No → The AI must complete Figma token extraction first before proceeding to implementation

**Why it matters:** This is Law #3. No implementation may begin without it.

---

### Q5 — Timeline & Deadline
> "What is the deadline for this project, and how many working days do we have?"

**Why it matters:** Determines whether the AI should flag high-complexity sections for developer attention, and whether estimation needs to be conservative or aggressive.

---

### Q6 — CMS Requirements
> "Is any content on this project dynamic (driven by a CMS) or is everything static?"

**Options:**
- All static — the HTML content is hardcoded
- Partially dynamic — some sections pull from CMS (specify which ones)
- Fully CMS-driven — all repeating content comes from WordPress ACF / Webflow CMS

**Why it matters:** Determines component architecture. CMS-driven components must use data attributes or template slots, not hardcoded content.

---

### Q7 — Webflow-Specific (Only if Path B)
> "For the Webflow project: which sections will need CMS Collections, and which should be Symbols?"

**Why it matters:** CMS collections and Symbols must be planned in the Navigator hierarchy before building. Retrofitting them after the fact is very expensive.

---

## Section B — Task-Specific Questions

*(Run at the start of every functional section)*

### Q8 — Section Functionality
> "Does this section have any interactivity, animation, or non-obvious behavior beyond a static layout?"

**Options:**
- No — it's a purely static layout (skip to Q12)
- Yes — describe it or share a reference (continue to Q9)

---

### Q9 — Trigger Type
> "What triggers the interaction in this section?"

**Options:** Page load / Scroll into view / Click or Tap / Hover / Keyboard / Form submission / Other

---

### Q10 — Behavior Flow
> "Please describe the step-by-step behavior — what happens from the moment the trigger fires to the moment the interaction is complete?"

*Developer should provide numbered steps. If they have a reference site, collect it in Q11.*

---

### Q11 — Reference Link
> "Do you have a reference website or video that shows how this interaction should look and feel?"

**If yes:** 
- Paste the URL
- Specify exactly which element to look at on that page
- Specify what to replicate and what NOT to replicate (e.g., "same timing, but different color")

**If no:** The AI will implement based on the behavior description from Q10.

---

### Q12 — Missing Figma Assets or Breakpoints
> "Does the Figma frame for this section have:"
> - A mobile version?
> - All images and icons ready to export?
> - All states defined (hover, active, error, empty)?

**Expected answer:** Yes to all / No (list what's missing)

**Why it matters:** Missing states discovered after implementation are the #1 cause of refinement time. Flagging them now is free.

---

## Summary Confirmation

After collecting all answers, the AI must output a **Project Brief Summary** in this format before starting any work:

```markdown
## Project Brief — [Project Name] — [Page / Section]

**Delivery Path**: HTML/WordPress  
**AI Tool**: Antigravity  
**variables.css**: ✅ Exists at `/assets/css/variables.css`  
**Deadline**: 3 working days  
**CMS**: Static content only  

### Sections to Build
| Section | Functionality | Reference |
|---|---|---|
| Hero | Static layout | — |
| Feature Tabs | Tab switch with fade transition | [reference.com/page] |
| Testimonial Slider | Auto-play + manual dot navigation | [reference.com/page] |
| Contact Form | Client-side validation + success state | — |

### Flags & Blockers
- ⚠️ No mobile frame provided for Feature Tabs section — requesting from designer before implementation
- ⚠️ `stemage-hero-image.webp` not yet exported — needed before Hero section begins

**Confirm this brief is accurate before I start.**
```

The developer must confirm the brief before the AI proceeds.

---

## Related Documents

- [Functionality Brief Template](../../templates/functionality-brief.md) — For pre-filling section requirements before running the Grill-Me
- [Project Lifecycle](../../docs/project-lifecycle.md) — Where Grill-Me fits in the full workflow
- [Design Analysis Workflow](../design-analysis/README.md) — The next step after Grill-Me
