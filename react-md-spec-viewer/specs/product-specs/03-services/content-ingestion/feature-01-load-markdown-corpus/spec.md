---
spec_id: CONTENT-F01
title: Load Markdown Corpus
service: content-ingestion
version: 1.0
status: DRAFT
owner_team: frontend-product
---

# Load Markdown Corpus

## Objective

Load all root blueprint Markdown files and all Markdown files under `product-specs` so they can be displayed in the app.

## Actors

- Reader
- React app
- Content manifest

## Preconditions

- Markdown source files are present in the project or copied into the app content folder.
- The content manifest can enumerate every included file.

## Main Flow

1. App starts.
2. App loads document metadata.
3. App builds the visible folder tree.
4. User selects a document.
5. App loads the document content.
6. App sends the content to the Markdown preview.

## Error Scenarios

- Missing document shows a clear not-found state.
- Parse failure shows raw text fallback where safe.
- Empty document shows an empty-content state.

## Acceptance Criteria

- `AC-CONTENT-F01-001`: Every `.md` file in the approved content set is discoverable.
- `AC-CONTENT-F01-002`: Document title uses frontmatter title, H1, or filename fallback.
- `AC-CONTENT-F01-003`: Selecting a file loads the original Markdown content.

## Open Questions

- [ ] Should source Markdown be copied into the React project or loaded from an adjacent repository path during development?
