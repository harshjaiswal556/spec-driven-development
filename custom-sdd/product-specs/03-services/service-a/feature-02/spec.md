---
spec_id: SVC-A-F02
title: Customer Search
service: service-a
version: 2.2
status: APPROVED
owner_team: service-a-team
jira_tickets:
  - DEMO-102
  - DEMO-120
  - DEMO-121
  - DEMO-122
related_adrs:
  - ADR-002
---

# Customer Search

## Objective

Allow an authorized support agent to find customer profiles quickly using an exact email, customer ID, or partial customer name.

## Actors

- Support agent
- Customer Search API
- Customer database
- Audit service

## Preconditions

- The agent is authenticated.
- The agent has the `customer:read` permission.
- The search service and customer database are available.

## Trigger

The agent submits one or more supported search criteria.

## Main Flow

1. Authenticate and authorize the request.
2. Validate that at least one search criterion is present.
3. Normalize email and name values for comparison.
4. Search the customer index.
5. Apply the requested page and page size within the allowed limit.
6. Record a metadata-only audit event.
7. Return matching customer summaries and pagination information.

## Alternative Flows

- An exact customer ID search returns at most one result.
- An exact email search returns at most one result.
- A name search returns results ordered by customer ID ascending.
- An empty result returns `200` with an empty list.

## Error Scenarios

- Missing search criteria returns `400`.
- Search text shorter than three characters returns `400` unless it is an exact customer ID.
- Missing permission returns `403`.
- Invalid page or page size returns `400`.
- Database timeout returns `503` and emits an alert metric.

## Inputs

- `customer_id` (optional exact identifier)
- `email` (optional exact email)
- `name` (optional partial name)
- `page` (optional, default `1`)
- `page_size` (optional, default `25`, maximum `100`)

At least one of `customer_id`, `email`, or `name` is required.

## Outputs

Return `items`, `page`, `page_size`, and `total_count`. Each item contains `customer_id`, `full_name`, and a masked email address.

## API Contract

See [api.md](api.md) and API identifier `API-SEARCH-001`.

## Data Requirements

See [data.md](data.md) and data identifier `DATA-SEARCH-001`.

## Security Requirements

Only agents with `customer:read` may search. Results must not expose full email addresses. Search inputs must be parameterized and raw email values must not be written to logs.

## Performance Requirements

p95 latency must remain below 500 ms at 200 requests per second. Search results must be limited to 100 records per request.

## Observability Requirements

Emit request count, result count, latency, validation failure, authorization failure, and database timeout metrics. Write a metadata-only audit event for every authorized search.

## Acceptance Criteria

- **AC-SEARCH-001:** An authorized agent can search by exact customer ID.
- **AC-SEARCH-002:** An authorized agent can search by exact email without case sensitivity.
- **AC-SEARCH-003:** An authorized agent can search by a partial name of at least three characters.
- **AC-SEARCH-004:** Results support pagination with a maximum page size of 100.
- **AC-SEARCH-005:** Unauthorized requests return `403` and do not query customer data.
- **AC-SEARCH-006:** Every authorized search creates a metadata-only audit event.
- **AC-SEARCH-007:** Invalid or empty criteria return `400`.

## Test Scenarios

See [test-spec.md](test-spec.md) for the scenario mapping.

## Dependencies

- Authentication and authorization service
- Customer database and search index
- Audit service
- Service A observability platform

## Related JIRA Tickets

- `DEMO-102` - Initial exact email search
- `DEMO-120` - Add name and customer ID search
- `DEMO-121` - Add pagination and result limits
- `DEMO-122` - Add audit logging and minimum-query validation

## Related ADRs

- `ADR-002` - Use stable customer IDs

## Open Questions

- [ ] Should fuzzy matching be supported for names in a future version?
