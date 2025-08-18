import { UIProjectMap } from "@/data/ui/projects";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

type props = (typeof UIProjectMap)[number] & { className?: string };
const Card = ({ title, tag, thumbnail: img, slug, className }: props) => {
	return (
		<div className={`flex flex-col gap-4 mr-8 ${className ?? ""}`}>
			<Link href={`/work/ui/${slug}`}>
				<div className="">
					<Image src={img} alt={""} width={1920} height={1080} />
					{/* 	<div className="opacity-0 hover:opacity-100 absolute indent-0 w-full h-full bg-black/40 flex items-center justify-center transition-opacity ease-in-out">
						<Button variant={"glass"}>View Project</Button>
					</div> */}
				</div>
			</Link>
			<div className="flex px-4 gap-4 justify-between">
				<span className=" text-xl uppercase font-semibold">{title}</span>
				<span className="text-xl uppsercase font-medium text-muted-foreground">
					{tag}
				</span>
			</div>
		</div>
	);
};

export function UIProjectsGrid() {
	return (
		<div className="p-8 grid grid-cols-2 gap-8">
			{UIProjectMap.map((project, i) => {
				const isFullWidth = i === 0 || i === 3;
				return (
					<Card
						key={project.title}
						{...project}
						className={isFullWidth ? "col-span-2" : ""}
					/>
				);
			})}
		</div>
	);
}
