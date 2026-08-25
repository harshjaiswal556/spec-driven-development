# Traceability and Auditability

## 1. Required chain

```text
Business requirement
    ↓
Product/use-case specification
    ↓
JIRA ticket
    ↓
Specification version
    ↓
Git commit/tag
    ↓
Pull request
    ↓
Code
    ↓
Tests
    ↓
Release
    ↓
Production telemetry
```

## 2. JIRA-to-spec
Every implementation ticket must identify the relevant specification ID/path.

## 3. Spec-to-JIRA
The specification metadata or change history should identify the tickets that introduced meaningful changes.

## 4. Spec-to-code
Every PR should reference:
- JIRA
- specification ID
- relevant specification version/commit where required

## 5. Change history
`change-history.md` provides a fast human navigation layer.

## 6. Git as audit source
Git provides:
- exact content at a point in time
- author/reviewer information
- commit messages
- diffs
- branches
- tags

## 7. Example
```text
PROJ-210
→ SVC-A-F01
→ version 2.0
→ commit c73fa21
→ PR #9821
→ release 1.4.0
```

## 8. Why this matters
The organization should be able to answer:
- Why does this code exist?
- Which requirement introduced it?
- What did the requirement say at that time?
- Who approved the change?
- Which tests prove it?
- Which release contained it?

without reconstructing history from memory or scattered JIRA comments.
