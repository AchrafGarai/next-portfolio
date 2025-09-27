import React from "react";
import Stack from "../Stack";
import { Container } from "../ui/container";
import { UIProjectMap } from "@/data/ui/projects";

function StackGallery() {
	const images = UIProjectMap.map((project, index) => ({
		id: index + 1,
		img: project.thumbnail, // or whatever path you want for each screen
		title: project.title,
	}));
	return (
		<div className="min-h-[200vh] relative flex flex-col">
			<Container className="sticky top-32">
				<h3 className=" text-[12rem] leading-none font-heading uppercase ">
					The Art Of
				</h3>
				<div className=" flex items-center gap-8">
					<p className="uppercase text-sm text-muted-foreground max-w-xs">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus
						quam inventore
					</p>
					<h3 className=" text-[12rem] leading-none  font-heading uppercase text-right">
						reinventing
					</h3>
				</div>
				<div className=" flex items-center gap-8">
					<h3 className=" text-[12rem] leading-none  font-heading uppercase text-right">
						Identities
					</h3>
					<p className="uppercase text-sm text-muted-foreground max-w-xs">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus
						quam inventore
					</p>
				</div>
			</Container>
			<div className="w-full flex items-center justify-center z-10">
				<Stack
					randomRotation={true}
					sensitivity={180}
					sendToBackOnClick={false}
					cardDimensions={{ width: 600, height: 800 }}
					cardsData={images}
				/>
			</div>
		</div>
	);
}

export default StackGallery;
