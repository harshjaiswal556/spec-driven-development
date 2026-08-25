import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  Folder,
  FolderOpen,
  Search,
  Terminal,
} from 'lucide-react';
import { documents, generatedAt } from './generated/docs.js';
import './styles.css';

const byPath = new Map(documents.map((doc) => [doc.path, doc]));
const initialPath = documents.find((doc) => doc.path === '00-index.md')?.path ?? documents[0]?.path;

function buildTree(docs) {
  const root = { name: 'workspace', path: '', type: 'folder', children: new Map() };

  for (const doc of docs) {
    const parts = doc.path.split('/');
    let node = root;

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1;
      const childPath = parts.slice(0, index + 1).join('/');

      if (!node.children.has(part)) {
        node.children.set(part, {
          name: part,
          path: childPath,
          type: isFile ? 'file' : 'folder',
          doc: isFile ? doc : null,
          children: new Map(),
        });
      }

      node = node.children.get(part);
    });
  }

  function sortNode(node) {
    const children = [...node.children.values()]
      .map(sortNode)
      .sort((a, b) => {
        if (a.type !== b.type) return a.type === 'folder' ? -1 : 1;
        return a.name.localeCompare(b.name, undefined, { numeric: true });
      });
    return { ...node, children };
  }

  return sortNode(root);
}

function collectMatches(query) {
  const term = query.trim().toLowerCase();
  if (!term) return [];

  return documents
    .filter((doc) => {
      return (
        doc.path.toLowerCase().includes(term) ||
        doc.title.toLowerCase().includes(term) ||
        doc.content.toLowerCase().includes(term)
      );
    })
    .slice(0, 12);
}

