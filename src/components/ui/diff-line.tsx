import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const diffLine = tv({
	base: "flex font-mono text-xs leading-tight",
	variants: {
		type: {
			added: "text-accent-green",
			removed: "text-accent-red",
			context: "text-text-secondary",
		},
	},
	defaultVariants: {
		type: "context",
	},
});

type DiffLineVariants = VariantProps<typeof diffLine>;

type DiffLineProps = Omit<ComponentProps<"div">, "type"> &
	DiffLineVariants & {
		prefix: string;
		content: string;
	};

function DiffLine({
	type,
	prefix,
	content,
	className,
	...props
}: DiffLineProps) {
	const prefixColor = {
		added: "text-accent-green",
		removed: "text-accent-red",
		context: "text-text-tertiary",
	}[type || "context"];

	return (
		<div className={diffLine({ type, className })} {...props}>
			<span className={`w-4 ${prefixColor}`}>{prefix}</span>
			<span className="flex-1">{content}</span>
		</div>
	);
}

export { DiffLine, type DiffLineProps, type DiffLineVariants, diffLine };
