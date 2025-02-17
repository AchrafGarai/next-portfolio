export const AboutProject = ({
	title,
	tag,
}: { title: string; tag: string }) => {
	return (
		<>
			<div className="text-2xl font-medium text-left my-64">
				<div className=" pb-6 border-b flex ">
					<div className="grow flex  items-start gap-4 uppercase">
						<span className=" text-muted-foreground">About</span>
						<span className=" text-muted-foreground"> / </span>
						<span>{title}</span>
					</div>
					<div>{tag}</div>
				</div>
				<p className="mt-6 font">
					Lorem ipsum dolor sit amet consectetur. Maecenas ac turpis semper cras
					velit vulputate congue viverra. Maecenas nulla odio fringilla mi arcu
					faucibus ultrices cras. Tempus phasellus urna.
				</p>
			</div>
		</>
	);
};
