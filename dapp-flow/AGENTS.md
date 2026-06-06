<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# DappFlow Project Rules

## Component Architecture

This project uses Atomic Design inside `src/components`.

- `atoms`: smallest UI primitives. Examples: logo, button, typography, tag.
- `molecules`: small reusable combinations of atoms. Examples: nav links, quest item, stats row.
- `organisms`: complete page sections. Examples: header, footer, hero, quest console.
- `pages`: screen-level compositions imported by route files in `app`.

## Development Rules

- Keep `app` focused on Next.js route files, layouts, metadata, and server entry points.
- Store UI components in `src/components`.
- Build new sections from existing atoms and molecules before creating another component.
- If a new reusable UI element appears, extract it into the smallest useful Atomic Design layer.
- Do not duplicate button, tag, logo, typography, or card styles inside sections.
- Use `src/components/atoms/Container.tsx` for shared page width and horizontal padding instead of repeating `mx-auto`, `max-w-*`, `px-*`, or responsive side padding in sections.
- Add colors and shared visual tokens to `app/globals.css` first, then consume them with Tailwind classes.
- Keep app-wide background and grid styling on the root layout via the `.app-shell` class in `app/globals.css`; do not duplicate page backgrounds unless a route intentionally needs a different visual surface.
- Prefer variant props for small visual differences instead of creating near-identical components.
- Keep atoms feature-agnostic. Product-specific copy and data should live in molecules, organisms, or pages.
- Keep page components composition-focused. Data fetching can happen in Next route files and be passed down.
- Continue updating this file when project architecture or component rules change.
