# Review Process
## Purpose
This document details the step-by-step process for conducting code and visual reviews. It ensures a consistent evaluation of all submitted work.

## Principles
- **Methodical Evaluation**: Follow a structured path from broad architecture to specific lines of code.
- **Timely Execution**: Do not leave PRs pending for extended periods.
- **Clear Resolution**: Ensure all comments are addressed before merging.

## Engineering Rules
- **Step 1**: Review the PR description and linked tickets to understand the goal.
- **Step 2**: Verify CI/CD status (tests, linting, build) before starting the manual review.
- **Step 3**: Conduct a high-level architectural review (data flow, component structure).
- **Step 4**: Conduct a visual and interactive review, comparing the result to the design.
- **Step 5**: Conduct a detailed code review (logic errors, edge cases, naming conventions).
- **Step 6**: Provide documented feedback using the standard severity levels.
- **Step 7**: Re-review once the author has addressed the feedback.
- **Step 8**: Approve and merge the PR when all requirements are met.

## Best Practices
- Pull the branch locally to test complex interactions.
- Group similar feedback comments to avoid overwhelming the author.
- Use suggestions in GitHub/GitLab to propose exact code changes for simple fixes.

## Common Mistakes
- ❌ Starting the code review before checking if the automated tests passed.
- ❌ Skipping the visual review and assuming the author verified it.
- ❌ Getting bogged down in minor details while missing major architectural flaws.
- ❌ Merging a PR before all discussions are formally resolved.

## Related Knowledge
- [Review Checklist](./checklist.md)
- [Review Outputs](./outputs.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
