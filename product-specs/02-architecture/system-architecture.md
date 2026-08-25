# System Architecture

OrbitDesk uses three fictional services:

- Service A: customer lifecycle.
- Service B: notifications.
- Service C: reporting.

A web client calls Service A over HTTPS. Service A stores customer data and publishes domain events through the message bus.