function TreeNode({ node, activePath, onSelect, depth = 0 }) {
  const [open, setOpen] = useState(depth < 1 || node.path === 'product-specs');

  if (node.type === 'file') {
    const active = node.path === activePath;
    return (
      <button
        className={`tree-row file-row ${active ? 'active' : ''}`}
        style={{ '--depth': depth }}
        onClick={() => onSelect(node.path)}
        title={node.path}
      >
        <FileText size={15} />
        <span>{node.name}</span>
      </button>
    );
  }

  return (
    <div>
      {node.path && (
        <button
          className="tree-row folder-row"
          style={{ '--depth': depth }}
          onClick={() => setOpen((value) => !value)}
          title={node.path}
        >
          {open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
          {open ? <FolderOpen size={16} /> : <Folder size={16} />}
          <span>{node.name}</span>
        </button>
      )}
      {(open || !node.path) && (
        <div>
          {node.children.map((child) => (
            <TreeNode
              key={child.path}
              node={child}
              activePath={activePath}
              onSelect={onSelect}
              depth={node.path ? depth + 1 : depth}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MarkdownPreview({ document, onSelect }) {
  if (!document) {
    return (
      <main className="preview empty-state">
        <FileText size={40} />
        <h1>No document selected</h1>
      </main>
    );
  }

  return (
    <main className="preview">
      <div className="doc-chrome">
        <span>{document.sourceGroup}</span>
        <strong>{document.path}</strong>
      </div>
      <article className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a({ href, children, ...props }) {
              const resolved = resolveLocalHref(document.path, href);
              if (resolved && byPath.has(resolved)) {
                return (
                  <button className="inline-link" onClick={() => onSelect(resolved)}>
                    {children}
                  </button>
                );
              }
              return (
                <a href={href} target="_blank" rel="noreferrer" {...props}>
                  {children}
                </a>
              );
            },
          }}
        >
          {document.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}

function resolveLocalHref(currentPath, href = '') {
  if (!href.endsWith('.md') && !href.includes('.md#')) return null;
  const [filePart] = href.split('#');
  if (/^https?:\/\//.test(filePart)) return null;

  const base = currentPath.includes('/') ? currentPath.split('/').slice(0, -1).join('/') : '';
  const raw = filePart.startsWith('/') ? filePart.slice(1) : [base, filePart].filter(Boolean).join('/');
  const stack = [];

  for (const part of raw.split('/')) {
    if (!part || part === '.') continue;
    if (part === '..') stack.pop();
    else stack.push(part);
  }

  return stack.join('/');
}

function TerminalPanel({ activePath, onSelect, collapsed, onToggleCollapsed }) {
  const [input, setInput] = useState('');
  const [cwd, setCwd] = useState('');
  const [lines, setLines] = useState([
    'Spec shell ready. Type help, tree, ls, open <path>, search <term>, or clear.',
  ]);

  function print(nextLines) {
    setLines((current) => [...current, ...nextLines].slice(-80));
  }

  function runCommand(raw) {
    const command = raw.trim();
    if (!command) return;

    print([`> ${command}`]);

    const [verb, ...rest] = command.split(/\s+/);
    const arg = rest.join(' ');

    if (verb === 'clear') {
      setLines([]);
      return;
    }

    if (verb === 'help') {
      print(['help | tree | ls [path] | cd <folder> | open <path-or-title> | search <term> | clear']);
      return;
    }

    if (verb === 'tree') {
      print([
        `${documents.length} Markdown files indexed`,
        'blueprint/',
        'product-specs/',
        `active: ${activePath}`,
      ]);
      return;
    }

    if (verb === 'cd') {
      const next = normalizePath(cwd, arg);
      const hasFolder = documents.some((doc) => doc.path.startsWith(next ? `${next}/` : ''));
      if (hasFolder) {
        setCwd(next);
        print([`cwd: ${next || '/'}`]);
      } else {
        print([`folder not found: ${arg}`]);
      }
      return;
    }

    if (verb === 'ls') {
      const target = normalizePath(cwd, arg);
      const listing = listFolder(target);
      print(listing.length ? listing : [`empty or not found: ${target || '/'}`]);
      return;
    }

    if (verb === 'open') {
      const match = findDocument(arg, cwd);
      if (match.status === 'ok') {
        onSelect(match.doc.path);
        print([`opened ${match.doc.path}`]);
      } else {
        print(match.lines);
      }
      return;
    }

    if (verb === 'search') {
      const matches = collectMatches(arg);
      print(matches.length ? matches.map((doc) => `${doc.path} - ${doc.title}`) : [`no results for "${arg}"`]);
      return;
    }

    print([`unknown command: ${verb}`, 'type help for available commands']);
  }

  return (
    <section className={`terminal-panel ${collapsed ? 'collapsed' : ''}`} aria-label="Command terminal">
      <div className="panel-title">
        <div>
          <Terminal size={16} />
          <span>terminal</span>
        </div>
        <button
          type="button"
          className="icon-button"
          onClick={onToggleCollapsed}
          aria-expanded={!collapsed}
          aria-label={collapsed ? 'Expand terminal' : 'Collapse terminal'}
          title={collapsed ? 'Expand terminal' : 'Collapse terminal'}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      {!collapsed && (
        <>
          <div className="terminal-output">
            {lines.map((line, index) => (
              <div key={`${line}-${index}`}>{line}</div>
            ))}
          </div>
          <form
            className="terminal-input"
            onSubmit={(event) => {
              event.preventDefault();
              runCommand(input);
              setInput('');
            }}
          >
            <span>{cwd || '~'}</span>
            <input value={input} onChange={(event) => setInput(event.target.value)} aria-label="Terminal command" />
          </form>
        </>
      )}
    </section>
  );
}

function normalizePath(cwd, value = '') {
  const raw = value.trim();
  if (!raw) return cwd;
  const combined = raw.startsWith('/') ? raw.slice(1) : [cwd, raw].filter(Boolean).join('/');
  const stack = [];
  for (const part of combined.split('/')) {
    if (!part || part === '.') continue;
    if (part === '..') stack.pop();
    else stack.push(part);
  }
  return stack.join('/');
}

function listFolder(folder) {
  const prefix = folder ? `${folder}/` : '';
  const names = new Map();

  for (const doc of documents) {
    if (!doc.path.startsWith(prefix)) continue;
    const rest = doc.path.slice(prefix.length);
    if (!rest) continue;
    const [first, ...remaining] = rest.split('/');
    names.set(first, remaining.length ? `${first}/` : first);
  }

  return [...names.values()].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function findDocument(query, cwd) {
  const normalized = normalizePath(cwd, query);
  if (byPath.has(normalized)) return { status: 'ok', doc: byPath.get(normalized) };

  const term = query.trim().toLowerCase();
  const matches = documents.filter((doc) => {
    return doc.path.toLowerCase().includes(term) || doc.title.toLowerCase().includes(term);
  });

  if (matches.length === 1) return { status: 'ok', doc: matches[0] };
  if (matches.length > 1) {
    return {
      status: 'ambiguous',
      lines: ['multiple matches:', ...matches.slice(0, 8).map((doc) => doc.path)],
    };
  }
  return { status: 'missing', lines: [`document not found: ${query}`] };
}

function SearchBox({ onSelect }) {
  const [query, setQuery] = useState('');
  const matches = useMemo(() => collectMatches(query), [query]);

  return (
    <section className="search-panel">
      <div className="search-input">
        <Search size={16} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search docs"
          aria-label="Search documents"
        />
      </div>
      {query && (
        <div className="search-results">
          {matches.map((doc) => (
            <button key={doc.path} onClick={() => onSelect(doc.path)} title={doc.path}>
              <strong>{doc.title}</strong>
              <span>{doc.path}</span>
            </button>
          ))}
          {!matches.length && <p>No matches.</p>}
        </div>
      )}
    </section>
  );
}

function Outline({ document }) {
  return (
    <section className="outline-panel">
      <div className="panel-title">
        <FileText size={16} />
        <span>outline</span>
      </div>
      <div className="outline-list">
        {document?.headings?.slice(0, 18).map((heading, index) => (
          <div key={`${heading.text}-${index}`} style={{ '--depth': heading.depth - 1 }}>
            {heading.text}
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [activePath, setActivePath] = useState(initialPath);
  const [navCollapsed, setNavCollapsed] = useState(false);
  const [terminalCollapsed, setTerminalCollapsed] = useState(false);
  const tree = useMemo(() => buildTree(documents), []);
  const activeDocument = byPath.get(activePath);

  return (
    <div className={`app-shell ${navCollapsed ? 'nav-collapsed' : ''}`}>
      <aside className="sidebar">
        <header>
          <div>
            <p>react-md-spec-viewer</p>
            <h1>Spec Browser</h1>
          </div>
          <span>{documents.length} docs</span>
          <button
            type="button"
            className="icon-button nav-toggle"
            onClick={() => setNavCollapsed((value) => !value)}
            aria-expanded={!navCollapsed}
            aria-label={navCollapsed ? 'Expand navigation' : 'Collapse navigation'}
            title={navCollapsed ? 'Expand navigation' : 'Collapse navigation'}
          >
            {navCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </header>
        <SearchBox onSelect={setActivePath} />
        <nav className="tree-panel" aria-label="Document tree">
          <TreeNode node={tree} activePath={activePath} onSelect={setActivePath} />
        </nav>
      </aside>

      <MarkdownPreview document={activeDocument} onSelect={setActivePath} />

      <aside className={`right-rail ${terminalCollapsed ? 'terminal-collapsed' : ''}`}>
        <Outline document={activeDocument} />
        <TerminalPanel
          activePath={activePath}
          onSelect={setActivePath}
          collapsed={terminalCollapsed}
          onToggleCollapsed={() => setTerminalCollapsed((value) => !value)}
        />
        <footer>Generated {new Date(generatedAt).toLocaleString()}</footer>
      </aside>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
