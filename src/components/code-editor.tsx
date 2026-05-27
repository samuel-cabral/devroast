"use client";

import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const codeEditorWrapper = tv({
	base: "border border-border-primary",
});

type CodeEditorProps = Omit<ComponentProps<"div">, "onChange"> & {
	value: string;
	onChange: (value: string) => void;
};

function CodeEditor({ value, onChange, className, ...props }: CodeEditorProps) {
	const lines = value.split("\n").length;
	const minLines = 16;
	const displayLines = Math.max(lines, minLines);

	return (
		<div className={codeEditorWrapper({ className })}>
			{/* Header */}
			<div className="flex items-center gap-2 h-10 px-4 border-b border-border-primary bg-bg-surface">
				<span className="size-2.5 rounded-full bg-accent-red" />
				<span className="size-2.5 rounded-full bg-accent-amber" />
				<span className="size-2.5 rounded-full bg-accent-green" />
			</div>

			{/* Editor */}
			<div className="flex bg-bg-input" {...props}>
				{/* Line numbers */}
				<div className="flex flex-col items-end gap-1.5 py-3 px-2.5 w-10 border-r border-border-primary bg-bg-surface select-none">
					{Array.from({ length: displayLines }).map((_, i) => (
						<span
							key={`ln-${i.toString()}`}
							className="font-mono text-[13px] leading-tight text-text-tertiary"
						>
							{i + 1}
						</span>
					))}
				</div>

				{/* Textarea */}
				<textarea
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder="// paste your code here..."
					spellCheck={false}
					className="flex-1 p-3 font-mono text-xs text-text-primary bg-bg-input outline-none focus:outline-none resize-none"
				/>
			</div>
		</div>
	);
}

export { CodeEditor, type CodeEditorProps };
