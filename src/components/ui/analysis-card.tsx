import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const analysisCardRoot = tv({
	base: "flex flex-col gap-3 border border-border-primary p-5",
});

const analysisCardTitle = tv({
	base: "text-[13px] text-text-primary",
});

const analysisCardDescription = tv({
	base: "text-xs leading-6 text-text-secondary font-sans",
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
