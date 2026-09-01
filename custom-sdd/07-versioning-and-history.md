# Versioning and Historical Truth

## 1. Core decision
Do not manually store full copies such as:
- spec-v1.md
- spec-v1.1.md
- spec-v2.md

Keep the latest approved file as `spec.md`.

Git stores all historical states.

## 2. Change history
Each feature keeps a lightweight `change-history.md`.

Example:

| Version | JIRA | Date | Git Commit | Summary |
|---|---|---|---|---|
| 1.0 | PROJ-101 | 2026-08-01 | a82f31c | Initial specification |
| 1.1 | PROJ-108 | 2026-08-05 | b91de42 | Added DELETE condition |
| 1.2 | PROJ-115 | 2026-08-12 | c73fa21 | Added OTP |
| 2.0 | PROJ-127 | 2026-08-20 | d82ac91 | Changed authentication flow |

## 3. Responsibility of each artifact
- `spec.md`: current complete truth
- other feature MD files: current complete truth for their concern
- `change-history.md`: human-readable index
- Git: exact historical content and diffs
- JIRA: reason, business request, workflow, ownership

## 4. Historical retrieval
To inspect version 1.1:
1. read change-history.md
2. locate the version and commit
3. retrieve the feature files at that commit
4. compare with another commit if required

## 5. Git tags
For approved milestones, optionally create tags:
- `SVC-A-F01-v1.0`
- `SVC-A-F01-v1.1`
- `SVC-A-F01-v2.0`

Tags are useful for frozen approved states.

## 6. Why this is scalable
Git already solves file versioning. Duplicating every historical Markdown file creates unnecessary repository noise and increases AI retrieval complexity.

## 7. Important rule
The change-history table is an index, not the source of historical content. If a conflict exists, Git's committed content is authoritative.
