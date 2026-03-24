"use client";

import { useState } from "react";
import {
	CodeEditorContent,
	CodeEditorHeader,
	CodeEditorRoot,
} from "@/components/ui/code-editor";

function CodeEditorSection() {
	const [code, setCode] = useState("");

	return (
		<CodeEditorRoot className="h-[360px]">
			<CodeEditorHeader />
			<CodeEditorContent
				value={code}
				onChange={setCode}
				placeholder="// paste your code here..."
			/>
		</CodeEditorRoot>
	);
}

export { CodeEditorSection };
