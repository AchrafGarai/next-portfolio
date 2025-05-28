import React from "react";
import Artbaord from "@/components/projects/artboard";
import Image from "next/image";
import ThemedImage from "./themed-image";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Container } from "../ui/container";

function ProjectHeader({
	title,
	description,
	imageSrc,
}: {
	title: string;
	description: string;
	imageSrc?: { lightSrc: string; darkSrc: string };
}) {
	return (
		<>
			{/* <div className="flex flex-col grow justify-center items-center py-12 min-h-screen ">
			

			{imageSrc && (
				<>
					<Image
						src={"/aichor/aichor-hero.png"}
						alt={title}
						width={1920}
						height={1080}
						className="mb-8 shadow-3xl"
					/>
					<div className=" bg-zinc-800  h-36  " />
				</>
			)}

			<div className="max-w-3xl mb-9 ">
				<div className=" flex flex-col gap-6 justify-center items-center">
					<p className="text-muted-foreground">Case Study</p>
					<h3 className="text-8xl font-tanker text-center">
						Aichor -{" "}
						<span className=" text-muted-foreground">
							Building a next Gen AI Platform
						</span>
					</h3>
				</div>
			</div>
		</div> */}
			<Container>
				<div className="flex flex-col grow py-12 min-h-screen ">
					<div className="mb-9 text-left max-w-3xl pl-10  ">
						<div className=" flex flex-col gap-6">
							<p className="text-muted-foreground">Case Study</p>
							<h3 className="text-9xl font-tanker md:leading-[7rem]">
								Aichor -{" "}
								<span className=" text-muted-foreground">
									Building a next Gen AI Platform
								</span>
							</h3>
						</div>
					</div>
					{imageSrc && (
						<Image
							src={"/aichor/aichor-hero.png"}
							alt={title}
							width={1280}
							height={720}
							className="mb-8 drop-shadow-3xl mt-[-8rem]"
						/>
					)}
				</div>
			</Container>
		</>
	);
}

export default ProjectHeader;
