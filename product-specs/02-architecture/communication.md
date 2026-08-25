# Communication

Synchronous calls use JSON over HTTPS. Asynchronous communication uses the fictional OrbitBus.

Dummy event: `customer.registered.v1`.

Every message includes `event_id`, `occurred_at`, `producer`, and `schema_version`.
