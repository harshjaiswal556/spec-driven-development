# Implementation Guidelines: Customer Search

- Enforce authorization before accessing the search index.
- Use parameterized queries and bounded result sizes.
- Normalize search input consistently with customer registration.
- Prefer indexed fields and preserve deterministic ordering.
- Mask email addresses at the response boundary.
- Do not log raw search criteria when they contain an email address.
- Emit the audit event only after authorization succeeds.
- Treat the customer profile store as the source of truth.
- Preserve the `400`, `403`, and `503` API contract.
