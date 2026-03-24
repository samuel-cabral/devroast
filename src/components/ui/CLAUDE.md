# UI Components — Padrões

## Estrutura de um componente

Cada componente segue esta estrutura, nesta ordem:

1. Imports
2. Variantes (`tv()` do `tailwind-variants`)
3. Types (derivados das variantes + props nativas do HTML)
4. Componente com `forwardRef`
5. `displayName`
6. Named exports (nunca `export default`)

## Regras

### Variantes com `tailwind-variants`

- Usar `tv()` para definir `base`, `variants` e `defaultVariants`.
- Passar `className` diretamente na chamada da variant: `button({ variant, size, className })`.
- **Não usar `twMerge` manualmente** — o `tailwind-variants` já faz o merge internamente.

### Props nativas do HTML

- Sempre estender as props nativas do elemento via `ComponentProps<"element">`.
- Interseccionar com `VariantProps<typeof variante>` para tipar as variantes.

```tsx
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;
```

### Server Components

- Por padrão, componentes são **Server Components** (sem `"use client"`).
- Usar `"use client"` apenas quando o componente precisa de interatividade (estado, event handlers, hooks de browser).
- Server Components não usam `forwardRef` nem `displayName`.

### Ref forwarding (Client Components)

- Usar `forwardRef` para permitir que o consumidor acesse a ref do elemento.
- Definir `displayName` após o componente.

### Exports

- Sempre usar **named exports**: `export { Component, type ComponentProps, componentVariants }`.
- Exportar: o componente, o type das props, e a função de variantes (para reuso em composições).
- **Nunca** usar `export default`.

### Estilização

- Usar apenas classes do Tailwind CSS definidas no design system (`globals.css`).
- Cores do design system: `bg-page`, `bg-surface`, `bg-elevated`, `bg-input`, `text-primary`, `text-secondary`, `text-tertiary`, `border-primary`, `accent-green`, `accent-red`, `accent-amber`, `accent-cyan`.
- Fontes: `font-mono` (JetBrains Mono), `font-sans` (sistema). Não usar `font-primary`/`font-secondary`.
- Spacing tokens (definidos como `--spacing-*` no CSS, usados sem o prefixo `spacing-` nas classes Tailwind):
  - `xs` (4px), `sm` (8px), `md` (16px), `lg` (24px), `xl` (40px)
  - Exemplo: `p-xl` = 40px, `gap-md` = 16px, `mb-lg` = 24px

## Referência: Button

```tsx
import { type ComponentProps, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "...",
  variants: {
    variant: { primary: "...", secondary: "...", ghost: "..." },
    size: { sm: "...", md: "...", lg: "..." },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={button({ variant, size, className })}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, type ButtonProps, button };
```
