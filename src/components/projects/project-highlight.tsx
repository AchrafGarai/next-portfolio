// components/ProjectSection.tsx
type ProjectSectionProps = {
	title: string;
	children: React.ReactNode;
};

export default function ProjectHighlight({
	title,
	children,
}: ProjectSectionProps) {
	return (
		<div className="min-h-screen flex flex-col gap-6 items-center justify-center text-2xl font-medium text-left *:w-full">
			<div className="max-w-2xl">
				<span className="text-muted-foreground">{title}</span>
				<div className="mt-6 mb-10">{children}</div>
			</div>
		</div>
	);
}
