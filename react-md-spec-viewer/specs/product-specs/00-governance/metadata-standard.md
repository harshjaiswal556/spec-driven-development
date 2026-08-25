# Metadata Standard

Each indexed document should expose:

- `path`
- `title`
- `category`
- `headings`
- `source_group`
- `last_indexed_at` when generated dynamically

Frontmatter in source Markdown should be parsed when present and ignored gracefully when absent.
