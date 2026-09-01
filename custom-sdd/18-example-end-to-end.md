# End-to-End Example

## Scenario
Service A contains Feature 01. Feature 01 supports:
- CREATE
- READ
- UPDATE
- DELETE

The current specification is version 3.0.

A new JIRA ticket says:
"Add condition X to DELETE."

## Step 1 — JIRA
Ticket:
`PROJ-210`

JIRA links:
- service: service-a
- feature: feature-01
- specification ID: SVC-A-F01

## Step 2 — Specification analysis
The agent identifies:
- DELETE business rule
- DELETE API
- authorization requirements
- affected service code
- DELETE tests

## Step 3 — Specification update
Update the current Markdown specification to describe the new approved behavior.

Record in `change-history.md`:

| Version | JIRA | Date | Git Commit | Summary |
|---|---|---|---|---|
| 3.0 | PROJ-210 | 2026-08-25 | `<commit>` | DELETE now requires condition X |

## Step 4 — AI context
For implementation, the agent should not blindly ingest all feature files if they are irrelevant.

It should retrieve:
- relevant DELETE business rule
- DELETE API contract
- relevant authorization rule
- affected code
- affected tests
- relevant guidelines
- relevant ADRs

## Step 5 — Implementation
AI:
- updates DELETE validation
- updates tests
- updates telemetry if required
- runs CI

## Step 6 — Review
Developer validates:
- condition X is correctly implemented
- unrelated CRUD behavior is unchanged
- security behavior remains correct
- tests cover the new condition
- specification and implementation agree

## Step 7 — Historical execution example
Later, someone asks:
"Inspect Feature 01 as it existed at version 2.0."

Agent:
1. reads `change-history.md`
2. finds version 2.0 and its Git commit
3. retrieves Feature 01 files at that commit
4. reads exact historical specification
5. can compare v2.0 to v3.0 if requested

No duplicate historical Markdown files are necessary.

## Key lesson
The current spec is the current truth; Git is the historical truth; change-history is the navigation index; AI retrieval should be targeted.
