# Functionality Brief Template

**Purpose**: Fill in one copy of this template per section that contains custom functionality, interactivity, or non-obvious behavior. This document becomes the input to the AI prompt generator (ChatGPT) and the implementation prompt. A completed brief eliminates verbal description and prevents information loss across the workflow.

**When to use**: Any time a section has more than a static layout — accordions, sliders, animations, modals, form submissions, scroll effects, state changes, or CMS-driven content.

---

## Section Brief

### 1. Section Identity

| Field | Value |
|---|---|
| **Project Name** | `e.g., Stemage` |
| **Page** | `e.g., Home / About / Services` |
| **Section Name** | `e.g., Features Slider` |
| **Section Order on Page** | `e.g., 3rd section from top` |
| **Figma Frame Link** | `Paste the Figma MCP link to this specific frame` |

---

### 2. Layout Description

> Describe what this section looks like at a glance. How many columns? What content types (text, image, video, icons)? What is the desktop vs mobile layout difference?

```
[Your description here]

Example:
"Two-column layout on desktop. Left column: headline, sub-text, and CTA button. 
Right column: a tabbed card that switches between 3 product features. 
On mobile: stacks vertically, tabs collapse into an accordion."
```

---

### 3. Interaction Trigger

> What user action starts the interaction?

- [ ] Page load (auto-triggered)
- [ ] Scroll into view
- [ ] Click / Tap
- [ ] Hover (desktop)
- [ ] Keyboard input
- [ ] Form submission
- [ ] Other: _______________

---

### 4. Step-by-Step Behavior Flow

> Describe the exact sequence of events from trigger to completion. Number each step. Be as specific as possible.

```
[Your flow here]

Example:
1. User clicks a tab button (e.g., "Analytics")
2. The active tab button gains the --active modifier class and its underline indicator animates in
3. The previously active content panel fades out (opacity 0, 200ms)
4. The new content panel fades in (opacity 1, 200ms, 50ms delay after fade-out starts)
5. On mobile, this behaves as an accordion: clicking the tab heading expands the content below it
```

---

### 5. Reference Website

| Field | Value |
|---|---|
| **Reference URL** | `Paste the full URL` |
| **Specific element to reference** | `e.g., "The tabbed feature section about halfway down the page"` |
| **What to replicate** | `e.g., "The transition timing and the underline indicator animation"` |
| **What NOT to replicate** | `e.g., "Ignore their color scheme and font — use our design tokens instead"` |

---

### 6. Edge Cases & States

> What should happen in non-standard conditions? List every state you can think of.

| State | Expected Behavior |
|---|---|
| Mobile (< 768px) | `e.g., Tabs become accordion` |
| Empty / no content | `e.g., Section is hidden` |
| Loading state | `e.g., Show skeleton loader` |
| Error state | `e.g., Show error message with retry button` |
| `prefers-reduced-motion` | `e.g., Disable fade transitions, show content instantly` |
| Keyboard navigation | `e.g., Arrow keys switch between tabs` |

---

### 7. Asset List

> List every image, icon, or video asset required for this section. Use the kebab-case naming format (Law #8).

| Asset Name | Format | Source |
|---|---|---|
| `stemage-features-tab-analytics.svg` | SVG | Figma export |
| `stemage-features-tab-reporting.svg` | SVG | Figma export |
| `stemage-features-screenshot.webp` | WebP | Figma export → convert |

---

### 8. Implementation Notes for the AI

> Any additional context the AI should know before building this section.

```
[Optional notes]

Example:
- The tab component must be keyboard accessible (Tab key to focus, Enter/Space to activate)
- The accordion on mobile should only allow one panel open at a time
- This component will be replicated on the Services page with different content — make it data-driven (content from HTML attributes, not hardcoded)
```

---

## Completion Checklist (for Developer)

Before passing this brief to the AI:

- [ ] Figma frame link is included and accessible
- [ ] Behavior flow is numbered step-by-step
- [ ] Reference URL is included (if applicable)
- [ ] All assets are named in kebab-case WebP format
- [ ] Edge cases are listed (at minimum: mobile + reduced-motion)
- [ ] `variables.css` for this project already exists (Law #3)
