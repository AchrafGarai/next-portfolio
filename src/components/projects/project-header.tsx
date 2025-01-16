import React from "react";
import Artbaord from "@/components/projects/artboard";
import Image from "next/image";
import ThemedImage from "./themed-image";

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
		<div className="flex flex-col flex-grow justify-center items-center py-12 ">
			<div className="relative mb-12">
				{/* <Artbaord title="Artboard 1" /> */}
				{/* <div className="h-96 bg-gradient-to-t from-background via-50% w-full absolute bottom-0" /> */}
				{imageSrc && (
					<div className="p-2 bg-gradient-to-b from-accent  rounded-3xl backdrop-blur border ">
						<ThemedImage
							srcLight={imageSrc.lightSrc}
							srcDark={imageSrc.darkSrc}
							alt={title}
							width={960}
							height={540}
							className="border-4 rounded-2xl shadow-2xl "
						/>
					</div>
				)}
			</div>
			<div className="max-w-2xl mb-9  ">
				<div className=" flex flex-col gap-6 justify-center items-center">
					<h3 className="text-8xl font-tanker text-center">{title}</h3>
					<p className="text-muted-foreground">{description}</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectHeader;
