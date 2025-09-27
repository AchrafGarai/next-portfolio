import { UIProjectMap } from "@/data/ui/projects";
import Image from "next/image";
import React from "react";
import { Container } from "../ui/container";

function StackGallery2() {
	return (
		<section className="relative min-h-screen">
			<Container className=" pb-40 max-w-[1920px]">
				<div className="sticky top-0 pb-8">
					<h2 className="text-[24rem] font-heading uppercase text-center">
						Work
					</h2>
				</div>

				{UIProjectMap.map((project, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={`mb-16 px-4 sticky object-cover h-[800px] ${index === UIProjectMap.length - 1 ? "top-0" : "top-60"}`}
					>
						<Image
							fill
							src={project.thumbnail}
							alt={project.title}
							className="w-full h-auto rounded-3xl shadow-lg object-cover"
						/>
					</div>
				))}
			</Container>
		</section>
	);
}

export default StackGallery2;
