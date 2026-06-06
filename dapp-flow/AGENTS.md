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

## Frontend Source Layout

- `app` is only for Next.js route files, layouts, metadata, global CSS, and server entry points.
- Do not build reusable UI directly in `app/page.tsx` or route files.
- Route files should import screen-level compositions from `src/components/pages`.
- Shared visual sections should live in `src/components/organisms`.
- Small repeated UI combinations should live in `src/components/molecules`.
- Primitive UI kit pieces should live in `src/components/atoms`.

## Existing UI Kit

- Use `src/components/atoms/Logo.tsx` for the DappFlow logo.
- Use `src/components/atoms/Button.tsx` for buttons. Supported variants: `primary`, `secondary`, `outlined`.
- Use `src/components/atoms/Typography.tsx` for shared text primitives such as `H1`, `H2`, `H3`, `P`, `SmallText`, and `MonoText`.
- Use `src/components/atoms/Tag.tsx` for bordered informative labels and reward/status tags. Prefer variants over creating another tag component.
- Use `src/components/atoms/Container.tsx` for shared page width and horizontal padding.
- Do not duplicate button, tag, logo, typography, or container styles inside sections.
- `Button` must render Next `Link` for `href` usage and a native `button` only for real button actions.

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

## Visual Direction Rules

- The selected visual direction is the futuristic web3 quest console.
- Keep `app/prototypes/futuristic/page.tsx` as the visual reference while rebuilding/refining the componentized homepage.
- When refactoring the homepage, compare against the reference for colors, font stack, spacing, letter spacing, borders, grid background, and button contrast.
- The main sans-serif font should stay close to the prototype: `Arial, Helvetica, sans-serif`.
- Keep technical labels, counters, and reward chips on `font-mono`.
- Bright button backgrounds such as `df-primary` and `df-accent` must use the dark readable text token `df-on-bright`.

## Creating New Frontend Work

- Before creating a new UI element, check whether an existing atom, molecule, or organism already covers it.
- If an existing primitive covers most of the need, extend it with a conservative variant prop instead of copying styles.
- If a new reusable primitive is needed, place it in `atoms` and update this file when it becomes part of the UI kit.
- If a new section is needed, build it in `organisms` from existing atoms/molecules and import it into a page composition.
- Keep one-off copy/data close to the page or organism; keep reusable styling in atoms/molecules.
