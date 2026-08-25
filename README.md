# Specification-Driven Development Blueprint

This repository describes how OrbitDesk, a fictional product, can be built with clear requirements, AI-assisted implementation, and human approval.

The examples use dummy data. The process is intended for product owners, analysts, architects, developers, QA, security, and platform teams.

## In Plain Language

Before anyone writes production code, the team agrees what the product must do and how success will be measured. That agreement is written in Markdown files and reviewed by the right people.

AI then uses the approved requirements to create code and tests. Automated checks and human reviewers verify that the result matches the agreement before release.

The basic flow is:

```text
Business need -> approved specification -> AI implementation -> automated checks
-> human review -> release -> production feedback -> specification update
```

## What Each System Does

| System or document             | Purpose                                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------------------- |
| Product owner and stakeholders | Explain the problem, users, desired outcome, and acceptance criteria.                           |
| Markdown specifications        | Describe the current agreed behavior, rules, interfaces, data, and quality requirements.        |
| JIRA                           | Tracks the work, owner, priority, status, and links to the specification and delivery evidence. |
| Git                            | Stores the current files and the exact history of every approved change.                        |
| AI                             | Implements approved behavior, creates or updates tests, and reports assumptions and risks.      |
| Human reviewers                | Approve product intent, architecture, security, tests, and final code quality.                  |

JIRA is the work-management system, not the detailed requirements repository. Code must not silently become the specification.

## How a Requirement Becomes Software

1. A stakeholder describes a business need.
2. The product team writes the expected user behavior and acceptance criteria.
3. The technical team adds API, data, security, performance, observability, and dependency details.
4. Product and technical reviewers approve the specification.
5. JIRA links the implementation ticket to the approved specification.
6. AI receives only the relevant approved context and implements the change.
7. Tests, linting, security, architecture, contract, and performance checks run as required.
8. Human reviewers confirm that the implementation matches the requirement.
9. The change is released and monitored in production.
10. Feedback or incidents result in a new approved specification change.

## Who Is Responsible

| Role                               | Main responsibility                                                                           |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| Product owner                      | What the product should do, why it matters, and how it is accepted.                           |
| Architect                          | Service boundaries, technical design, non-functional requirements, and significant decisions. |
| Developer                          | Technical validation, maintainability, risk assessment, and code review.                      |
| QA                                 | Test coverage, integration behavior, end-to-end validation, and release confidence.           |
| Security, data, and platform teams | Their specialist requirements and validation gates.                                           |
| AI                                 | Implementation execution and test generation within approved constraints.                     |

Teams own services; individual ticket folders are not created by default. A feature can be changed by many JIRA tickets while keeping one current specification.

## Where to Start

- [Document index](00-index.md): overview of every blueprint document.
- [Principles and goals](01-principles-and-goals.md): the rules behind the model.
- [Operating model](02-operating-model.md): the complete lifecycle and approval gates.
- [Specification standard](06-specification-standard.md): what a complete feature requirement contains.
- [Reference folder tree](17-reference-folder-tree.md): the recommended repository layout.
- [Final approved operating model](20-final-approved-operating-model.md): the consolidated target state.
- [Example specification repository](product-specs/README.md): dummy Markdown files following the model.

## Key Terms

- **Specification:** The agreed description of required behavior and quality.
- **Acceptance criterion:** A testable statement that defines when a requirement is satisfied.
- **NFR:** A non-functional requirement such as performance, availability, security, or retention.
- **ADR:** An Architecture Decision Record explaining an important technical decision.
- **Current truth:** The latest approved Markdown files.
- **Historical truth:** The exact files and changes preserved by Git.

## Project Assumptions

- The product is being built from scratch.
- The target scale is approximately 1 million users within one year.
- Approximately 100 developers work in service/domain teams.
- Approximately 150 JIRA tickets may be created each week.
- AI is expected to generate most production code, while humans retain decision-making and approval responsibility.
