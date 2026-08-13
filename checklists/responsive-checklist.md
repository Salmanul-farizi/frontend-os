# Responsive QA Checklist

Before any component is marked as complete, it must be verified across all standard viewports.

## 1. Viewport Testing
- [ ] **Mobile Portrait (< 480px)**: Verified layout, typography scaling, and touch targets.
- [ ] **Tablet (480px - 991px)**: Verified layout transition (e.g., 1 column to 2 columns).
- [ ] **Desktop (992px - 1440px)**: Verified standard desktop layout.
- [ ] **Large Desktop (> 1440px)**: Verified that layout does not stretch infinitely (max-width containers are respected).

## 2. Layout & Overflow
- [ ] **Zero Horizontal Scroll**: Confirmed there is no horizontal scrollbar (`overflow-x`) on any device size.
- [ ] **Dynamic Content Heights**: Confirmed containers do not have fixed heights (`height: 400px`) that cause text to overflow when it wraps on smaller screens.
- [ ] **Flex/Grid Wrapping**: Confirmed items wrap gracefully (`flex-wrap: wrap` or grid `auto-fit`) rather than shrinking into unreadable slivers.

## 3. Typography & Media
- [ ] Text scales appropriately across breakpoints (using `clamp()` or media queries).
- [ ] Images scale proportionally (`max-width: 100%; height: auto`).
- [ ] Images maintain correct aspect ratios (using `object-fit: cover` or `aspect-ratio`).

## 4. Touch & Interaction
- [ ] All touch targets (buttons, links) are at least `44x44px` on mobile devices.
- [ ] Hover states (`:hover`) do not hide critical information, as hover is unavailable on touch devices.
- [ ] Mobile navigation toggle (hamburger menu) functions correctly and traps focus if it opens a modal overlay.

## 5. Browser Zoom
- [ ] Layout remains legible and usable when the browser is zoomed to **200%** (WCAG requirement).
