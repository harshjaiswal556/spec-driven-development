# Architecture Governance and ADRs

## 1. Architecture council
For a 100-developer organization, use a small architecture governance group.

Possible roles:
- platform architect
- security architect
- data architect
- API architect
- infrastructure architect
- domain architects

## 2. Responsibilities
Define:
- service boundaries
- API standards
- data standards
- communication patterns
- security standards
- scalability standards
- observability standards
- deployment standards
- AI coding constraints
- golden paths

## 3. Do not centrally review every ticket
The architecture group should establish reusable rules and review high-risk decisions.

## 4. ADRs
Use Architecture Decision Records for significant decisions.

Example:
```text
ADR-017
Title: Use event-driven communication between Order and Notification domains

Context:
...

Decision:
...

Alternatives:
...

Consequences:
...

Affected services:
...
```

## 5. AI interaction with ADRs
AI must retrieve relevant ADRs before making changes that could affect architectural decisions.

## 6. Golden paths
Provide standard patterns/templates for:
- APIs
- services
- database entities
- events
- consumers
- authentication
- tests
- logging
- metrics
- tracing
- error handling

The goal is to make the correct implementation the easiest implementation for both humans and AI.
