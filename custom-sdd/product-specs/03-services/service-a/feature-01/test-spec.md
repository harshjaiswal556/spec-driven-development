# Test Specification: Customer Registration

- **TS-REG-001:** Register a valid customer and verify `201` plus a persisted record.
- **TS-REG-002:** Register the same email with different casing and verify `409`.
- **TS-REG-003:** Call without permission and verify `403`.
- **TS-REG-004:** Send malformed email and verify `400`.
- **TS-REG-005:** Simulate OrbitBus failure and verify retry/alert behavior.

Each test maps to one or more acceptance criteria in `spec.md`.
