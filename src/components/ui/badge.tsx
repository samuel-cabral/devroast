import { type ComponentProps, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const badge = tv({
	base: "inline-flex items-center gap-sm font-mono text-xs",
	variants: {
		status: {
			critical: "text-accent-red",
			warning: "text-accent-amber",
			good: "text-accent-green",
		},
	},
	defaultVariants: {
		status: "good",
	},
});

type BadgeVariants = VariantProps<typeof badge>;

type BadgeProps = ComponentProps<"span"> & BadgeVariants;

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	({ className, status, children, ...props }, ref) => {
		return (
			<span ref={ref} className={badge({ status, className })} {...props}>
				<span className="size-2 rounded-full bg-current" />
				{children}
			</span>
		);
	},
);

Badge.displayName = "Badge";

export { Badge, type BadgeProps, badge };
