import {
	AnalysisCardDescription,
	AnalysisCardRoot,
	AnalysisCardTitle,
} from "@/components/ui/analysis-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	CodeBlockContent,
	CodeBlockHeader,
	CodeBlockRoot,
} from "@/components/ui/code-block";
import { DiffLine } from "@/components/ui/diff-line";
import { ScoreRing } from "@/components/ui/score-ring";
import { ToggleShowcase } from "./toggle-showcase";

const codeBlockSample = `function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
}`;

export default function ComponentLibrary() {
	return (
		<main className="min-h-screen bg-bg-page px-20 py-[60px] font-mono text-text-primary">
			<div className="flex flex-col gap-[60px]">
				{/* Title */}
				<div className="flex items-center gap-sm">
					<span className="text-2xl font-bold text-accent-green">{"//"}</span>
					<span className="text-2xl font-bold">component_library</span>
				</div>

				{/* 1. Typography */}
				<Section title="typography">
					<div className="flex flex-col gap-5">
						<p className="text-4xl font-bold">paste your code. get roasted.</p>
						<div className="flex items-center gap-sm">
							<span className="text-sm font-bold text-accent-green">
								{"//"}
							</span>
							<span className="text-sm font-bold">detailed_analysis</span>
						</div>
						<p className="text-sm text-text-secondary font-sans">
							description text sample
						</p>
						<p className="text-xs text-text-tertiary">
							{"lang: javascript · 7 lines"}
						</p>
						<p className="text-[13px] text-[#FFC799]">
							{"function calculateTotal()"}
						</p>
					</div>
				</Section>

				{/* 2. Buttons */}
				<Section title="buttons">
					<div className="flex items-center gap-md">
						<Button variant="primary">$ roast_my_code</Button>
						<Button variant="secondary">$ share_roast</Button>
						<Button variant="ghost">{"$ view_all >>"}</Button>
					</div>
				</Section>

				{/* 3. Toggle */}
				<Section title="toggle">
					<ToggleShowcase />
				</Section>

				{/* 4. Badge Status */}
				<Section title="badge_status">
					<div className="flex items-center gap-lg">
						<Badge status="critical">critical</Badge>
						<Badge status="warning">warning</Badge>
						<Badge status="good">good</Badge>
						<Badge status="critical" className="text-[13px]">
							needs_serious_help
						</Badge>
					</div>
				</Section>

				{/* 5. Cards */}
				<Section title="cards">
					<AnalysisCardRoot className="w-[480px]">
						<Badge status="critical">critical</Badge>
						<AnalysisCardTitle>
							using var instead of const/let
						</AnalysisCardTitle>
						<AnalysisCardDescription>
							the var keyword is function-scoped rather than block-scoped, which
							can lead to unexpected behavior and bugs. modern javascript uses
							const for immutable bindings and let for mutable ones.
						</AnalysisCardDescription>
					</AnalysisCardRoot>
				</Section>

				{/* 6. Code Block */}
				<Section title="code_block">
					<div className="w-[560px]">
						<CodeBlockRoot>
							<CodeBlockHeader>calculate.js</CodeBlockHeader>
							<CodeBlockContent
								code={codeBlockSample}
								language="javascript"
								showLineNumbers
							/>
						</CodeBlockRoot>
					</div>
				</Section>

				{/* 7. Diff Line */}
				<Section title="diff_line">
					<div className="w-[560px] flex flex-col">
						<DiffLine type="removed">var total = 0;</DiffLine>
						<DiffLine type="added">const total = 0;</DiffLine>
						<DiffLine type="context">
							{"for (let i = 0; i < items.length; i++) {"}
						</DiffLine>
					</div>
				</Section>

				{/* 8. Table Row */}
				<Section title="table_row">
					<div className="flex w-full items-center gap-lg border-b border-border-primary px-5 py-4">
						<span className="w-10 text-[13px] text-text-tertiary">#1</span>
						<span className="w-[60px] text-[13px] font-bold text-accent-red">
							2.1
						</span>
						<span className="flex-1 text-xs text-text-secondary">
							{"function calculateTotal(items) { var total = 0; ..."}
						</span>
						<span className="w-[100px] text-xs text-text-tertiary">
							javascript
						</span>
					</div>
				</Section>

				{/* 9. Navbar */}
				<Section title="navbar">
					<nav className="flex h-14 w-full items-center border-b border-border-primary bg-bg-page px-lg">
						<div className="flex items-center gap-sm">
							<span className="text-xl font-bold text-accent-green">{">"}</span>
							<span className="text-lg font-medium">devroast</span>
						</div>
						<div className="flex-1" />
						<span className="text-[13px] text-text-secondary">leaderboard</span>
					</nav>
				</Section>

				{/* 10. Score Ring */}
				<Section title="score_ring">
					<ScoreRing score={3.5} />
				</Section>
			</div>
		</main>
	);
}

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-lg">
			<div className="flex items-center gap-sm">
				<span className="text-sm font-bold text-accent-green">{"//"}</span>
				<span className="text-sm font-bold">{title}</span>
			</div>
			{children}
		</div>
	);
}
