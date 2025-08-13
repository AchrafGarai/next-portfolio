import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { Container } from "../ui/container";
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
		img: "/branding/lofiapp/mockup-1.jpg",
	},
];

const ReviewCard = ({
	img,
	name,
}: {
	img: string;
	name: string;
}) => {
	return (
		<div className=" flex flex-col gap-4 w-full h-[50vh]">
			<div className="relative w-full h-full">
				<Image src={img} alt={""} fill className="object-cover" />
			</div>
			<span className=" text-2xl uppercase font-medium">{name}</span>
		</div>
	);
};

export function ProjectsList() {
	return (
		<Container>
			<div className="grow w-full p-6 z-10">
				{reviews.map((review, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={cn(
							`flex ${
								index % 2 === 0
									? "justify-start rotate-[8deg]"
									: "justify-end rotate-[-8deg]"
							}`,
						)}
					>
						<div className="w-full max-w-lg min-h-[40vh]">
							<ReviewCard img={review.img} name={review.name} />
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}
