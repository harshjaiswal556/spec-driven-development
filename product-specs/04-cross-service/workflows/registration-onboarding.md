# Registration Onboarding Workflow

**Workflow ID:** WF-001

Service A creates a customer, publishes `customer.registered.v1`, and Service B sends the dummy welcome email. Service C records the event for reporting.

Failure policy: consumers retry three times, then write to a dead-letter queue.
