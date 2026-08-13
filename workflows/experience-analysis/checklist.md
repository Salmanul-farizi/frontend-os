# Experience Analysis Checklist
## Purpose
This document provides a mandatory checklist to verify that all experience and interaction aspects have been fully analyzed.

## Principles
- **Verification**: Ensure no critical interaction states are missed.
- **Accountability**: Confirm that accessibility and performance have been considered.
- **Completeness**: Guarantee all interaction documentation is ready for planning.

## Engineering Rules
- **Rule 1**: Verify all page transitions are defined.
- **Rule 2**: Verify all loading, error, success, and empty states are documented.
- **Rule 3**: Verify scroll behaviors and sticky elements are defined.
- **Rule 4**: Verify all complex animations have been reviewed for feasibility.
- **Rule 5**: Verify focus management and keyboard navigation flow is documented.
- **Rule 6**: Verify `prefers-reduced-motion` fallbacks are specified.
- **Rule 7**: Verify mobile-specific interactions (swipe, touch targets) are defined.

## Best Practices
- Review the checklist against the core user flows.
- Ensure that for every interactive component, the interaction state is verified.
- Cross-reference with the Design Analysis report to ensure no components were missed.

## Common Mistakes
- ❌ Skipping the review of loading states on slow connections.
- ❌ Forgetting to verify keyboard accessibility on custom components.
- ❌ Not defining the exact triggers for scroll animations.
- ❌ Assuming default browser focus rings are acceptable without checking design requirements.

## Related Knowledge
- [Experience Analysis Process](./process.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
