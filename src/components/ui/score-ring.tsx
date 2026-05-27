"use client";

import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ScoreRingProps = ComponentProps<"div"> & {
	score: number;
	total?: number;
};

function ScoreRing({ score, total = 10, className, ...props }: ScoreRingProps) {
	const radius = 80;
	const circumference = 2 * Math.PI * radius;
	const progress = Math.min(score / total, 1);
	const strokeDasharray = `${circumference * progress} ${circumference}`;

	const displayScore = score % 1 === 0 ? score.toString() : score.toFixed(1);

	return (
		<div
			className={twMerge(
				"flex flex-col items-center justify-center gap-2",
				className,
			)}
			{...props}
		>
			<svg
				width="180"
				height="180"
				viewBox="0 0 180 180"
				className="transform -rotate-90"
				aria-label={`Score: ${displayScore} out of ${total}`}
			>
				<circle
					cx="90"
					cy="90"
					r={radius}
					fill="none"
					stroke="currentColor"
					strokeWidth="4"
					className="text-border-primary"
				/>
				<circle
					cx="90"
					cy="90"
					r={radius}
					fill="none"
					stroke="url(#gradient)"
					strokeWidth="4"
					strokeLinecap="round"
					strokeDasharray={strokeDasharray}
					className="transition-all"
				/>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="var(--color-accent-green)" />
						<stop offset="100%" stopColor="var(--color-accent-amber)" />
					</linearGradient>
				</defs>
			</svg>

			<span className="font-mono text-2xl font-bold text-text-primary">
				{displayScore}
			</span>
		</div>
	);
}

export { ScoreRing, type ScoreRingProps };
