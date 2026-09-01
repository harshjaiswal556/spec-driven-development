# Scalability

Dummy target: support 1,000 requests per second during a five-minute peak while keeping p95 API latency below 400 ms.

The design uses stateless API instances, a relational database with read replicas, and an asynchronous event bus.
