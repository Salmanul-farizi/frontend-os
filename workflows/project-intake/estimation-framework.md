# Estimation Framework

## How to Use This Framework

When you receive a Figma design, analyze each section individually. Assign it a base layout tier, add any interaction add-ons, and sum the total. Apply the buffer multipliers at the end. The result is your estimated hours for the day (based on an 8-hour workday).

---

## Tier 1: Base Layout Complexity

Every section starts with a base layout hour estimate.

| Complexity | Definition | HTML/WordPress | Webflow |
|---|---|---|---|
| **Simple** | Static text + image, no interactions, single column | 1–2 hrs | 1–1.5 hrs |
| **Medium** | Multi-column grid, cards, minor hover effects | 2–4 hrs | 1.5–3 hrs |
| **Complex** | Custom layouts, overlapping elements, clip-paths, asymmetric grids | 4–6 hrs | 3–5 hrs |
| **Advanced** | Full-page scroll sequences, custom component architecture | 6–8+ hrs | 5–7 hrs |

### Common Section Examples

| Section Type | Complexity | Est. Hours (HTML) |
|---|---|---|
| Plain text + headline | Simple | 1 hr |
| Hero (text + image, 2-col) | Medium | 2–3 hrs |
| Hero (background video, parallax) | Advanced | 5–6 hrs |
| Feature grid (3-col cards) | Medium | 2–3 hrs |
| Testimonial / logo bar | Simple–Medium | 1–2 hrs |
| Pricing table (3 tiers) | Medium–Complex | 3–4 hrs |
| Contact form | Medium | 2–3 hrs |
| Navigation (desktop + mobile) | Complex | 3–4 hrs |
| Footer | Medium | 2 hrs |

---

## Tier 2: Interaction Add-ons

Add these hours on top of the base layout estimate when a section includes interactivity.

| Interaction | HTML/WordPress | Webflow |
|---|---|---|
| Hover state only | +0.5 hrs | +0.25 hrs |
| Accordion (open/close) | +1 hr | +0.5 hrs |
| Tabs | +1 hr | +0.5 hrs |
| Modal / Lightbox | +1.5 hrs | +0.75 hrs |
| Slider / Carousel (Swiper) | +2 hrs | +1 hr |
| Infinite marquee | +1.5 hrs | +0.75 hrs |
| Sticky header with scroll behavior | +1.5 hrs | +0.5 hrs |
| Filter / Sort (JS) | +2.5 hrs | +1.5 hrs |
| Form validation (client-side) | +1.5 hrs | +0.5 hrs |
| GSAP entrance animation | +1 hr | N/A |
| GSAP ScrollTrigger timeline | +3 hrs | N/A |
| Lenis smooth scroll setup | +1 hr | N/A |
| Scroll-triggered counter | +1 hr | +0.5 hrs |
| Image sequence / scrub | +4–8 hrs | +2–4 hrs |

---

## Tier 3: CMS & Integration

Add these when the component requires CMS connectivity.

| Task | HTML (ACF/WordPress) | Webflow CMS |
|---|---|---|
| Simple CMS field bindings | +1 hr | +0.5 hrs |
| Complex CMS repeater / collection | +2 hrs | +1 hr |
| Dynamic filtering with CMS | +3 hrs | +1.5 hrs |

---

## Tier 4: Buffers & Multipliers

Always apply these multipliers to your raw total before presenting the estimate.

| Factor | Multiplier | When to Apply |
|---|---|---|
| Responsive QA | ×1.20 | Always — add 20% for mobile/tablet testing |
| Pixel-perfect review | ×1.10 | Always — 10% for design accuracy checking |
| Missing design / ambiguous specs | ×1.15 | When Figma has gaps or missing mobile frames |
| First-time component type | ×1.20 | When building a pattern not previously in your library |
| Safety buffer | ×1.10 | Always apply a 10% general buffer |

> **Total Multiplier (standard project):** 1.20 × 1.10 × 1.10 = approximately **×1.45**
> 
> Example: Raw estimate = 10 hours → Buffered estimate = **14.5 hours → Round to 16 hours (2 days)**

---

## Estimation Output Format

When presenting an estimate, always use this format:

```
## Estimate: [Project Name] — [Page Name]

| Section | Type | Base Hours | Add-ons | Subtotal |
|---|---|---|---|---|
| Navigation | Complex | 3.5 hrs | Sticky header +1.5 | 5 hrs |
| Hero | Medium | 3 hrs | GSAP entrance +1 | 4 hrs |
| Feature Grid | Medium | 2.5 hrs | — | 2.5 hrs |
| Contact Form | Medium | 2.5 hrs | Validation +1.5 | 4 hrs |
| Footer | Medium | 2 hrs | — | 2 hrs |

**Raw Total**: 17.5 hours
**Buffered Total (×1.45)**: ~25.5 hours → **3.5 days (rounded to 4 days)**
```

