# Test Specification: Customer Search

- **TS-SEARCH-001:** Search by an existing customer ID and verify one matching summary.
- **TS-SEARCH-002:** Search by email using different casing and verify the same result.
- **TS-SEARCH-003:** Search by a partial name of three or more characters.
- **TS-SEARCH-004:** Search with no criteria and verify `400`.
- **TS-SEARCH-005:** Search with a two-character name and verify `400`.
- **TS-SEARCH-006:** Search without `customer:read` and verify `403` with no database query.
- **TS-SEARCH-007:** Request page size 101 and verify `400`.
- **TS-SEARCH-008:** Verify page boundaries and stable ordering.
- **TS-SEARCH-009:** Verify full email addresses are masked in responses and absent from logs.
- **TS-SEARCH-010:** Verify one audit event is created for each authorized search.
- **TS-SEARCH-011:** Simulate a database timeout and verify `503`, metric, and alert behavior.

Coverage mapping: `TS-SEARCH-001` through `TS-SEARCH-003` cover AC-SEARCH-001 through AC-SEARCH-003; the remaining scenarios cover the validation, security, pagination, audit, and failure criteria.
