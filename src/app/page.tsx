import { Button } from "@/components/ui/button";
import { ActionsBar } from "./actions-bar";
import { CodeEditorSection } from "./code-editor-section";

const leaderboardData = [
	{
		rank: 1,
		score: 1.2,
		lines: [
			'eval(prompt("enter code"))',
			"document.write(response)",
			"// trust the user lol",
		],
		lang: "javascript",
		highlight: true,
	},
	{
		rank: 2,
		score: 1.8,
		lines: [
			"if (x == true) { return true; }",
			"else if (x == false) { return false; }",
			"else { return !false; }",
		],
		lang: "typescript",
		highlight: false,
	},
	{
		rank: 3,
		score: 2.1,
		lines: ["SELECT * FROM users WHERE 1=1", "-- TODO: add authentication"],
		lang: "sql",
		highlight: false,
	},
];

export default function Home() {
	return (
		<div className="min-h-screen bg-bg-page font-mono text-text-primary">
			{/* Navbar */}
			<nav className="flex h-14 items-center justify-between border-b border-border-primary bg-bg-page px-xl">
				<div className="flex items-center gap-sm">
					<span className="text-xl font-bold text-accent-green">{">"}</span>
					<span className="text-lg font-medium">devroast</span>
				</div>
				<span className="text-[13px] text-text-secondary">leaderboard</span>
			</nav>

			{/* Main Content */}
			<main className="flex flex-col items-center gap-8 px-xl pt-20">
				{/* Hero */}
				<div className="flex flex-col items-center gap-3">
					<div className="flex items-center gap-3">
						<span className="text-4xl font-bold text-accent-green">$</span>
						<h1 className="text-4xl font-bold">
							paste your code. get roasted.
						</h1>
					</div>
					<p className="text-sm text-text-secondary font-sans">
						{
							"// drop your code below and we'll rate it — brutally honest or full roast mode"
						}
					</p>
				</div>

				{/* Code Editor */}
				<div className="w-[780px] max-w-full">
					<CodeEditorSection />
				</div>

				{/* Actions Bar */}
				<ActionsBar />

				{/* Footer Stats */}
				<div className="flex items-center justify-center gap-lg">
					<span className="text-xs text-text-tertiary font-sans">
						2,847 codes roasted
					</span>
					<span className="text-xs text-text-tertiary">·</span>
					<span className="text-xs text-text-tertiary font-sans">
						avg score: 4.2/10
					</span>
				</div>

				{/* Spacer */}
				<div className="h-[60px]" />

				{/* Leaderboard Preview */}
				<section className="flex w-[960px] max-w-full flex-col gap-lg">
					{/* Title Row */}
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-sm">
							<span className="text-sm font-bold text-accent-green">
								{"//"}
							</span>
							<span className="text-sm font-bold">shame_leaderboard</span>
						</div>
						<Button
							variant="secondary"
							className="hover:text-white text-text-secondary"
							size="sm"
						>
							$ view_all {">>"}
						</Button>
					</div>

					<p className="text-[13px] text-text-tertiary font-sans">
						{"// the worst code on the internet, ranked by shame"}
					</p>

					{/* Leaderboard Table */}
					<div className="flex flex-col overflow-hidden border border-border-primary">
						{/* Header */}
						<div className="flex h-10 items-center border-b border-border-primary bg-bg-surface px-5">
							<span className="w-[50px] text-xs font-medium text-text-tertiary">
								#
							</span>
							<span className="w-[70px] text-xs font-medium text-text-tertiary">
								score
							</span>
							<span className="flex-1 text-xs font-medium text-text-tertiary">
								code
							</span>
							<span className="w-[100px] text-xs font-medium text-text-tertiary">
								lang
							</span>
						</div>

						{/* Rows */}
						{leaderboardData.map((row, i) => (
							<div
								key={row.rank}
								className={`flex items-start px-5 py-4 ${i < leaderboardData.length - 1 ? "border-b border-border-primary" : ""}`}
							>
								<span
									className={`w-[50px] text-xs ${row.highlight ? "text-accent-amber" : "text-text-secondary"}`}
								>
									{row.rank}
								</span>
								<span className="w-[70px] text-xs font-bold text-accent-red">
									{row.score.toFixed(1)}
								</span>
								<div className="flex flex-1 flex-col gap-[3px]">
									{row.lines.map((line) => (
										<span
											key={line}
											className={`text-xs ${line.startsWith("//") || line.startsWith("--") ? "text-[#8B8B8B]" : "text-text-primary"}`}
										>
											{line}
										</span>
									))}
								</div>
								<span className="w-[100px] text-xs text-text-secondary">
									{row.lang}
								</span>
							</div>
						))}
					</div>

					{/* Fade hint */}
					<p className="text-center text-xs text-text-tertiary font-sans">
						showing top 3 of 2,847 ·{" "}
						<a
							href="/leaderboard"
							className="hover:text-white text-text-secondary transition-colors hover:underline"
						>
							view full leaderboard {">>"}
						</a>
					</p>
				</section>

				{/* Bottom padding */}
				<div className="h-[60px]" />
			</main>
		</div>
	);
}
