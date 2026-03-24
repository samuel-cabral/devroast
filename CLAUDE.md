# devroast

App que "roasts" (critica com humor) código submetido pelo usuário, dando uma nota e análise detalhada. Construído com Next.js 16, React 19, Tailwind CSS 4, TypeScript.

@AGENTS.md

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Estilização**: Tailwind CSS 4 + `tailwind-variants` (tv)
- **Linter**: Biome (`pnpm run lint:fix`)
- **Fonte**: JetBrains Mono (mono), sistema (sans)
- **Componentes base**: `@base-ui-components/react`
- **Syntax highlight**: Shiki (tema vesper)

## Padrões globais

- **Server Components por padrão**. `"use client"` só quando necessário (estado, handlers, hooks).
- **Named exports apenas** — nunca `export default` (exceto pages do Next.js).
- **Composition pattern** — componentes compostos usam sub-componentes (Root, Header, Content) em vez de props como `title`, `description`, `label`.
- **Variantes com `tv()`** — não usar `twMerge` manualmente.
- **Padrões de componentes UI** detalhados em `src/components/ui/CLAUDE.md`.

## Design system

- Cores: `bg-page`, `bg-surface`, `bg-elevated`, `bg-input`, `text-primary`, `text-secondary`, `text-tertiary`, `border-primary`, `accent-green`, `accent-red`, `accent-amber`, `accent-cyan`
- Spacing tokens: `xs` (4px), `sm` (8px), `md` (16px), `lg` (24px), `xl` (40px)
- Fontes: `font-mono` (JetBrains Mono), `font-sans` (sistema)

## Estrutura

```
src/
├── app/                  # Pages e wrappers client
├── components/ui/        # Primitivos reutilizáveis (CLAUDE.md com padrões)
```

## Scripts

- `pnpm run dev` — dev server com Turbopack
- `pnpm run build` — build de produção
- `pnpm run lint:fix` — lint + auto-fix com Biome
