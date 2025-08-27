"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { useControls } from "leva";
import { UIProjectMap } from "@/data/ui/projects";
const reviews = [
	{
		img: "/branding/lofiapp/mockup-1.jpg",
	},
	{
		img: "/branding/lofiapp/mockup-2.jpg",
	},
	{
		img: "/branding/lofiapp/mockup-2.jpg",
	},
];

const ReviewCard = ({
	img,
}: {
	img: string;
}) => {
	return (
		<div className=" relative  w-3xl h-[400px]">
			<Image
				fill
				objectFit="cover"
				className=" object-cover"
				alt=""
				src={img}
			/>
		</div>
	);
};

export function BrandingGallery2() {
	const tposition = useControls({
		translateX: { value: 500, min: -500, max: 500, step: 0.05 },
		translateY: { value: -15, min: -500, max: 500, step: 0.1 },
		translateZ: { value: 90, min: -500, max: 500, step: 0.1 },
		rotateX: { value: 26, min: -90, max: 90, step: 1 },
		rotateY: { value: -40, min: -90, max: 90, step: 1 },
		rotateZ: { value: 15, min: -90, max: 90, step: 1 },
	});
	return (
		<div
			className={
				"relative flex h-screen w-full flex-row items-center justify-center gap-4 overflow-hidden "
			}
		>
			<div
				className={
					"relative flex h-screen w-full flex-row items-center justify-center gap-4 overflow-hidden "
				}
			>
				<div
					className="flex flex-row items-center gap-4"
					style={{
						transform: `translateX(${tposition.translateX}px) translateY(${tposition.translateY}px) translateZ(${tposition.translateZ}px) rotateX(${tposition.rotateX}deg) rotateY(${tposition.rotateY}deg) rotateZ(${tposition.rotateZ}deg)`,
						transformStyle: "preserve-3d",
					}}
				>
					<Marquee pauseOnHover vertical className="[--duration:20s]">
						{UIProjectMap.map((project, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<ReviewCard key={index} img={project.thumbnail} />
						))}
					</Marquee>
					<Marquee reverse pauseOnHover vertical className="[--duration:20s]">
						{UIProjectMap.map((project, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<ReviewCard key={index} img={project.thumbnail} />
						))}
					</Marquee>
				</div>
			</div>

			<div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
		</div>
	);
}
