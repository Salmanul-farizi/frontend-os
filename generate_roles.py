import os

roles = [
    "html-engineer",
    "css-engineer",
    "javascript-engineer",
    "motion-engineer",
    "webflow-engineer",
    "accessibility-reviewer",
    "qa-reviewer"
]

files = [
    "README.md",
    "responsibilities.md",
    "checklist.md",
    "inputs.md",
    "outputs.md",
    "delivery-standard.md",
    "report-template.md"
]

base_dir = "/Users/salman/frontend-os/roles"

template = """<[Title]>
## Purpose
Standardizes the {doc_type} for the {role} role to ensure high-quality engineering outcomes.

## Principles
- **Quality First**: Ensure every output meets the highest quality standards.
- **Clear Communication**: Maintain transparency about progress and roadblocks.
- **Continuous Improvement**: Always look for ways to optimize the process and outcome.

## Engineering Rules
- **Follow Specifications**: Must strictly adhere to the engineering plan and design specifications.
- **Validate Everything**: Must test and validate all deliverables before submission.
- **No Shortcuts**: Must never skip required steps in the {doc_type} process.
- **Document Decisions**: Must document any deviations from standard practices with clear rationale.
- **Maintain Consistency**: Must ensure the work aligns with existing architecture and patterns.
- **Prioritize Performance**: Must consider the performance implications of every decision.

## Best Practices
- Review requirements thoroughly before starting work
- Communicate early and often with cross-functional team members
- Keep deliverables modular and well-documented
- Conduct self-reviews before requesting formal reviews

## Common Mistakes
- ❌ Rushing through without fully understanding the requirements
- ❌ Failing to test edge cases or responsive states
- ❌ Ignoring established naming conventions or architecture guidelines
- ❌ Not updating documentation when making architectural changes

## Related Knowledge
- [Role Overview](../README.md)

## Version History
- v1.0 - Initial Creation - 2026-08-13
"""

for role in roles:
    role_dir = os.path.join(base_dir, role)
    os.makedirs(role_dir, exist_ok=True)
    
    for file_name in files:
        doc_type = file_name.replace(".md", "").replace("-", " ").title()
        formatted_role = role.replace("-", " ").title()
        title = f"{formatted_role} {doc_type}"
        
        file_path = os.path.join(role_dir, file_name)
        with open(file_path, "w") as f:
            f.write(template.format(Title=title, doc_type=doc_type.lower(), role=formatted_role))

print("Created all role files.")
