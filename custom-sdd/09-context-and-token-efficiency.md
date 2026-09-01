# AI Context and Token Efficiency

## 1. Problem identified
A feature can contain many operations, for example CREATE/READ/UPDATE/DELETE. A small DELETE change should not require the AI to repeatedly consume the entire feature documentation and unrelated code.

This is a major concern at scale.

## 2. Preferred solution
Use Git as historical storage and use targeted retrieval for implementation.

Do not create a permanent Markdown copy of every ticket change unless the change is complex enough to require one.

## 3. Small change workflow

Example:
- current feature version: 3.0
- requested change: DELETE condition
- JIRA: PROJ-210

AI should receive:
- relevant JIRA context
- current or required specification section
- affected business rule
- affected API
- affected code
- affected tests
- relevant Git diff/history when historical behavior matters

It should not read every unrelated CRUD rule.

## 4. Historical execution
If asked to execute or inspect version 2:
1. read change-history.md
2. resolve version 2 to Git commit/tag
3. retrieve only the relevant feature tree at that commit
4. identify affected files
5. compare historical and current state only if necessary
6. execute against the requested state

## 5. MCP/Git requirement
A Git MCP or equivalent integration should support:
- reading a file at a specific commit
- reading a directory/tree at a specific commit
- retrieving commit metadata
- comparing two commits
- retrieving diffs
- locating the commit corresponding to a specification version

## 6. Context selection
The agent should use a retrieval hierarchy:
1. requested JIRA/spec ID
2. relevant change-history entry
3. target Git commit/version
4. affected spec sections
5. affected code
6. directly related tests
7. related ADRs/contracts
8. broader context only if required

## 7. Principle
AI should consume the smallest sufficient context, not the smallest possible context. Cutting context too aggressively can cause incorrect implementation.

## 8. Safety
A targeted context must still include all constraints that can affect the requested change. For example, a DELETE change may need authorization, transaction, data-retention, audit, and event rules even if they are not physically located in the DELETE section.
