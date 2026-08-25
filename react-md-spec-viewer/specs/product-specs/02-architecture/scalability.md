# Scalability

The app should remain responsive for hundreds of Markdown files.

Recommended strategies:

- generate a manifest at build time
- lazy-load document content
- memoize parsed navigation data
- keep search indexing lightweight for the first release
