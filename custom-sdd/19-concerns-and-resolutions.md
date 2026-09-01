# Design Concerns and Resolutions

## Concern 1 — How should 100 developers be divided?
### Concern
Assigning every developer a permanent individual service owner could create silos.

### Resolution
Create service/domain teams. JIRA tickets are routed to teams. Developers receive tickets within their team's ownership area.

---

## Concern 2 — Should JIRA tickets be folders?
### Concern
If every JIRA ticket becomes a permanent folder, 150 tickets/week can produce thousands of folders per year.

### Resolution
Use Service → Feature as the primary hierarchy. Keep JIRA IDs in metadata and change history. Create dedicated change documents only for complex changes.

---

## Concern 3 — How should repeated changes to one feature be handled?
### Concern
One feature can have many JIRA tickets.

### Resolution
Keep one current feature specification and use Git history for previous versions. `change-history.md` maps JIRA tickets to versions/commits.

---

## Concern 4 — How can previous versions be inspected?
### Concern
A current `spec.md` does not visibly contain old versions.

### Resolution
Use Git commits/tags. The change-history table identifies the commit. Retrieve the exact historical file/tree from Git.

---

## Concern 5 — How can AI execute an old version?
### Concern
The current specification may be version 3, but the user may ask AI to work against version 2.

### Resolution
Use a Git MCP/equivalent that can retrieve a file/tree at a specific commit and generate diffs. The agent resolves version 2 from change-history and retrieves that state.

---

## Concern 6 — Token consumption
### Concern
A small DELETE change should not require AI to consume the entire CRUD feature and unrelated code.

### Resolution
Use targeted retrieval. Resolve the ticket/version, identify affected rules/files, and provide only the smallest sufficient context. Historical context comes from Git when needed.

---

## Concern 7 — Should every change have its own Markdown folder?
### Concern
That would create excessive documentation noise.

### Resolution
No. For small changes, use JIRA + Git diff + change-history. For complex changes, optionally create a dedicated change Markdown file or directory.

---

## Concern 8 — Can AI invent missing behavior?
### Concern
AI may make a plausible but incorrect assumption.

### Resolution
Open questions are explicit. AI must stop and request clarification for unresolved business behavior.

---

## Concern 9 — Can the coding agent approve itself?
### Concern
Self-review can miss systematic errors.

### Resolution
Use separate validation/review agents where practical and require human approval for production changes.

---

## Concern 10 — How do we prevent code from becoming the real specification?
### Concern
A developer/AI may discover a mismatch and silently implement a different behavior.

### Resolution
Behavioral changes must update the specification and receive the required approval before implementation continues.

---

## Concern 11 — How do we manage 1 million users?
### Concern
AI could make arbitrary scalability assumptions.

### Resolution
NFRs must explicitly define measurable targets. Unknown targets remain open questions. Architecture and performance requirements are reviewed before implementation.

---

## Concern 12 — How do we keep specifications usable by AI?
### Concern
Human prose alone can be ambiguous.

### Resolution
Use stable IDs, machine-readable metadata, explicit business rules, acceptance criteria, dependencies, and structured sections.

---

## Concern 13 — How do we avoid governance becoming a bottleneck?
### Concern
100 developers could be blocked by a small architecture team.

### Resolution
Encode standards into templates, automated spec linting, golden paths, CI checks, CODEOWNERS, and risk-based review.

---

## Concern 14 — How do we know whether AI-first development is working?
### Concern
95% AI-generated code alone does not prove success.

### Resolution
Track AI contribution together with quality, defects, review rejection, rework, incidents, security, performance, and delivery metrics.
