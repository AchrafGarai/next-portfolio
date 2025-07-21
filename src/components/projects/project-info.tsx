// components/ProjectMeta.tsx
type MetaItem = {
	label: string;
	values: string[];
};

type ProjectMetaProps = {
	items: MetaItem[];
};

export default function ProjectInfo({ items }: ProjectMetaProps) {
	return (
		<div className="flex gap-6 justify-center text-xl font-medium text-left *:w-full mx-8 mb-32 border-t pt-6">
			{items.map((item, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<div key={index} className="flex flex-col gap-2">
					<span className="text-muted-foreground">{item.label}</span>
					{item.values.map((value, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<p key={i}>{value}</p>
					))}
				</div>
			))}
		</div>
	);
}
