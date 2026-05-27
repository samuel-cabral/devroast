import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const analysisCardRoot = tv({
	base: "flex flex-col gap-3 p-5 border border-border-primary",
});

const analysisCardTitle = tv({
	base: "font-mono text-[13px]",
});

const analysisCardDescription = tv({
	base: "text-xs text-text-secondary leading-relaxed",
});

type AnalysisCardRootProps = ComponentProps<"div">;

function AnalysisCardRoot({ className, ...props }: AnalysisCardRootProps) {
	return <div className={analysisCardRoot({ className })} {...props} />;
}

type AnalysisCardTitleProps = ComponentProps<"p">;

function AnalysisCardTitle({ className, ...props }: AnalysisCardTitleProps) {
	return <p className={analysisCardTitle({ className })} {...props} />;
}

type AnalysisCardDescriptionProps = ComponentProps<"p">;

function AnalysisCardDescription({
	className,
	...props
}: AnalysisCardDescriptionProps) {
	return <p className={analysisCardDescription({ className })} {...props} />;
}

export {
	AnalysisCardDescription,
	type AnalysisCardDescriptionProps,
	AnalysisCardRoot,
	type AnalysisCardRootProps,
	AnalysisCardTitle,
	type AnalysisCardTitleProps,
	analysisCardDescription,
	analysisCardRoot,
	analysisCardTitle,
};
