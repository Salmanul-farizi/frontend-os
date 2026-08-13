# Review Inputs
## Purpose
This document defines the prerequisites required before a reviewer begins evaluating a Pull Request. It ensures the reviewer has all necessary context and the code is ready for review.

## Principles
- **Review Readiness**: Do not review unfinished or broken PRs.
- **Context Availability**: The reviewer must understand what the PR is trying to achieve.

## Engineering Rules
- **Rule 1**: Require a submitted Pull Request with a completed Implementation Report Template.
- **Rule 2**: Require all automated CI checks to be passing.
- **Rule 3**: Require links to the relevant tickets/issues and the original design files.
- **Rule 4**: Require instructions on how to test the feature locally, if applicable.
- **Rule 5**: Require visual evidence (screenshots/videos) attached for any UI changes.

## Best Practices
- Reject PRs immediately if CI is failing or the description is blank.
- Review the linked ticket and design files before looking at the code.
- Ensure the author has self-reviewed and removed all draft markers.

## Common Mistakes
- ❌ Starting a review on a PR marked as "Draft" or "WIP".
- ❌ Reviewing without understanding the acceptance criteria of the linked ticket.
- ❌ Wasting time reviewing code that hasn't passed basic linting or tests.
- ❌ Guessing how to test a feature because instructions were not provided.

## Related Knowledge
- [Implementation Outputs](../implementation/outputs.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
