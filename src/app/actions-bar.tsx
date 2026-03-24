"use client";

import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

function ActionsBar() {
	return (
		<div className="flex w-[780px] max-w-full items-center justify-between">
			<div className="flex items-center gap-md">
				<Toggle defaultChecked>roast mode</Toggle>
				<span className="text-xs text-text-tertiary font-sans">
					{"// maximum sarcasm enabled"}
				</span>
			</div>
			<Button variant="primary" size="md">
				$ roast_my_code
			</Button>
		</div>
	);
}

export { ActionsBar };
