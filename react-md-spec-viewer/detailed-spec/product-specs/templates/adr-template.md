---
spec_id: MIRROR-TEMPLATES-ADR-TEMPLATE-MD
title: ADR-000: Dummy Decision Title
source_path: product-specs/templates/adr-template.md
version: 1.0
status: DRAFT
owner_team: frontend-product
---

# ADR-000: Dummy Decision Title

## Purpose

This file mirrors the original source path $displayPath for the React Markdown Spec Viewer specification set.

## Website Requirement

The website must make this Markdown document discoverable through the interactive product-specs folder tree and render the original document content in the Markdown preview panel.

## Navigation Requirement

The displayed folder hierarchy must preserve this file's original parent folders. Selecting this file from the tree, search results, Markdown links, or CLI command interface must open the same preview state.

## Content Requirement

The application must render the source Markdown content as authored. This mirror file is a planning artifact and must not replace the original source document body.

## Acceptance Criteria

- AC-MIRROR-TEMPLATES-ADR-TEMPLATE-MD-001: The file appears at $displayPath in the interactive tree.
- AC-MIRROR-TEMPLATES-ADR-TEMPLATE-MD-002: Opening the file renders the original Markdown content.
- AC-MIRROR-TEMPLATES-ADR-TEMPLATE-MD-003: The visible active path matches the source path.
