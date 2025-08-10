import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
const reviews = [
	{
		name: "Aichor",
		img: "/branding/jumanji/mockup-1.jpg",
	},
	{
		name: "Aichor",
		img: "/branding/geo-ai/mockup-1.jpg",
	},
	{
		name: "Aichor",
		img: "/branding/qdax/mockup-3.jpg",
	},
	{
		name: "Aichor",
		img: "/branding/mava/mockup-1.jpg",
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
		<div className=" flex flex-col gap-4">
			<div className="relative w-[600px] h-96">
				<Image src={img} alt={""} fill className="object-cover" />
			</div>
			<span className=" text-2xl uppercase font-medium">{name}</span>
		</div>
	);
};

export function ProjectsGrid() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>
			<Marquee pauseOnHover className="[--duration:20s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>

			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
		</div>
	);
}
