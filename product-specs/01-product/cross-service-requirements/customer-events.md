# Customer Events Requirement

**Requirement ID:** CSR-001

When a customer is registered, Service A must publish `customer.registered.v1` so Service B can send an onboarding message.

Dummy target: event delivery within 10 seconds with at-least-once semantics.
