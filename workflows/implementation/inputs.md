# Implementation Inputs
## Purpose
This document defines the prerequisites required before a developer can begin writing code for a specific feature or task.

## Principles
- **Ready to Work**: Ensure tickets have all necessary context before development starts.
- **No Blockers**: Resolve architectural ambiguities before coding.

## Engineering Rules
- **Rule 1**: Require a fully defined task/ticket with clear acceptance criteria.
- **Rule 2**: Require the approved Engineering Plan Document.
- **Rule 3**: Require finalized API Contracts and Data Models.
- **Rule 4**: Require the completed Design and Experience Analysis Reports.
- **Rule 5**: Require access to all necessary assets (images, icons, fonts).

## Best Practices
- If a ticket is missing acceptance criteria, send it back to planning; do not start.
- Ensure local development environment matches the project requirements (Node version, etc.).
- Review the API contracts against the design to ensure all needed data points exist.

## Common Mistakes
- ❌ Starting work on vague tickets without acceptance criteria.
- ❌ Coding without referencing the approved Engineering Plan, leading to architectural drift.
- ❌ Assuming missing assets will be provided later instead of requesting them upfront.
- ❌ Ignoring the Experience Analysis and inventing interaction patterns on the fly.

## Related Knowledge
- [Engineering Planning Outputs](../engineering-planning/outputs.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
