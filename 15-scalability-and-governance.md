# Scalability and Governance

## 1. Concern
With approximately 150 JIRA tickets/week, creating one permanent folder per ticket could produce roughly 7,800 ticket folders/year.

Git can technically handle many files, but organizational noise and AI retrieval complexity are more important concerns.

## 2. Decision
Use:
Service → Feature → Current specifications.

Use Git commits/tags for historical versions.

Use `change-history.md` as a lightweight index.

Use separate change documents only when a complex change needs dedicated AI context.

## 3. Why this scales
The number of long-lived product concepts/features is much smaller than the number of JIRA execution tickets.

Many JIRA tickets can modify the same feature specification over time.

## 4. Optional change documents
For a complex change, a feature can contain:
```text
changes/
├── PROJ-250.md
└── PROJ-310.md
```
or a directory when the change is large:
```text
changes/PROJ-500/
├── change.md
├── implementation.md
└── test.md
```

This should be the exception, not the default.

## 5. Specification quality governance
Automated spec linting should check:
- required sections
- metadata
- stable IDs
- broken links
- unresolved questions
- missing acceptance criteria
- missing JIRA references
- duplicate IDs
- invalid references

## 6. CODEOWNERS/reviewer ownership
Use ownership rules to route changes to:
- service teams
- product owners
- architects
- security/data/platform reviewers as appropriate

## 7. Domain organization
Organize teams around service/domain ownership rather than individual permanent ticket ownership.

## 8. Avoid central bottlenecks
Governance should be encoded into templates, automated checks, and service ownership so the architecture group does not become a manual approval bottleneck.
