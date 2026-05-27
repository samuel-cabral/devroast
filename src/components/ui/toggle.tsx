"use client";

import { Switch } from "@base-ui-components/react/switch";
import { type ComponentProps, forwardRef } from "react";

type ToggleProps = Omit<ComponentProps<typeof Switch.Root>, "render"> & {
	children?: React.ReactNode;
	label?: string;
};

const Toggle = forwardRef<HTMLElement, ToggleProps>(
	({ children, label, className, ...props }, ref) => {
		const labelText = label ?? children;
		return (
			// biome-ignore lint/a11y/noLabelWithoutControl: Switch.Root renders a hidden input inside the label
			<label className="inline-flex items-center gap-sm cursor-pointer">
				<Switch.Root
					ref={ref}
					className="relative inline-flex h-[22px] w-[40px] shrink-0 cursor-pointer items-center rounded-full border border-border-primary bg-transparent transition-colors data-[checked]:border-accent-green data-[checked]:bg-accent-green"
					{...props}
				>
					<Switch.Thumb className="block size-4 rounded-full bg-text-secondary transition-transform translate-x-[2px] data-[checked]:translate-x-[20px] data-[checked]:bg-bg-page" />
				</Switch.Root>
				{labelText && (
					<span className="text-sm text-text-secondary font-mono">
						{labelText}
					</span>
				)}
			</label>
		);
	},
);

Toggle.displayName = "Toggle";

export { Toggle, type ToggleProps };
