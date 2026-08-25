---
spec_id: CLI-F01
title: CLI Terminal Navigation
service: interactive-experience
version: 1.0
status: DRAFT
owner_team: frontend-product
---

# CLI Terminal Navigation

## Objective

Provide a terminal-like interface for fast document discovery and navigation.

## Supported Commands

- `help`: list available commands
- `ls`: list current folder contents
- `tree`: show document tree summary
- `open <path-or-title>`: open a matching Markdown file
- `search <term>`: show matching documents
- `clear`: clear terminal output

## Error Scenarios

- Unknown command returns guidance.
- Ambiguous document match returns a short list of candidates.
- No search results returns an empty-results message.

## Acceptance Criteria

- `AC-CLI-F01-001`: Terminal commands update the same selected document as the folder tree.
- `AC-CLI-F01-002`: No command executes shell code.
- `AC-CLI-F01-003`: Help output is available without leaving the current document.
