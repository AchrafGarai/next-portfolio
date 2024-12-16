import React from "react";
import TagsCard from "../projects/tags-card";

function SkillTags() {
	return (
		<div className="min-h-screen flex flex-col gap-6 justify-center items-center ">
			<TagsCard />
			<TagsCard />
			<TagsCard />
		</div>
	);
}

export default SkillTags;
