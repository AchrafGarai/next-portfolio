import React from "react";
import Artbaord from "@/components/projects/artboard";
import BrandingGalley from "@/components/sections/branding-callery";
import ProjectHeader from "@/components/projects/project-header";

const ImageSouurce = {
	lightSrc: "/aichor/aichor-experiments.png",
	darkSrc: "/aichor/aichor-experiments-dark.png",
};
function Page() {
	return (
		<>
			<ProjectHeader
				title={"AIchor"}
				description={
					"Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu velit. At vel"
				}
				imageSrc={ImageSouurce}
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
