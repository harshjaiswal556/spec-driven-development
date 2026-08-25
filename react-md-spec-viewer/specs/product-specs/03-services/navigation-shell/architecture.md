# Navigation Shell Architecture

The shell should use a stable three-region layout: folder tree, document preview, and terminal panel. On smaller screens, navigation may collapse into a drawer or tabbed view.

The sidebar must reserve a bounded scroll region for the folder tree. Header and search controls stay outside that scroll region so large document trees do not push navigation content beyond the viewport.

For tablet and mobile viewports, the sidebar must support a collapsed state. Tablet collapse uses a compact left rail, while mobile collapse uses a compact top bar so the preview can use the remaining viewport space.

When expanded on mobile, the sidebar should occupy the full viewport height and keep the folder tree as the internal scroll region.
