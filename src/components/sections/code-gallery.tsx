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

export function CodeGallery() {
	const { theme } = useTheme();

	const bgColor = theme === "dark" ? "#000000" : "#ffffff";
	const fluidColor = theme === "dark" ? "#131313" : "#333333";
	return (
		<section className=" min-h-screen flex flex-col gap-6 my-32">
			<Container className=" flex flex-col gap-6 z-10 flex-grow justify-between py-32">
				<span className=" text-xs uppercase text-muted-foreground">
					Branding -110
				</span>
				<div className=" flex flex-col gap-6 items-start">
					<h3 className="text-9xl font-tanker">Branding</h3>
					<p className=" uppercase text-sm text-muted-foreground max-w-lg">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ut
						saepe odit rem dolores? Placeat, dolores inventore. Error eligendi
					</p>
					<Button
						variant={"glass"}
						size={"lg"}
						className="rounded-full text-primary"
					>
						Explore Projects
					</Button>
				</div>
				<span className=" text-xs uppercase text-muted-foreground">
					Branding -110
				</span>
			</Container>

			<div className="h-screen w-full absolute z-0">
				<div className="absolute top-0 z-20 bg-linear-to-b from-background h-36 w-full" />
				<div className="absolute bottom-0 z-20 bg-linear-to-t from-background h-36 w-full" />
				<Canvas>
					<EffectComposer>
						<Fluid
							showBackground={false}
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
