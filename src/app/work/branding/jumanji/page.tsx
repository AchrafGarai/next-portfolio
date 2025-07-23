import React from "react";
import Artbaord from "@/components/projects/artboard";
import BrandingGalley from "@/components/sections/branding-callery";
import ProjectHeader from "@/components/projects/project-header";
import { Logo3d } from "@/components/projects/logo-3d";

const ImageSouurce = {
	lightSrc: "/aichor/aichor-experiments.png",
	darkSrc: "/aichor/aichor-experiments-dark.png",
};
function Page() {
	return (
		<>
			<Logo3d
				title="jumanji"
				color="#57f9ae"
				content="Jumanji"
				material={{
					thickness: 0.8,
					roughness: 0.1,
					transmission: 1,
					ior: 0.8,
					chromaticAberration: 0.19,
					backside: false,
				}}
			/>
		</>
	);
}

export default Page;
