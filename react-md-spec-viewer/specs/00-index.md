# Project Specification Index

## Purpose

Define a React.js website that turns the existing Markdown blueprint and `product-specs` folder into an interactive reading and exploration experience.

## Project Goals

- Display all existing top-level Markdown documents from `00-index.md` through `20-final-approved-operating-model.md`.
- Display all Markdown content from the existing `product-specs` tree.
- Provide an interactive folder tree that preserves the original `product-specs` hierarchy.
- Ensure the left navigation tree remains scrollable when the available viewport is smaller than the full folder structure.
- Allow the left navigation to collapse and expand on tablet and mobile viewports.
- Use full viewport height for the expanded mobile left navigation.
- Provide a Markdown preview panel with readable typography, headings, tables, code blocks, and links.
- Provide a CLI-inspired command panel for quick navigation and document discovery.
- Allow the terminal panel to collapse, and keep terminal output scrollable without visible scrollbars.
- Keep the UI clean, simple, fast, and focused on reading specs.
- Keep dependencies, generated content, build output, local environment files, logs, and editor files out of Git.

## Specification Map

- `product-specs/00-governance/` defines standards, readiness, done criteria, naming, review, and AI guidance.
- `product-specs/01-product/` defines the user-facing product intent and journeys.
- `product-specs/02-architecture/` defines frontend architecture and technical constraints.
- `product-specs/03-services/` defines logical frontend services and their features.
- `product-specs/04-cross-service/` defines workflows and cross-cutting rules.
- `product-specs/05-adr/` records architectural decisions.
- `product-specs/templates/` contains templates for future feature specs, ADRs, and changes.
## Repository Hygiene

The React project must include a `.gitignore` file. It should ignore `node_modules/`, `dist/`, generated document modules, local environment files, logs, caches, coverage output, and local editor or operating-system files.
