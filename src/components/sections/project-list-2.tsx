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
		<div className=" relative flex flex-col gap-4 w-full max-w-4xl mx-auto h-[60vh] mb-16 p-16">
			<Image src={img} alt={""} fill className=" object-cover" quality={100} />
			<span className=" text-9xl w-full font-heading uppercase uppercase font-medium flex-grow left-[-90px] absolute bottom-3 z-10">
				{name}
			</span>
		</div>
	);
};

export function ProjectsList2() {
	return (
		<Container>
			{reviews.map((review, index) => (
				<ReviewCard
					img={review.img}
					name={review.name} // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
				/>
			))}
		</Container>
	);
}
