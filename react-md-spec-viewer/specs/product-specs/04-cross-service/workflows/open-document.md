# Open Document Workflow

## Flow

1. User selects a file from the folder tree, command terminal, search result, or Markdown link.
2. App resolves the requested path.
3. App loads the Markdown content.
4. App updates active path, preview content, and navigation state.

## Acceptance Criteria

- `AC-WF-OPEN-001`: All navigation entry points produce the same active document state.
- `AC-WF-OPEN-002`: Missing paths show a not-found state.
