# Business Rules: Customer Search

- **BR-SEARCH-001:** At least one of `customer_id`, `email`, or `name` is required.
- **BR-SEARCH-002:** Email matching is case-insensitive and exact.
- **BR-SEARCH-003:** Name search requires at least three characters and supports partial matching.
- **BR-SEARCH-004:** Customer ID search is exact and takes precedence when supplied.
- **BR-SEARCH-005:** Results are ordered by `customer_id` ascending for name searches.
- **BR-SEARCH-006:** A request returns no more than 100 records.
- **BR-SEARCH-007:** Full email addresses are never returned to the caller or written to logs.
- **BR-SEARCH-008:** Every authorized search produces one metadata-only audit event.
- **BR-SEARCH-009:** An unauthorized request must not query customer data.
