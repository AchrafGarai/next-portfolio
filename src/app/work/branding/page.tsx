import React from "react";
import Artbaord from "@/components/projects/artboard";
import BrandingGalley from "@/components/sections/branding-callery";
import CurvedLoop from "@/components/magicui/circle-text";
import { Container } from "@/components/ui/container";
import ListSection from "@/components/sections/list-section";
import Image from "next/image";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { ProjectsList } from "@/components/sections/project-list";
import { ProjectsList2 } from "@/components/sections/project-list-2";
import Stack from "@/components/magicui/stack-cards";
import MaskedHeader from "@/components/sections/masked-header";
import ScrollImage from "@/components/projects/scroll-image";
const images = [
	{
		id: 1,
		img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
	},
	{
		id: 2,
		img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
	},
	{
		id: 3,
		img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
	},
	{
		id: 4,
		img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
	},
];
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
					<MaskedHeader src={"/branding/lofiapp/mockup-2.jpg"}>
						<p>Hello world</p>
						<h2 className="text-9xl font-tanker">Branding Projects</h2>
					</MaskedHeader>
					<div className=" grid grid-cols-2 gap-4 justify-center items-center p-8 w-full">
						<h2 className="text-9xl font-tanker flex-grow">
							Branding Projects
						</h2>
						<p className="flex-grow">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non vero
							cum impedit suscipit voluptatem quia quam recusandae numquam
							accusantium est? Deleniti quo sit repellat totam modi nostrum
							magnam ab laborum.
						</p>
					</div>
				</div>
				<div className="min-h-screen my-64">
					<ProjectsGrid />
					{/* 	<ProjectsList2 /> */}
				</div>
				<CurvedLoop
					curveAmount={-300}
					interactive={false}
					marqueeText="Branding Projects✦"
					className="font-tanker tracking-wide "
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
		</>
	);
}

export default Page;
