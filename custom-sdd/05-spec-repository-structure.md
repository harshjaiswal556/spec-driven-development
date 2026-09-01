# Specification Repository Structure

## 1. Recommended repository

```text
product-specs/
├── README.md
├── 00-governance/
├── 01-product/
├── 02-architecture/
├── 03-services/
├── 04-cross-service/
├── 05-adr/
└── 99-archive/
```

## 2. Service structure

```text
03-services/
├── service-a/
│   ├── README.md
│   ├── architecture.md
│   ├── feature-01/
│   ├── feature-02/
│   ├── feature-03/
│   └── feature-04/
├── service-b/
│   ├── README.md
│   ├── architecture.md
│   ├── feature-01/
│   ├── ...
│   └── feature-07/
└── service-c/
    ├── README.md
    ├── architecture.md
    ├── feature-01/
    ├── ...
    └── feature-06/
```

## 3. Feature structure

Recommended default:

```text
feature-01/
├── spec.md
├── business-rules.md
├── api.md
├── data.md
├── test-spec.md
├── guidelines.md
└── change-history.md
```

## 4. Why feature is the folder boundary
Features are long-lived product concepts. JIRA tickets are execution units and may modify the same feature repeatedly.

Do not create one permanent folder for every JIRA ticket by default.

## 5. Additional top-level areas
- `00-governance`: standards and policies
- `01-product`: product intent and journeys
- `02-architecture`: system-level architecture
- `04-cross-service`: workflows/events/integrations crossing service boundaries
- `05-adr`: architecture decisions
- `99-archive`: retired specifications

## 6. Repository design principle
Organize Markdown for both humans and AI retrieval. The hierarchy should allow an agent to find a feature's current truth without scanning unrelated services.
