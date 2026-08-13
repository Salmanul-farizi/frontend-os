# Project Lifecycle — Frontend OS

## Overview

This document maps the complete end-to-end lifecycle of a frontend project using Frontend OS. It covers two primary delivery paths:

- **Path A:** Figma → HTML/CSS/JS → WordPress Handoff (Stemage workflow)
- **Path B:** Figma → Webflow → Client Handoff (Webflow project workflow)

Every AI assistant working within this system must understand which path the current project is on before performing any task.

---

## Path A: Figma → HTML/CSS/JS → WordPress Handoff

This is the primary workflow for projects like Stemage where the frontend engineer delivers self-contained HTML/CSS/JS components that the WordPress team integrates into the CMS.

```
Figma Design Arrives
        │
        ▼
[STAGE 1] Estimation
        │   Tool: AI (Antigravity/Cursor) + Estimation Standard
        │   Output: Hours estimate broken down by section complexity
        │
        ▼
[STAGE 2] Design Analysis
        │   Tool: AI reads Figma via MCP + workflows/design-analysis/
        │   Output: Design Analysis Report (page inventory, component list, gaps)
        │
        ▼
[STAGE 3] Figma Token Extraction
        │   Tool: AI reads Figma Styles panel + knowledge/figma/01-figma-standards.md
        │   Output: variables.css (all design tokens defined before any code is written)
        │   ⛔ LAW #3: No implementation until variables.css exists
        │
        ▼
[STAGE 4] Asset Preparation
        │   Tool: Developer exports from Figma, renames to kebab-case, converts to WebP
        │   Output: /assets/ folder with all named, optimized images
        │   ⛔ LAW #8: All assets named before implementation begins
        │
        ▼
[STAGE 5] Experience Analysis
        │   Tool: AI reads Design Analysis Report + Figma
        │   Output: Interaction Specification (trigger → state → behavior per component)
        │
        ▼
[STAGE 6] Engineering Planning
        │   Tool: AI reads all prior documents
        │   Output: Engineering Plan (component list, implementation order, complexity notes)
        │
        ▼
[STAGE 7] Prompt Generation (ChatGPT Step)
        │   Tool: ChatGPT + ai-setup/chatgpt-prompt-generator.md
        │   Input: Section screenshots + Figma MCP link + functionality notes
        │   Output: Optimized prompt for Antigravity/Cursor
        │
        ▼
[STAGE 8] Implementation
        │   Sequence: HTML Engineer → CSS Engineer → JS Engineer → Motion Engineer
        │   Tool: Antigravity / Cursor (initialized with ai-setup/ context)
        │   Each role reads: knowledge/ standards + templates/ + patterns/
        │   Output: Self-contained component files
        │
        ▼
[STAGE 9] Self-Review by AI
        │   AI runs: checklists/accessibility-checklist.md
        │             checklists/responsive-checklist.md
        │             checklists/performance-checklist.md
        │   Output: Checklist report with PASS/FAIL per item
        │
        ▼
[STAGE 10] Developer Refinement
        │   Developer reviews AI output against Figma
        │   Fixes: Pixel-level mismatches, edge cases, tweaks
        │   This stage should take < 20% of total implementation time
        │
        ▼
[STAGE 11] WordPress Handoff
        │   ⛔ LAW #9: Each component is self-contained (1 HTML + 1 CSS + 1 JS)
        │   WordPress team integrates without modifying component code
        │   Output: Integrated, live WordPress page
        │
        ▼
DONE
```

---

## Path B: Figma → Webflow

This workflow applies when the project is delivered directly in Webflow. The engineering standards remain identical, but the output is Webflow classes/symbols instead of static HTML files.

```
Figma Design Arrives
        │
        ▼
[STAGE 1] Estimation
        │   Same as Path A — estimate by section complexity
        │
        ▼
[STAGE 2] Design Analysis
        │   Same as Path A — full component and interaction inventory
        │
        ▼
[STAGE 3] Figma Token Extraction
        │   Output: Token mapping document (Figma style → Webflow variable name)
        │   Variables are created in Webflow Variables panel, not variables.css
        │
        ▼
[STAGE 4] Webflow Structure Planning
        │   Tool: AI reads knowledge/webflow/01-webflow-standards.md
        │   Output: Navigator hierarchy plan, Symbol list, CMS collection map
        │
        ▼
[STAGE 5] Webflow Implementation
        │   Role: Webflow Engineer (roles/webflow-engineer/)
        │   Convention: Client-First naming throughout
        │   Sequence: Structure (Navigator) → Styling → Interactions → CMS bindings
        │
        ▼
[STAGE 6] Responsive QA
        │   Check all 4 Webflow breakpoints: Mobile S, Mobile L, Tablet, Desktop
        │   checklists/responsive-checklist.md applies
        │
        ▼
[STAGE 7] Client Handoff
        │   Publish to Webflow staging, verify with client
        │   Transfer project ownership if required
        │
        ▼
DONE
```

---

## Key Differences Between Path A and Path B

| Concern | Path A (WordPress) | Path B (Webflow) |
|---|---|---|
| Token output | `variables.css` file | Webflow Variables panel |
| CSS convention | BEM with underscores | Client-First naming |
| Assets | `/assets/` folder, WebP | Webflow Asset Manager |
| Interactivity | Vanilla JavaScript | Webflow Interactions + custom code |
| Handoff | Self-contained HTML/CSS/JS files | Webflow project transfer |
| CMS | WordPress ACF fields | Webflow CMS Collections |

---

## Non-Negotiable Lifecycle Rules

1. **The Estimation always comes first.** Never start implementation without an approved hour estimate.
2. **variables.css (or Webflow Variables) always precedes implementation.** This is Law #3.
3. **Assets are named and prepared before the HTML is written.** This is Law #8.
4. **The AI self-reviews with checklists before handing off.** The developer should not be finding accessibility or responsiveness issues during refinement.
5. **The WordPress team never modifies component code.** If integration requires changes, the Frontend Engineer updates the component. This is Law #9.
