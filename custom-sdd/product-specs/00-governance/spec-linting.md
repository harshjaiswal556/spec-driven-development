# Specification Linting

CI should validate every changed specification for:

- Required sections and YAML metadata
- Duplicate or malformed stable IDs
- Broken Markdown links
- Unresolved open questions
- Missing acceptance criteria
- Missing JIRA references
- Invalid ADR references
- Invalid status transitions

Dummy command: `spec-lint product-specs/03-services/service-a/feature-01`.
