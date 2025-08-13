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
					<div className="relative min-h-screen">
						<div className=" z-0 ">
							{/* Background image */}
							<Image
								src="/branding/lofiapp/mockup-2.jpg"
								fill
								className="object-cover absolute w-full h-full"
								alt=""
							/>
							<div className=" absolute inset-0 bg-black/40" />
						</div>

						{/* Overlay content */}
						<div className="absolute inset-0 flex justify-between py-24">
							<Container>
								<h1 className="text-9xl text-white font-tanker">Branding</h1>
							</Container>
						</div>
					</div>
					<CurvedLoop
						curveAmount={-300}
						interactive={false}
						marqueeText="Welcome to React Bits ✦"
						className="font-tanker tracking-wide "
					/>
					<Container>
						<div className="max-w-xl mt-[-300px] mr-0">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
							commodi repellendus doloribus autem recusandae omnis officiis
							architecto, quam, reprehenderit molestias repudiandae maxime et
							dolorem excepturi necessitatibus voluptates? Sequi, natus eos.
						</div>
					</Container>
				</div>
				<div className="min-h-screen my-64">
					<ProjectsGrid />
					{/* 	<ProjectsList2 /> */}
				</div>
			</div>
		</>
	);
}

export default Page;
