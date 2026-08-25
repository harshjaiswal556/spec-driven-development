# Product Specs

This folder mirrors the shape of the original `product-specs` repository while describing the React Markdown Spec Viewer product.

The website must expose a visible, interactive `product-specs` folder tree in the UI. Selecting any Markdown file opens its rendered preview while preserving enough path context for users to understand where they are.

## Primary Experience

```text
left panel: interactive folder tree
center panel: Markdown preview
bottom or side panel: CLI-style command input and output
```

## Content Scope

The application must include:

- all root blueprint Markdown files
- all files under the original `product-specs` folder
- metadata for path, title, section headings, status, and related links where available
