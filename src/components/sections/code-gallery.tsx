"use client";
import { Cylinder } from "@/components/projects/cylinder-scroll";
import { Canvas } from "@react-three/fiber";
import { Gallery } from "../projects/project-gallery";

export function CodeGallery() {
	return (
		<section className=" min-h-screen flex flex-col gap-6 justify-center items-center my-32">
			<div className=" flex flex-col gap-6 justify-center items-center max-w-[600px] z-10">
				<p>
					Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu velit. At
					vel
				</p>
				<h3 className="text-6xl font-tanker text-center">
					Discover the world's largest shared adventure, crafted by everyone
				</h3>
			</div>

			<div className="h-screen w-full absolute z-0">
				<div className="absolute top-0 z-20 bg-gradient-to-b from-background h-36 w-full" />
				<div className="absolute bottom-0 z-20 bg-gradient-to-t from-background h-36 w-full" />
				<Canvas>
					<Cylinder />
					<ambientLight />
				</Canvas>
			</div>
		</section>
	);
}
