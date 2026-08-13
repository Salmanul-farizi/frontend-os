# Review Checklist
## Purpose
This document provides a mandatory checklist for reviewers to ensure comprehensive coverage during the review process.

## Principles
- **Verification**: Ensure no aspect of the review is accidentally skipped.
- **Accountability**: Confirm that both visual and technical standards are met.
- **Completeness**: Guarantee the code is truly ready for production.

## Engineering Rules
- **Rule 1**: Verify PR description is complete and links to the correct tickets.
- **Rule 2**: Verify all CI/CD pipelines (linters, tests) are passing green.
- **Rule 3**: Verify the implementation matches the original Engineering Plan.
- **Rule 4**: Verify the UI visually matches the design across target breakpoints.
- **Rule 5**: Verify interactive states (loading, error, empty) function as defined.
- **Rule 6**: Verify code is clean, readable, and well-commented where necessary.
- **Rule 7**: Verify accessibility standards (e.g., keyboard navigation) are maintained.
- **Rule 8**: Verify no new console errors or warnings were introduced.

## Best Practices
- Keep this checklist open while reviewing the code.
- If a checklist item is not applicable, document why in the PR comments.
- Collaborate with QA or Design for specific visual verification if unsure.

## Common Mistakes
- ❌ Checking off items without actually verifying them locally.
- ❌ Ignoring accessibility checks during review.
- ❌ Assuming the author checked the responsive design instead of verifying it yourself.
- ❌ Approving the PR despite minor, unaddressed console warnings.

## Related Knowledge
- [Review Process](./process.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
