# Interaction Specification

## Section
Mega Menu

---

## Purpose
Large navigation system.

---

## States
- Closed
- Opening
- Open
- Hovering
- Switching
- Closing

---

## Trigger
Hover

---

## Motion
- Container: Crossfade
- Transform: 6px translateY
- Easing: Power2.out
- Duration: 180ms

---

## Navigation
- Rows animate independently.
- 10ms stagger.
- Heading first.
- 4px horizontal movement.
- No panel slide.

---

## Preview Card
- Anchored.
- Content crossfade only.

---

## Responsive
- Desktop: Floating
- Tablet: Drawer
- Mobile: Nested navigation.

---

## Accessibility
- Hover bridge.
- Keyboard navigation.
- Focus trapping.

---

## Engineering Notes
- Do not animate layout.
- Reuse DOM.
- Interrupt active animations.
- Use overwrite.
