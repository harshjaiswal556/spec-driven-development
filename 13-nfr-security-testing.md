# NFR, Security, Testing, and Observability

## 1. Scale assumption
The product expects approximately 1 million users in one year. Scale assumptions must be translated into measurable technical requirements rather than left implicit.

## 2. NFR examples
For each relevant service/feature define:
- expected throughput
- peak concurrency
- latency targets
- availability
- RPO
- RTO
- data retention
- scalability expectations

Do not let AI invent these numbers. Unknown values must be explicitly marked as open questions.

## 3. Security
Relevant specifications should address:
- authentication
- authorization
- data protection
- input validation
- secrets handling
- auditability
- abuse prevention
- dependency/security constraints

## 4. Testing
Specifications should identify:
- happy paths
- negative paths
- edge cases
- integration scenarios
- contract tests
- E2E scenarios
- performance scenarios where relevant

## 5. Observability
Production changes should define required:
- logs
- metrics
- traces
- alerts
- audit events

## 6. Failure behavior
Every critical flow should specify behavior for:
- dependency timeout
- dependency failure
- database failure
- duplicate request
- invalid input
- retry
- partial failure

## 7. Example transaction requirement
For a money transfer:
- validate recipient
- validate balance
- enforce idempotency
- reserve/commit funds safely
- define event behavior
- define retry behavior
- define observability
- define failure states

The AI should implement these constraints rather than invent them.
