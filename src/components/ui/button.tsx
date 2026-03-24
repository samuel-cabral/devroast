import { type ComponentProps, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
	base: "inline-flex items-center justify-center gap-2 font-mono transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
	variants: {
		variant: {
			primary:
				"bg-accent-green text-bg-page font-medium enabled:hover:brightness-110",
			secondary:
				"border border-border-primary text-text-primary bg-transparent enabled:hover:bg-bg-elevated",
			ghost:
				"border border-border-primary text-text-secondary bg-transparent enabled:hover:text-text-primary enabled:hover:bg-bg-elevated",
			danger:
				"bg-accent-red text-text-primary font-medium enabled:hover:brightness-110",
		},
		size: {
			sm: "px-3 py-1.5 text-xs",
			md: "px-6 py-2.5 text-[13px]",
			lg: "px-8 py-3 text-sm",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = ComponentProps<"button"> & ButtonVariants;

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
