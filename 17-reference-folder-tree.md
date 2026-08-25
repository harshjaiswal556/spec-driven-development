# Reference Folder Tree

This is the consolidated recommended repository for a product with three example services.

Assumption:
- Service A: 4 features, 16 JIRA tickets
- Service B: 7 features, 14 JIRA tickets
- Service C: 6 features, 23 JIRA tickets
- Total: 17 features and 53 JIRA tickets in this example

```text
product-specs/
├── README.md
├── 00-governance/
│   ├── specification-standard.md
│   ├── naming-convention.md
│   ├── definition-of-ready.md
│   ├── definition-of-done.md
│   ├── ai-development-guidelines.md
│   └── review-guidelines.md
│
├── 01-product/
│   ├── product-overview.md
│   ├── user-journeys/
│   └── cross-service-requirements/
│
├── 02-architecture/
│   ├── system-architecture.md
│   ├── service-map.md
│   ├── communication.md
│   ├── scalability.md
│   └── security.md
│
├── 03-services/
│   ├── service-a/
│   │   ├── README.md
│   │   ├── architecture.md
│   │   ├── feature-01/
│   │   │   ├── spec.md
│   │   │   ├── business-rules.md
│   │   │   ├── api.md
│   │   │   ├── data.md
│   │   │   ├── test-spec.md
│   │   │   ├── guidelines.md
│   │   │   └── change-history.md
│   │   ├── feature-02/
│   │   ├── feature-03/
│   │   └── feature-04/
│   │
│   ├── service-b/
│   │   ├── README.md
│   │   ├── architecture.md
│   │   ├── feature-01/
│   │   ├── feature-02/
│   │   ├── feature-03/
│   │   ├── feature-04/
│   │   ├── feature-05/
│   │   ├── feature-06/
│   │   └── feature-07/
│   │
│   └── service-c/
│       ├── README.md
│       ├── architecture.md
│       ├── feature-01/
│       ├── feature-02/
│       ├── feature-03/
│       ├── feature-04/
│       ├── feature-05/
│       └── feature-06/
│
├── 04-cross-service/
│   ├── workflows/
│   ├── events/
│   ├── integrations/
│   └── shared-business-rules/
│
├── 05-adr/
│   ├── ADR-001.md
│   └── ADR-002.md
│
└── 99-archive/
```

## JIRA mapping
Do not create 53 permanent ticket folders just because there are 53 tickets.

Instead:
- feature specs list relevant JIRA tickets
- change-history maps versions to JIRA and Git commits
- JIRA links back to the feature specification
- Git contains exact historical state
