interface ArtboardProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	href?: string;
}

function Artbaord({ title }: ArtboardProps) {
	return (
		<>
			<div className=" flex flex-col gap-2 items-start">
				<span className=" text-xs text-muted-foreground">{title}</span>
				<div className="border bg-accent w-[960px] h-[540px] rounded-lg hover:border-sky-500 " />
			</div>
		</>
	);
}

export default Artbaord;
