---
spec_id: NAV-F01
title: Interactive Folder Tree
service: navigation-shell
version: 1.3
status: DRAFT
owner_team: frontend-product
---

# Interactive Folder Tree

## Objective

Show the `product-specs` folder structure as an expandable, clickable tree in the website.

## Main Flow

1. User opens the app.
2. Folder tree shows root blueprint files and `product-specs`.
3. User expands and collapses folders.
4. User selects a Markdown file.
5. Preview updates to the selected file.

## UI Requirements

- Use folder and file icons.
- Keep active file visually distinct.
- Show nested indentation clearly.
- Preserve the same hierarchy as the source `product-specs` folder.
- Keep the left navigation tree vertically scrollable when the document corpus exceeds the available viewport height.
- Keep sidebar header and search controls visible while only the tree content scrolls.
- Allow users on tablet and mobile viewports to collapse and expand the left navigation area.
- When collapsed on tablet, the left navigation should reduce to a compact toggle rail.
- When collapsed on mobile, the navigation should reduce to a compact top bar so the Markdown preview receives the remaining viewport height.
- When expanded on mobile, the left navigation should occupy the full viewport height so the folder tree has maximum usable scroll space.

## Acceptance Criteria

- `AC-NAV-F01-001`: The tree includes the `product-specs` root.
- `AC-NAV-F01-002`: Folder expansion does not change selected document unless a file is selected.
- `AC-NAV-F01-003`: Keyboard users can move through tree items and open files.
- `AC-NAV-F01-004`: The folder tree remains vertically scrollable on desktop when all root folders are expanded.
- `AC-NAV-F01-005`: The folder tree remains vertically scrollable inside the mobile sidebar area without blocking the Markdown preview.
- `AC-NAV-F01-006`: Tablet users can collapse and expand the left navigation from the sidebar header.
- `AC-NAV-F01-007`: Mobile users can collapse and expand the navigation without losing the selected document.
- `AC-NAV-F01-008`: Collapsed navigation preserves folder expansion and selected-document state.
- `AC-NAV-F01-009`: Expanded mobile navigation uses full viewport height.

## Related Change History

- `change-history.md`
