import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
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

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
}: {
	img: string;
	name: string;
}) => {
	return (
		<div className=" flex flex-col gap-4 mr-8 ">
			<div className="relative w-[30vw] h-[40vh]">
				<Image src={img} alt={""} fill className="object-cover" />
			</div>
			<div className="flex px-4 gap-4 justify-between">
				<span className=" text-xl uppercase font-semibold">{name}</span>
				<span className="text-xl uppsercase font-medium text-muted-foreground">
					Saas
				</span>
			</div>
		</div>
	);
};

export function ProjectsGrid() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="[--duration:20s] mb-24">
				{firstRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>

			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
		</div>
	);
}
