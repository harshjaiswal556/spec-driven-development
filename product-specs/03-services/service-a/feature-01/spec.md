---
spec_id: SVC-A-F01
title: Customer Registration
service: service-a
version: 1.0
status: APPROVED
owner_team: service-a-team
jira_tickets:
  - DEMO-101
related_adrs:
  - ADR-001
---

# Customer Registration

## Objective

Allow an authenticated support agent to create a customer profile.

## Actors

- Support agent
- Customer Registration API

## Preconditions

- The agent has the `customer:create` permission.
- The request includes a valid email address.

## Trigger

The agent submits the registration form.

## Main Flow

1. Validate the name and email.
2. Confirm that the email is not already registered.
3. Generate an opaque customer ID.
4. Persist the profile.
5. Publish `customer.registered.v1`.
6. Return the customer ID.

## Alternative Flows

- If the email already exists, return the existing-customer error without creating a record.

## Error Scenarios

- Invalid input returns `400`.
- Missing permission returns `403`.
- Duplicate email returns `409`.
- Temporary storage failure returns `503`.

## Inputs and Outputs

Input: `full_name`, `email`.
Output: `customer_id`, `created_at`.

## Security Requirements

Email is encrypted at rest and never written to application logs.

## Performance Requirements

p95 response time must be below 400 ms at 100 requests per second.

## Observability Requirements

Emit `customer.registration.started`, `customer.registration.succeeded`, and `customer.registration.failed` metrics.

## Acceptance Criteria

- **AC-REG-001:** A valid request creates exactly one customer.
- **AC-REG-002:** A duplicate email returns `409`.
- **AC-REG-003:** Unauthorized agents cannot create customers.
- **AC-REG-004:** A successful request publishes `customer.registered.v1`.

## Dependencies

- Customer database
- OrbitBus
- Authentication service

## Related JIRA Tickets

- `DEMO-101`

## Related ADRs

- `ADR-001`
- `ADR-002`

## Open Questions

- [ ] Should an invitation email be sent immediately or by a scheduled job?
