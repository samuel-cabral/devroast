import type { ComponentProps } from "react";
import { codeToHtml } from "shiki";
import { tv } from "tailwind-variants";

// --- Root ---

const codeBlockRoot = tv({
	base: "overflow-hidden rounded-lg border border-border-primary bg-bg-input",
});

type CodeBlockRootProps = ComponentProps<"div">;

function CodeBlockRoot({ className, ...props }: CodeBlockRootProps) {
	return <div className={codeBlockRoot({ className })} {...props} />;
}

// --- Header ---

type CodeBlockHeaderProps = ComponentProps<"header">;

function CodeBlockHeader({
	className,
	children,
	...props
}: CodeBlockHeaderProps) {
	return (
		<header
			className="flex h-10 items-center border-b border-border-primary px-md"
			{...props}
		>
			<div className="flex items-center gap-3">
				<span className="size-2.5 rounded-full bg-accent-red" />
				<span className="size-2.5 rounded-full bg-accent-amber" />
				<span className="size-2.5 rounded-full bg-accent-green" />
			</div>
			{children && (
				<>
					<div className="flex-1" />
					<span className="text-xs text-text-tertiary font-mono">
						{children}
					</span>
				</>
			)}
		</header>
	);
}

// --- Content ---

type CodeBlockContentProps = {
	code: string;
	language: string;
	showLineNumbers?: boolean;
};

async function CodeBlockContent({
	code,
	language,
	showLineNumbers = false,
}: CodeBlockContentProps) {
	const html = await codeToHtml(code, {
		lang: language,
		theme: "vesper",
	});

	const lineCount = code.split("\n").length;

	if (showLineNumbers) {
		return (
			<div className="flex">
				<div className="flex flex-col gap-1.5 bg-bg-surface border-r border-border-primary px-2.5 py-3 text-right">
					{Array.from({ length: lineCount }, (_, i) => (
						<span
							key={`ln-${i + 1}`}
							className="text-[13px] leading-tight text-text-tertiary font-mono"
						>
							{i + 1}
						</span>
					))}
				</div>
				<div
					className="flex-1 overflow-x-auto p-3 text-[13px] [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:font-mono [&_.line]:leading-tight [&_.line]:block [&_.line+.line]:mt-1.5"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		);
	}

	return (
		<div
			className="overflow-x-auto p-md text-sm [&_pre]:!bg-transparent [&_code]:font-mono"
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}

export {
	CodeBlockContent,
	type CodeBlockContentProps,
	CodeBlockHeader,
	type CodeBlockHeaderProps,
	CodeBlockRoot,
	type CodeBlockRootProps,
	codeBlockRoot,
};
