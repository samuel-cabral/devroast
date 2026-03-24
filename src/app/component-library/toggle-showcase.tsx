"use client";

import { Toggle } from "@/components/ui/toggle";

function ToggleShowcase() {
	return (
		<div className="flex items-center gap-8">
			<Toggle defaultChecked>roast mode</Toggle>
			<Toggle>roast mode</Toggle>
		</div>
	);
}

export { ToggleShowcase };
