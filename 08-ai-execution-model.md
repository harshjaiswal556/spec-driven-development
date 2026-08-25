# AI Execution Model

## 1. AI's role
AI is the primary implementation engine. Humans own requirements, architectural decisions, and final engineering approval.

## 2. AI must receive controlled context
Do not automatically provide the entire repository.

Context should include:
- approved relevant specification
- applicable business rules
- relevant API contract
- relevant data model
- applicable ADRs
- coding/golden-path guidelines
- relevant existing code
- test requirements

## 3. AI implementation sequence

```text
Read approved spec
    ↓
Resolve/reject ambiguities
    ↓
Identify affected components
    ↓
Inspect relevant code
    ↓
Generate implementation
    ↓
Generate/update tests
    ↓
Run validation
    ↓
Produce PR
```

## 4. AI must not
- implement unapproved requirements
- invent missing business rules
- change public contracts silently
- bypass security controls
- modify architecture without an approved decision
- remove tests to make CI pass
- hide uncertainty

## 5. AI must report
- files changed
- requirements implemented
- tests added/changed
- assumptions
- unresolved questions
- dependencies
- potential risks

## 6. Multiple AI roles
A mature system can use separate agents:
- Product/spec agent
- Technical spec agent
- Coding agent
- Test agent
- Security agent
- Review/spec-compliance agent

The coding agent should not be the sole approver of its own output.

## 7. Human approval
The developer reviews:
- specification compliance
- architecture
- security
- edge cases
- reliability
- performance
- observability
- tests
- backward compatibility
