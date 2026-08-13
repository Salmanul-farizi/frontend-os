# Motion Standards

## Purpose
This document standardizes how we approach motion and animations across all projects. Motion must enhance the user experience by providing context, feedback, and delight, without being distracting, detrimental to performance, or inaccessible to those with vestibular disorders.

## Principles
- **Purposeful**: Motion must serve a clear function, such as guiding attention, confirming an action, or indicating state. Never use motion purely for decoration.
- **Performant**: Animations must run smoothly at 60fps. Prioritize hardware-accelerated properties and avoid layout thrashing.
- **Accessible**: Always respect user preferences for reduced motion. Motion must not cause nausea or trigger vestibular disorders.
- **Subtle**: Good motion goes unnoticed. Keep durations short and easing natural.

## Engineering Rules
- **Rule: Use hardware-accelerated CSS properties**
  - Animate only `transform` and `opacity` whenever possible.
  - Never animate `width`, `height`, `margin`, `padding`, `top`, `left`, `right`, or `bottom` unless absolutely necessary, as they trigger expensive layout repaints.
- **Rule: Respect `prefers-reduced-motion`**
  - All functional animations must have a fallback or be disabled when `@media (prefers-reduced-motion: reduce)` is active.
  - Example: `* { @media (prefers-reduced-motion: reduce) { animation: none !important; transition: none !important; } }`
- **Rule: Control duration and easing**
  - Use standard duration tokens (e.g., `150ms` for micro-interactions, `300ms` for entry/exit).
  - Never use linear easing for UI transitions. Always use standard easing functions (e.g., `ease-in-out`, `cubic-bezier`).
- **Rule: Limit continuous animations**
  - Avoid infinite loops for decorative elements. Limit them to essential loading indicators.
  - Pause background animations or videos when they are not in the viewport.
- **Rule: State changes must be immediate**
  - While visual feedback can be animated, the underlying state change (like checking a box or disabling a button) must register instantly.
- **Rule: Coordinate complex animations**
  - When animating multiple elements, stagger their entry to create a natural flow rather than animating everything simultaneously.
  - Use JavaScript animation libraries (like GSAP or Framer Motion) only when CSS transitions are insufficient.

## Best Practices
- Define and use design tokens for durations and easings.
- Use `will-change` sparingly and only right before an animation occurs, removing it afterwards.
- Test animations on low-end devices to ensure smooth performance.
- Use CSS keyframes for complex, multi-step animations.

## Common Mistakes
- ❌ Animating box-shadow or color properties which are not hardware accelerated.
- ❌ Using excessively long durations (e.g., > 500ms for UI elements) that make the app feel sluggish.
- ❌ Forgetting to handle `prefers-reduced-motion` media queries.
- ❌ Using `will-change: transform` globally, causing high memory usage.
- ❌ Staggering too many elements on scroll, creating a distracting "waterfall" effect.

## Related Knowledge
- [CSS Standards](../css/README.md)
- [Accessibility Standards](../accessibility/README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
