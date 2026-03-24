"use client";

import { type ComponentProps, forwardRef, useCallback, useRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

// --- Root ---

const codeEditorRoot = tv({
	base: "overflow-hidden border border-border-primary bg-bg-input flex flex-col",
});

type CodeEditorRootProps = ComponentProps<"div"> &
	VariantProps<typeof codeEditorRoot>;

const CodeEditorRoot = forwardRef<HTMLDivElement, CodeEditorRootProps>(
	({ className, ...props }, ref) => {
		return (
			<div ref={ref} className={codeEditorRoot({ className })} {...props} />
		);
	},
);

CodeEditorRoot.displayName = "CodeEditorRoot";

// --- Header ---

type CodeEditorHeaderProps = ComponentProps<"header">;

const CodeEditorHeader = forwardRef<HTMLElement, CodeEditorHeaderProps>(
	({ className, ...props }, ref) => {
		return (
			<header
				ref={ref}
				className="flex h-10 items-center border-b border-border-primary px-md"
				{...props}
			>
				<div className="flex items-center gap-2">
					<span className="size-3 rounded-full bg-accent-red" />
					<span className="size-3 rounded-full bg-accent-amber" />
					<span className="size-3 rounded-full bg-accent-green" />
				</div>
			</header>
		);
	},
);

CodeEditorHeader.displayName = "CodeEditorHeader";

// --- Content ---

type CodeEditorContentProps = Omit<
	ComponentProps<"textarea">,
	"value" | "onChange"
> & {
	value: string;
	onChange: (value: string) => void;
};

const CodeEditorContent = forwardRef<
	HTMLTextAreaElement,
	CodeEditorContentProps
>(({ value, onChange, placeholder, ...props }, ref) => {
	const lineNumbersRef = useRef<HTMLDivElement>(null);
	const lines = value.split("\n");
	const lineCount = lines.length;

	const handleScroll = useCallback((e: React.UIEvent<HTMLTextAreaElement>) => {
		if (lineNumbersRef.current) {
			lineNumbersRef.current.scrollTop = e.currentTarget.scrollTop;
		}
	}, []);

	return (
		<div className="flex flex-1 overflow-hidden">
			<div
				ref={lineNumbersRef}
				className="flex w-12 flex-col items-end overflow-hidden border-r border-border-primary bg-bg-surface px-3 py-md"
				aria-hidden="true"
			>
				{Array.from({ length: lineCount }, (_, i) => (
					<span
						key={`ln-${i + 1}`}
						className="font-mono text-xs leading-7 text-text-tertiary"
					>
						{i + 1}
					</span>
				))}
			</div>

			<textarea
				ref={ref}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onScroll={handleScroll}
				placeholder={placeholder}
				spellCheck={false}
				className="flex-1 resize-none overflow-auto bg-transparent p-md font-mono text-xs leading-7 text-text-primary caret-accent-green outline-none placeholder:text-text-tertiary"
				{...props}
			/>
		</div>
	);
});

CodeEditorContent.displayName = "CodeEditorContent";

export {
	CodeEditorContent,
	type CodeEditorContentProps,
	CodeEditorHeader,
	type CodeEditorHeaderProps,
	CodeEditorRoot,
	type CodeEditorRootProps,
	codeEditorRoot,
};
