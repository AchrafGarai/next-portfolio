"use client";
import { Cylinder } from "@/components/projects/cylinder-scroll";
import { Canvas } from "@react-three/fiber";
import { Gallery } from "../projects/project-gallery";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { useTheme } from "next-themes";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import CurvedLoop from "../magicui/circle-text";
import { Leva, useControls } from "leva";
import { VelocityScroll } from "../magicui/scroll-based-velocity";

export function CodeGallery() {
	const { theme } = useTheme();

	const bgColor = theme === "dark" ? "#000000" : "#ffffff";
	const fluidColor = theme === "dark" ? "#131313" : "#333333";
	const cyl1 = useControls("Cylinder 1", {
		cameraZoom: { value: 360, min: 100, max: 1000, step: 10 },
		groupPosition: { value: [0.7, 0.1, 0.1], step: 0.1 },
		groupRotation: { value: [0, 0, 11], step: 0.1 },
	});

	return (
		<section className=" relative min-h-screen flex flex-col items-center justify-center gap-6 my-32">
			<Container className="z-20">
				<h3 className=" text-9xl leading-none font-heading uppercase ">
					The Art Of
				</h3>
				<div className=" flex items-center gap-8">
					<p className="uppercase text-sm text-muted-foreground max-w-xs">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus
						quam inventore
					</p>
					<h3 className=" text-9xl leading-none  font-heading uppercase text-right">
						reinventing
					</h3>
				</div>
				<div className=" flex items-center gap-8">
					<h3 className=" text-9xl leading-none  font-heading uppercase text-right">
						Identities
					</h3>
					<p className="uppercase text-sm text-muted-foreground max-w-xs">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus
						quam inventore
					</p>
				</div>
			</Container>

			<div className="h-screen w-full absolute z-0">
				<div className="absolute top-0 z-20 bg-linear-to-b from-background h-36 w-full" />
				<div className="absolute bottom-0 z-20 bg-linear-to-t from-background h-36 w-full" />
				<Canvas className="z-10">
					{/* 	<EffectComposer>
						<Fluid
							showBackground={false}
							backgroundColor={bgColor}
							fluidColor={fluidColor}
						/> */}

					<Cylinder
						cameraPosition={[-1.2, 0.1, 1]}
						cameraRotation={[0, 0, -0.4]}
						cameraZoom={cyl1.cameraZoom}
						groupPosition={cyl1.groupPosition as [number, number, number]}
						groupRotation={cyl1.groupRotation as [number, number, number]}
					/>

					{/* </EffectComposer> */}
				</Canvas>
			</div>
		</section>
	);
}
