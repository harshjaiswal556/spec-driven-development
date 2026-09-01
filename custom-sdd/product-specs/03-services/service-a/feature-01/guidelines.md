# Implementation Guidelines: Customer Registration

- Keep validation in the application boundary.
- Use parameterized database queries.
- Do not log raw email addresses.
- Publish the event only after the customer record is committed.
- Preserve the API error contract.
- Add metrics for every terminal outcome.
