# Golden Paths

Reusable implementation patterns for both humans and AI:

- REST API with standard errors
- Database entity and migration
- Versioned event and consumer
- Authentication and authorization
- Unit, integration, contract, and E2E tests
- Structured logging, metrics, and tracing
- Retry and idempotency handling

Dummy golden path: `POST /v1/customers` uses the standard error envelope and emits a versioned event after commit.
