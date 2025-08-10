import React from "react";
import Artbaord from "@/components/projects/artboard";
import BrandingGalley from "@/components/sections/branding-callery";
import CurvedLoop from "@/components/magicui/circle-text";
import { Container } from "@/components/ui/container";
import ListSection from "@/components/sections/list-section";
import Image from "next/image";
import { ProjectsGrid } from "@/components/sections/projects-grid";
function Page() {
	return (
		<>
			<div className=" min-h-screen">
				<CurvedLoop
					curveAmount={-300}
					interactive={false}
					marqueeText="Welcome to React Bits ✦"
					className="font-tanker tracking-wide "
				/>
				<Container>
					<div className=" max-w-xl mt-[-300px] mr-0">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						commodi repellendus doloribus autem recusandae omnis officiis
						architecto, quam, reprehenderit molestias repudiandae maxime et
						dolorem excepturi necessitatibus voluptates? Sequi, natus eos.
					</div>
				</Container>
				<div className="min-h-screen mt-32">
					<ProjectsGrid />
				</div>
			</div>
		</>
	);
}

export default Page;
