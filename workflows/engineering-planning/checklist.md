# Engineering Planning Checklist
## Purpose
This document provides a mandatory checklist to verify that all necessary planning steps are complete before beginning implementation.

## Principles
- **Verification**: Ensure no architectural step is skipped.
- **Accountability**: Confirm that tickets are ready for development.
- **Completeness**: Guarantee a solid technical foundation.

## Engineering Rules
- **Rule 1**: Verify the technology stack is finalized and documented.
- **Rule 2**: Verify all routes and layouts are defined.
- **Rule 3**: Verify data models for all major entities are documented.
- **Rule 4**: Verify API contracts are agreed upon with backend/API providers.
- **Rule 5**: Verify the global state management strategy is defined.
- **Rule 6**: Verify all required technical utilities and hooks are identified.
- **Rule 7**: Verify the project board is populated with detailed tickets.
- **Rule 8**: Verify every ticket has clear acceptance criteria.

## Best Practices
- Have a senior engineer or peer review the checklist and architecture.
- Ensure API contracts cover error states and empty states identified in the Experience Analysis.
- Check that the routing structure accounts for authenticated vs. public routes.

## Common Mistakes
- ❌ Marking the planning as done when tickets lack acceptance criteria.
- ❌ Skipping API contract verification, assuming backend will "provide what's needed".
- ❌ Not defining the global state strategy, leading to ad-hoc solutions during implementation.
- ❌ Forgetting to include setup and deployment tasks in the project board.

## Related Knowledge
- [Engineering Planning Process](./process.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
