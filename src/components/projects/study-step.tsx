import type { ReactNode } from "react";

function StudyStep({
	title,
	children,
}: { title: string; children: ReactNode }) {
	return (
		<div className="grid grid-cols-3 gap-6 text-left relative my-56 ">
			<span className="sticky top-0  text-2xl ">{title} </span>
			<div className=" flex flex-col gap-12 text-xl col-span-2">{children}</div>
		</div>
	);
}

export default StudyStep;
