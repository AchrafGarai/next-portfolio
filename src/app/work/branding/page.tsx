import React from "react";
import Artbaord from "@/components/projects/artboard";
import BrandingGalley from "@/components/sections/branding-callery";
import CurvedLoop from "@/components/magicui/circle-text";
import { Container } from "@/components/ui/container";
import ListSection from "@/components/sections/list-section";
import Image from "next/image";
import { BrandingProjectsGrid } from "@/components/sections/branding-projects-grid";
import { ProjectsList } from "@/components/sections/project-list";
import { ProjectsList2 } from "@/components/sections/project-list-2";
import Stack from "@/components/magicui/stack-cards";
import MaskedHeader from "@/components/sections/masked-header";
import ScrollImage from "@/components/projects/scroll-image";
import BrandingHeader from "@/components/sections/branding-header";
import { BrandingProjectMap } from "@/data/branding/projects";
import Footer from "@/components/sections/footer";

function Page() {
	return (
		<>
			<div className="min-h-screen">
				<div className="top-8">
					{/* <div className=" absolute right-16 bottom-16 ">
						<Stack
							randomRotation={true}
							sensitivity={180}
							sendToBackOnClick={false}
							cardDimensions={{ width: 600, height: 400 }}
							cardsData={images}
						/>
					</div> */}

					{/* <MaskedHeader src={"/branding/lofiapp/mockup-2.jpg"}>
						<p>Hello world</p>
						<h2 className="text-9xl font-heading uppercase">Branding Projects</h2>
					</MaskedHeader>
 */}
					<BrandingHeader
						imageSrc="/branding/lofiapp/mockup-2.jpg"
						title="Branding"
						description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error
						nobis veritatis, dolor ex voluptatem aut dolorem ea officia voluptas
						necessitatibus? Qui assumenda vel odit eum perferendis, aut velit?
						Animi."
						cornerTexts={{
							topLeft: "CLIENT_01",
							topRight: "PROJECT_AICHOR",
							bottomLeft: "BRND_001",
							bottomRight: "STATUS_OK",
						}}
					/>
				</div>
				<div className="min-h-screen my-64">
					<BrandingProjectsGrid projects={BrandingProjectMap} />
				</div>
				<CurvedLoop
					curveAmount={-300}
					interactive={false}
					marqueeText="Branding Projects✦"
					className="font-heading uppercase tracking-wide "
				/>

				<Container className="mt-[-400px] mb-64 ">
					<div className="max-w-xl mr-0">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						commodi repellendus doloribus autem recusandae omnis officiis
						architecto, quam, reprehenderit molestias repudiandae maxime et
						dolorem excepturi necessitatibus voluptates? Sequi, natus eos.
					</div>
				</Container>
			</div>
			<Footer />
		</>
	);
}

export default Page;
