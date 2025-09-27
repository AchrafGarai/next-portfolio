import React from "react";

function TagsCard({ title }: { title?: string }) {
	return (
		<div className=" mb-6 border-b w-full max-w-4xl text-center ">
			<div className=" h-24 overflow-hidden ">
				<h2 className="font-heading uppercase text-9xl">{title}</h2>
			</div>
		</div>
	);
}

export default TagsCard;
