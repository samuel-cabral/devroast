import { type ComponentProps, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const diffLine = tv({
	slots: {
		base: "flex items-center gap-sm px-md py-2 font-mono text-[13px]",
		prefix: "select-none",
		code: "",
	},
	variants: {
		type: {
			added: {
				base: "bg-[#0A1A0F]",
				prefix: "text-accent-green",
				code: "text-text-primary",
			},
			removed: {
				base: "bg-[#1A0A0A]",
				prefix: "text-accent-red",
				code: "text-text-secondary",
			},
			context: {
				base: "",
				prefix: "text-text-tertiary",
				code: "text-text-secondary",
			},
		},
	},
	defaultVariants: {
		type: "context",
	},
});

const prefixMap = {
	added: "+",
	removed: "-",
	context: " ",
} as const;

type DiffLineVariants = VariantProps<typeof diffLine>;

type DiffLineProps = ComponentProps<"div"> & DiffLineVariants;

const DiffLine = forwardRef<HTMLDivElement, DiffLineProps>(
	({ className, type = "context", children, ...props }, ref) => {
		const styles = diffLine({ type });
		return (
			<div ref={ref} className={styles.base({ className })} {...props}>
				<span className={styles.prefix()}>{prefixMap[type ?? "context"]}</span>
				<span className={styles.code()}>{children}</span>
			</div>
		);
	},
);

DiffLine.displayName = "DiffLine";

export { DiffLine, type DiffLineProps, diffLine };
