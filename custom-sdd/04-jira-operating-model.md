# JIRA Operating Model

## 1. JIRA's role
JIRA is the execution/work-management layer.

JIRA should hold:
- ticket ID
- title
- business summary
- priority
- owner/team
- status
- release
- specification link
- pull request link
- test/release references

Detailed specifications should live in Git.

## 2. Specification linkage
Every implementation ticket should contain:
- Specification ID
- Specification path
- Relevant specification version or commit where appropriate

Example:
```text
JIRA: PROJ-210
Specification ID: SVC-A-F01
Specification path: services/service-a/feature-01/spec.md
```

## 3. Ticket classification
Not all tickets need the same process.

### Type A — New use case
Requires a full specification.

### Type B — Existing feature modification
Updates the current specification and records a Git change.

### Type C — Bug
Fixes behavior and updates business rules/edge cases/tests when the bug reveals a specification gap.

### Type D — Technical change
May require an ADR and technical specification.

### Type E — Configuration/small change
Can use a lightweight specification update if risk is low.

### Type F — Documentation-only
No implementation pipeline is required.

## 4. Ticket volume
At approximately 150 tickets/week, do not make JIRA tickets the folder hierarchy. Tickets are transient execution units; features and services are long-lived knowledge structures.

## 5. Bidirectional traceability
JIRA should link to:
JIRA → specification → PR → tests → release.

The specification/change history should also identify the JIRA tickets that caused meaningful changes.
