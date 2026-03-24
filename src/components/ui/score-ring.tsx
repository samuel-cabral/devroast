import type { ComponentProps } from "react";

type ScoreRingProps = ComponentProps<"div"> & {
	score: number;
};

const size = 180;
const strokeWidth = 4;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

function ScoreRing({ score, className, ...props }: ScoreRingProps) {
	const percentage = score / 10;
	const strokeDasharray = `${circumference * percentage} ${circumference * (1 - percentage)}`;
	const strokeDashoffset = circumference * 0.25;

	return (
		<div
			className={className}
			style={{ width: size, height: size, position: "relative" }}
			{...props}
		>
			<svg
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				className="-rotate-90"
			>
				<title>Score ring</title>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="none"
					strokeWidth={strokeWidth}
					className="stroke-border-primary"
				/>
				<defs>
					<linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="var(--color-accent-green)" />
						<stop offset="100%" stopColor="var(--color-accent-amber)" />
					</linearGradient>
				</defs>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="none"
					stroke="url(#scoreGradient)"
					strokeWidth={strokeWidth}
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
				/>
			</svg>
			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<span className="text-5xl font-bold leading-none">{score}</span>
				<span className="text-base text-text-tertiary">/10</span>
			</div>
		</div>
	);
}

export { ScoreRing, type ScoreRingProps };
