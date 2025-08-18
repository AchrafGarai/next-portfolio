import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { BrandingProjectMap } from "@/data/branding/projects";
import Link from "next/link";
const reviews = [
	{
		name: "Jumanji",
		img: "/branding/jumanji/mockup-1.jpg",
	},
	{
		name: "Geo-AI Hack",
		img: "/branding/geo-ai/mockup-3.jpg",
	},
	{
		name: "Qdax",
		img: "/branding/qdax/mockup-3.jpg",
	},
	{
		name: "Mava",
		img: "/branding/mava/mockup-1.jpg",
	},
	{
		name: "Aichor",
		img: "/branding/Aichor/mockup-2.jpg",
	},
	{
		name: "Lofi-app",
		img: "/branding/lofiapp/mockup-2.jpg",
	},
];

const firstRow = BrandingProjectMap.slice(0, BrandingProjectMap.length / 2);
const secondRow = BrandingProjectMap.slice(BrandingProjectMap.length / 2);
type props = (typeof BrandingProjectMap)[number];
const ReviewCard = ({ title, tag, coverImage: img, slug }: props) => {
	return (
		<div className=" flex flex-col gap-4 mr-8 ">
			<Link href={`/work/branding/${slug}`}>
				<div className="relative w-[30vw] h-[40vh]">
					<Image src={img} alt={""} fill className="object-cover" />
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

export function ProjectsGrid() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="[--duration:20s] mb-24">
				{firstRow.map((project) => (
					<ReviewCard key={project.title} {...project} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((project) => (
					<ReviewCard key={project.title} {...project} />
				))}
			</Marquee>

			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
		</div>
	);
}
