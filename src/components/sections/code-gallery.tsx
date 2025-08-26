"use client";
import { Cylinder } from "@/components/projects/cylinder-scroll";
import { Canvas } from "@react-three/fiber";
import { Gallery } from "../projects/project-gallery";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { useTheme } from "next-themes";

export function CodeGallery() {
	const { theme } = useTheme();

	const bgColor = theme === "dark" ? "#000000" : "#ffffff";
	const fluidColor = theme === "dark" ? "#616161" : "#333333";
	return (
		<section className=" min-h-screen flex flex-col gap-6 justify-center items-center my-32">
			<div className=" flex flex-col gap-6 justify-center items-center max-w-[600px] z-10 text-white drop-shadow-2xl">
				<p>
					Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu velit. At
					vel
				</p>
				<h3 className="text-6xl font-tanker text-center">
					Discover the world's largest shared adventure, crafted by everyone
				</h3>
			</div>

			<div className="h-screen w-full absolute z-0">
				<div className="absolute top-0 z-20 bg-linear-to-b from-background h-36 w-full" />
				<div className="absolute bottom-0 z-20 bg-linear-to-t from-background h-36 w-full" />
				<Canvas>
					<EffectComposer>
						<Fluid
							radius={0.06}
							curl={10}
							swirl={5}
							distortion={1}
							force={2}
							pressure={0.94}
							densityDissipation={0.98}
							velocityDissipation={0.99}
							intensity={0.3}
							rainbow={false}
							blend={0}
							showBackground={true}
							backgroundColor={bgColor}
							fluidColor={fluidColor}
						/>
						<Cylinder />
					</EffectComposer>
				</Canvas>
			</div>
		</section>
	);
}
