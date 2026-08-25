# Final Approved Operating Model

## 1. Target philosophy
The organization will use:

**Specification-Driven Development + AI-First Implementation.**

The specification is created and approved before implementation. AI performs the majority of coding. Humans make and validate important product and engineering decisions.

## 2. Organizational model
100 developers are organized into service/domain teams.

Example for 10 services:
- approximately 10 developers per service team as a starting point
- actual allocation follows complexity and change volume

Developers do not permanently own isolated services individually; teams own services.

## 3. JIRA model
JIRA is the work-management layer.

JIRA contains:
- ID
- title
- business summary
- priority
- team
- status
- specification link
- PR/release links

JIRA is not the detailed source of truth for requirements.

## 4. Specification repository
Primary hierarchy:

```text
Product
  ↓
Service
  ↓
Feature
  ↓
Current specification
```

Example:
```text
03-services/service-a/feature-01/
├── spec.md
├── business-rules.md
├── api.md
├── data.md
├── test-spec.md
├── guidelines.md
└── change-history.md
```

## 5. Versioning model
Do not maintain:
`spec-v1.md`, `spec-v1.1.md`, `spec-v2.md`.

Instead:
- current files remain current
- Git stores all historical states
- change-history maps version/JIRA/commit/summary
- approved milestones may receive Git tags

## 6. Change history
Example:
```text
| Version | JIRA | Date | Git Commit | Summary |
| 1.0 | PROJ-101 | ... | ... | Initial |
| 1.1 | PROJ-108 | ... | ... | DELETE condition |
| 2.0 | PROJ-150 | ... | ... | Bulk operation |
```

The table is a navigation index. Git is historical truth.

## 7. AI execution
AI should:
1. identify the JIRA/spec
2. resolve required version
3. retrieve the smallest sufficient specification context
4. inspect affected code
5. implement
6. generate/update tests
7. validate
8. produce a PR
9. report assumptions and risks

## 8. Historical AI execution
If asked to execute version 2:
- resolve version 2 in `change-history.md`
- retrieve the corresponding Git commit/tree through Git/MCP
- inspect exact historical specification
- retrieve relevant code and tests
- execute only the requested scope

## 9. Token optimization
Do not load:
- unrelated services
- unrelated features
- unrelated CRUD operations
- unnecessary historical versions

Retrieve only relevant content while preserving all constraints required for correctness.

## 10. Automated quality
Required gates should include:
- build
- lint/type checks
- tests
- security
- dependency scanning
- contract validation
- E2E where required
- performance where required
- specification compliance

## 11. Human responsibilities
### Product Owner
Owns:
- what
- why
- business behavior
- acceptance criteria

### Architect
Owns:
- system-level how
- service boundaries
- architecture
- NFRs
- significant technical decisions

### Developer
Owns:
- technical validation
- code review
- correctness
- maintainability
- risk assessment

### AI
Owns:
- implementation execution
- test generation
- repetitive engineering work
- repair loops under defined constraints

### QA/Security/Platform
Own their specialized validation and operational concerns.

## 12. Governance
Use:
- specification templates
- metadata
- stable IDs
- ADRs
- golden paths
- automated spec linting
- CODEOWNERS
- CI gates
- risk-based review

## 13. Scalability principle
Do not optimize the repository around the number of JIRA tickets. Optimize it around long-lived product concepts and efficient AI retrieval.

150 JIRA tickets/week should not imply 150 permanent folders/week.

## 14. Final architecture

```text
                    PRODUCT
                       │
                       ▼
                   SERVICE
                       │
                       ▼
                    FEATURE
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
        CURRENT SPEC        CHANGE HISTORY
             │                   │
             │                   ▼
             │               JIRA → VERSION
             │                   │
             │                   ▼
             │                GIT COMMIT
             │                   │
             └─────────┬─────────┘
                       ▼
                  AI CONTEXT
                       │
                       ▼
                 AI IMPLEMENTATION
                       │
                       ▼
             AUTOMATED VALIDATION
                       │
                       ▼
                 HUMAN REVIEW
                       │
                       ▼
                    RELEASE
                       │
                       ▼
                  PRODUCTION
                       │
                       ▼
                FEEDBACK / CHANGE
                       │
                       └────────→ SPEC
```

## 15. Final design rule
The organization should treat Markdown specifications as version-controlled engineering artifacts, JIRA as execution/traceability metadata, Git as historical truth, and AI as the primary implementation engine operating on controlled specification context.

## 16. Final recommendation
Pilot this operating model before organization-wide adoption. The process, templates, retrieval strategy, and AI agents should be improved based on real ticket data, review outcomes, token usage, defects, and production results.
