export const AboutProject = ({
	title,
	tag,
}: { title: string; tag: string }) => {
	return (
		<>
			<div className="text-2xl font-medium text-left my-64">
				<div className=" pb-6 border-b flex text-xl ">
					<div className="grow flex  items-start gap-4">
						<span className=" text-muted-foreground">About</span>
						<span className=" text-muted-foreground"> / </span>
						<span>{title}</span>
					</div>
					<div>{tag}</div>
				</div>
				<p className="mt-6 text-2xl">
					Designing a forward-looking, branded UI system to support AIchor’s
					intelligent interface for technical researchers and developers.
				</p>
			</div>
		</>
	);
};
