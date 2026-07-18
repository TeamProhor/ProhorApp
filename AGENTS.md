<!-- BEGIN:nextjs-agent-rules -->

# Next.js & Project Conventions

Read `node_modules/next/dist/docs/` for Next.js breaking changes. Heed deprecation notices.

# Agent Coding Rules

1. **No Code Comments**: CRITICAL. No inline/block/jsdoc comments. Code must be self-documenting.
2. **Package Manager**: CRITICAL. ONLY use `bun` and `bunx`. Never use `npm`, `npx`, `pnpm`, `yarn`.
3. **shadcn/ui**: Follow `.agents/skills/shadcn/SKILL.md`. Use semantic colors (e.g. `bg-primary`), `size-*`, and `cn()`. Avoid arbitrary tailwind colors, `space-y-*`, or `space-x-*`.
4. **Next.js Best Practices**: Follow `.agents/skills/next-best-practices/SKILL.md`. Maintain RSC boundaries. Use modern async patterns (Next.js 15+).
5. **Design System**: Follow `DESIGN.md` & `.agents/skills/stitch-extract-design-md/SKILL.md`. Match exact colors, fonts, and aesthetics.
6. **Architecture**: Dynamically group components by feature/page (e.g., `src/components/[feature]/`). Follow `.agents/skills/stitch-react-components/SKILL.md`. Use `Readonly` TypeScript interfaces named `[ComponentName]Props`.
7. **Premium Aesthetics**: Follow `.agents/skills/impeccable/SKILL.md`. For taste/motion/UI concepts, rely on `.agents/skills/{high-end-visual-design,design-taste-frontend,gpt-taste,imagegen-frontend-web,brandkit,image-to-code,industrial-brutalist-ui,minimalist-ui}/SKILL.md`.
8. **Types**: CRITICAL. Centralize all types in `src/types/index.ts`. No inline types. Follow `.agents/skills/typescript-advanced-types/SKILL.md`.
9. **Supabase**: CRITICAL. Use `src/lib/supabase/{client,middleware,server}.ts`. Follow `.agents/skills/supabase-postgres-best-practices/SKILL.md`.
10. **Data & APIs**: Organically create files by feature (e.g. auth, dashboard, shared) for Server Actions (`src/app/actions/[feature].ts`), APIs (`src/lib/api/[feature].ts`), and TanStack hooks (`src/hooks/[feature].ts`) following `.agents/skills/tanstack-query-best-practices/SKILL.md`.
11. **Performance**: Follow `.agents/skills/vercel-react-best-practices/SKILL.md`. Prevent waterfalls, optimize re-renders.
12. **Animations**: CRITICAL. Use GSAP. Follow `.agents/skills/gsap-{core,react,scrolltrigger,timeline,performance}/SKILL.md`.
13. **Output Enforcement**: Apply `.agents/skills/full-output-enforcement/SKILL.md` to prevent arbitrary truncation.
14. **Translations / i18n**: CRITICAL. Use JSON files (`src/dictionaries/[lang].json`) for all localization. Use the asynchronous `getDictionary(locale)` helper from `src/lib/i18n.ts` in Server Components. Never hardcode translation strings directly in components or `i18n.ts`.
<!-- END:nextjs-agent-rules -->
