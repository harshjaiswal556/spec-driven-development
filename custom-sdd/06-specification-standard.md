# Specification Standard

## 1. Mandatory feature specification sections

A feature specification should normally contain:
1. Objective
2. Actors
3. Preconditions
4. Trigger
5. Main flow
6. Alternative flows
7. Error scenarios
8. Business rules
9. Inputs
10. Outputs
11. API contract
12. Data requirements
13. Security requirements
14. Performance requirements
15. Observability requirements
16. Acceptance criteria
17. Test scenarios
18. Dependencies
19. Related JIRA tickets
20. Related ADRs
21. Open questions

## 2. Metadata
Use machine-readable metadata at the top.

Example:
```yaml
spec_id: SVC-A-F01
title: Customer Registration
service: service-a
version: 2.0
status: APPROVED
owner_team: service-a-team
jira_tickets:
  - PROJ-101
  - PROJ-108
```

## 3. Human-readable content
Metadata is followed by Markdown sections designed for product owners, architects, developers, QA, and AI agents.

## 4. Open questions
Open questions must be explicit:
```markdown
## Open Questions
- [ ] What happens when the email already exists?
- [ ] Is verification mandatory?
```

AI must not silently resolve open questions.

## 5. Approval state
Recommended:
- DRAFT
- PRODUCT_REVIEW
- TECHNICAL_REVIEW
- APPROVED
- IMPLEMENTATION
- VERIFIED
- RELEASED

## 6. Business rules
Business rules should have stable IDs where useful:
- BR-LOGIN-001
- BR-LOGIN-002

This allows AI and tests to reference individual rules without reading unrelated content.

## 7. Machine-readable identifiers
Use stable IDs for:
- specs
- business rules
- APIs
- important acceptance criteria
- ADRs

This improves retrieval and traceability.
