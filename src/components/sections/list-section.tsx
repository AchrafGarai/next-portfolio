import { cn } from "@/lib/utils";

interface ListSectionProps {
	title: string;
	subtitle?: string;
	components: React.ReactNode[];
}

export default function ListSection({
	title,
	subtitle,
	components,
}: ListSectionProps) {
	return (
		<section className="flex flex-col items-center justify-center relative min-h-[300vh]">
			<div className="min-h-screen sticky top-0 flex flex-col gap-6 justify-center items-center max-w-[600px] z-0 text-center">
				<h3 className="text-6xl font-heading uppercase text-center">{title}</h3>
				<p>{subtitle}</p>
			</div>
			<div className="h-screen grow w-full max-w-4xl p-6 z-10">
				{components.map((component, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={cn(
							`flex ${
								index % 2 === 0
									? "justify-start rotate-[8deg]"
									: "justify-end rotate-[-8deg]"
							}`,
						)}
					>
						<div className="max-w-xs min-h-[60vh]">{component}</div>
					</div>
				))}
			</div>
		</section>
	);
}
