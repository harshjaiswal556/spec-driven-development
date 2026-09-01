# Complete Operating Model

## 1. End-to-end lifecycle

```text
Business requirement
    ↓
Product specification
    ↓
Use-case specification
    ↓
Acceptance criteria
    ↓
Technical specification
    ↓
Architecture/API/data/NFR review
    ↓
Specification approval
    ↓
JIRA Ready for AI
    ↓
AI implementation
    ↓
AI-generated tests
    ↓
Automated validation
    ↓
AI review/security/spec-compliance checks
    ↓
Human developer review
    ↓
QA/E2E validation
    ↓
Merge
    ↓
Deployment
    ↓
Production monitoring
    ↓
Feedback/incident/change request
    ↓
Specification update
```

## 2. Why this differs from traditional development

Traditional:
JIRA → developer interprets requirement → developer designs → developer codes → developer tests.

Target:
JIRA → approved specification → AI receives controlled context → AI implements → automated validation → human validates.

## 3. Lifecycle states
Recommended JIRA states:
- BACKLOG
- SPEC DRAFT
- PRODUCT REVIEW
- TECHNICAL REVIEW
- READY FOR AI
- AI IMPLEMENTATION
- AUTOMATED VALIDATION
- HUMAN REVIEW
- QA
- READY FOR RELEASE
- DONE

Blocked states can include:
- BLOCKED – SPEC
- BLOCKED – ARCHITECTURE
- BLOCKED – DEPENDENCY
- BLOCKED – TEST
- BLOCKED – AI

## 4. Mandatory gates
A ticket cannot enter implementation until:
- requirement is clear
- use case exists
- acceptance criteria exist
- business rules exist
- edge cases are identified
- dependencies are identified
- required architecture is approved
- relevant NFRs are defined

## 5. Definition of Done
A change is done only when:
- specification is approved and current
- implementation is complete
- tests pass
- security checks pass
- architecture checks pass
- code review passes
- observability requirements are met
- documentation/spec references are updated
- deployment succeeds according to release policy
