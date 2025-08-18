import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import type {
	BrandingProjectMap,
	ProjectMetadata,
} from "@/data/branding/projects";
import Link from "next/link";
import { Button } from "../ui/button";

type props = (typeof BrandingProjectMap)[number];
const Card = ({ title, tag, coverImage: img, slug }: props) => {
	return (
		<div className=" flex flex-col gap-4 mr-8 ">
			<Link href={`/work/branding/${slug}`}>
				<div className="relative w-[30vw] h-[40vh]">
					<Image src={img} alt={""} fill className="object-cover" />
					<div className="opacity-0 hover:opacity-100 absolute indent-0 w-full h-full bg-black/40 flex items-center justify-center transition-opacity ease-in-out">
						<Button variant={"glass"}>View Project</Button>
					</div>
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

export function BrandingProjectsGrid({
	projects,
}: { projects: ProjectMetadata[] }) {
	const firstRow = projects.slice(0, projects.length / 2);
	const secondRow = projects.slice(projects.length / 2);
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="[--duration:20s] mb-24">
				{firstRow.map((project) => (
					<Card key={project.title} {...project} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((project) => (
					<Card key={project.title} {...project} />
				))}
			</Marquee>

			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
		</div>
	);
}
