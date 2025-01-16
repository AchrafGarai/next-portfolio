import React from "react";
import Artbaord from "@/components/projects/artboard";
import BrandingGalley from "@/components/sections/branding-callery";
import ProjectHeader from "@/components/projects/project-header";
function Page() {
	return (
		<>
			<ProjectHeader
				title={"Lo-fi Music"}
				description={
					"Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu velit. At vel"
				}
			/>
			<div className="flex flex-col flex-grow min-h-screen justify-center items-center gap-40">
				<Artbaord title="Artboard 1" />
				<Artbaord title="Artboard 1" />
			</div>
			<BrandingGalley />
		</>
	);
}

export default Page;
