# Team and Service Ownership

## 1. Assumption
There are approximately 100 developers and multiple microservices. A sample architecture may have 10 services.

## 2. Recommended organizational model
Do not assign one developer permanently to one service. Create service/domain teams.

Example:
- Service A Team: approximately 10 developers
- Service B Team: approximately 10 developers
- Service C Team: approximately 10 developers
- ...
- Service J Team: approximately 10 developers

Actual allocation should follow service complexity, criticality, operational burden, and change volume.

## 3. Ownership principle
The team owns the service. Individual developers receive tickets from the team's queue.

This avoids:
- single-person knowledge silos
- permanent dependency on one developer
- bottlenecks when that person is unavailable
- inconsistent review practices

## 4. Team responsibilities
Each service team owns:
- service specifications
- service architecture
- feature specifications
- service-level business rules
- APIs owned by the service
- tests
- observability
- AI implementation review
- production support

## 5. Shared governance
A small architecture/governance group should define:
- architecture standards
- API standards
- data standards
- security standards
- observability standards
- AI development policy
- golden paths/templates

They should not manually review every ticket.

## 6. Senior engineers
Senior engineers should spend more time on:
- domain modeling
- specification quality
- architecture
- AI guardrails
- security
- scalability
- complex reviews
than repetitive implementation.

## 7. Service team routing
JIRA should route tickets to service teams, not directly to arbitrary developers. The team then assigns the ticket based on capacity and expertise.
