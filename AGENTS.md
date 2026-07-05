<!-- BEGIN:nextjs-agent-rules -->

# Next.js and Project Conventions

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Agent Behavior and Coding Rules

## 1. No Code Comments
- **CRITICAL**: Do NOT include any comments (inline comments, block comments, jsdoc, or documentation comments) in any code files you write or modify.
- All code must be self-documenting, clean, and free of commented-out code or explanatory comments.

## 2. Package Manager
- **CRITICAL**: Do NOT use `npm`, `npx`, `pnpm`, `pnpx`, `yarn`, or `dlx`.
- ONLY use `bun` and `bunx` for installing dependencies, running scripts, and executing CLI commands (e.g. use `bunx --bun shadcn@latest` instead of `npx shadcn@latest`).

## 3. shadcn/ui Best Practices
- Follow [.agents/skills/shadcn/SKILL.md](file:///workspaces/codespaces-blank/ProhorApp/.agents/skills/shadcn/SKILL.md) strictly.
- Always use existing components and compose them (e.g., `FieldGroup` + `Field` for form layouts).
- Use semantic colors and tokens (e.g. `bg-primary`, `text-muted-foreground`), not raw/arbitrary hex or Tailwind colors.
- Use `size-*` instead of `w-* h-*` when width and height are equal.
- Use `cn()` for conditional styles, and avoid `space-y-*` or `space-x-*` (use `flex` and `gap-*` instead).

## 4. Next.js Best Practices
- Follow [.agents/skills/next-best-practices/SKILL.md](file:///workspaces/codespaces-blank/ProhorApp/.agents/skills/next-best-practices/SKILL.md).
- Adhere to the file conventions, proper RSC (React Server Component) boundaries, and modern async patterns (e.g. async `params` and `searchParams` in Next.js 15+).
- Use `next/image` and `next/font` optimization patterns.

## 5. Design System Alignment
- Follow the design system outlined in [DESIGN.md](file:///workspaces/codespaces-blank/ProhorApp/DESIGN.md) by leveraging instructions in [.agents/skills/stitch-extract-design-md/SKILL.md](file:///workspaces/codespaces-blank/ProhorApp/.agents/skills/stitch-extract-design-md/SKILL.md).
- Maintain the visual tone, color palette (e.g., warm cream canvas, dark navy surfaces, warm coral CTAs), typography (serif display headlines, StyreneB/Inter sans-serif body), and component aesthetics specified.

## 6. Directory Structure & Component Architecture
- Organize component types properly into `src/components/landing/`, `src/components/shared/`, and `src/components/auth/` matching the design guidelines.
- Follow [.agents/skills/stitch-react-components/SKILL.md](file:///workspaces/codespaces-blank/ProhorApp/.agents/skills/stitch-react-components/SKILL.md).
- Extract reusable UI patterns into separate files, ensure logic isolation via hooks, and decouple static data.
- Ensure every component has a `Readonly` TypeScript interface named `[ComponentName]Props` for type safety.

## 7. Premium Visual Aesthetics & Impeccable Design
- Refer to [.agents/skills/impeccable/SKILL.md](file:///workspaces/codespaces-blank/ProhorApp/.agents/skills/impeccable/SKILL.md) for polish, layout, motion, micro-interactions, responsive behavior, accessibility, and high-fidelity styling details.

## 8. Centralized Types
- **CRITICAL**: Use [src/types/index.ts](file:///workspaces/codespaces-blank/ProhorApp/src/types/index.ts) for all types and interface definitions. Do not define types inline or in separate local type files.

## 9. Supabase Integration & Connections
- **CRITICAL**: Use the established Supabase connection utilities and do not create ad-hoc client instances:
  - For client-side components and client-side code, import from [src/lib/supabase/client.ts](file:///workspaces/codespaces-blank/ProhorApp/src/lib/supabase/client.ts).
  - For middleware-level auth or routing, use [src/lib/supabase/middleware.ts](file:///workspaces/codespaces-blank/ProhorApp/src/lib/supabase/middleware.ts).
  - For Server Components, route handlers, and server-side contexts, use [src/lib/supabase/server.ts](file:///workspaces/codespaces-blank/ProhorApp/src/lib/supabase/server.ts).
- Follow [.agents/skills/supabase-postgres-best-practices/SKILL.md](file:///workspaces/codespaces-blank/ProhorApp/.agents/skills/supabase-postgres-best-practices/SKILL.md) for database optimization, query performance, locking mechanisms, schema designs, and Row-Level Security (RLS) configuration.

## 10. Data Fetching, APIs, & Server Actions
- **Server Actions**: Define and implement Server Actions in `src/app/actions/{auth,etc}.ts` for mutative operations or server-only procedures. Authenticate all server actions thoroughly as detailed in Vercel React Best Practices.
- **APIs**: Implement REST or direct data endpoint APIs in `src/lib/api/{auth,etc}.ts` to keep clean separation between presentation and data layer.
- **TanStack React Query**:
  - Implement caching, fetching, and query states in custom React hooks under `src/hooks/{auth,etc}.ts` leveraging TanStack Query.
  - Follow [.agents/skills/tanstack-query-best-practices/SKILL.md](file:///workspaces/codespaces-blank/ProhorApp/.agents/skills/tanstack-query-best-practices/SKILL.md) strictly.
  - Always use arrays for query keys (hierarchical organization like entity -> id -> filters), factory pattern for query keys, configure appropriate `staleTime`, and use targeted query invalidation after mutations (`mut-invalidate-queries`).
  - Use `useMutation` for mutations, handle loading and error states gracefully, and use `HydrationBoundary` where SSR/RSC integration is required.

## 11. React & Next.js Performance Optimization
- Follow [.agents/skills/vercel-react-best-practices/SKILL.md](file:///workspaces/codespaces-blank/ProhorApp/.agents/skills/vercel-react-best-practices/SKILL.md) for all components, data fetching, and state management.
- Eliminate request waterfalls by initiating promises early, using `Promise.all()` for parallel fetching, and loading conditional components dynamically.
- Optimize client-side re-renders (e.g. defer state reads, derive state during rendering, split combined hooks).

<!-- END:nextjs-agent-rules -->