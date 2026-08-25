---
spec_id: CLI-F01
title: CLI Terminal Navigation
service: interactive-experience
version: 1.1
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

## UI Requirements

- Terminal panel must be collapsible from its header.
- Collapsing the terminal must preserve current terminal history, current working directory, and input state.
- Terminal output must remain scrollable when expanded.
- Terminal output scrollbars must be visually hidden while preserving mouse wheel, trackpad, and keyboard scrolling.

## Error Scenarios

- Unknown command returns guidance.
- Ambiguous document match returns a short list of candidates.
- No search results returns an empty-results message.

## Acceptance Criteria

- `AC-CLI-F01-001`: Terminal commands update the same selected document as the folder tree.
- `AC-CLI-F01-002`: No command executes shell code.
- `AC-CLI-F01-003`: Help output is available without leaving the current document.
- `AC-CLI-F01-004`: User can collapse and expand the terminal panel from the terminal header.
- `AC-CLI-F01-005`: Terminal output remains scrollable without showing a visible scrollbar.

## Related Change History

- `change-history.md`
