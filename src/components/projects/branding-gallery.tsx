"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { useScroll, useSpring, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { UIProjectMap } from "@/data/ui/projects";

// Mock data - replace with your UIProjectMap

const ReviewCard = ({ img }: { img: string }) => {
	return (
		<div className="relative w-[800px] h-[500px]">
			<Image fill objectFit="cover" className="object-cover" alt="" src={img} />
		</div>
	);
};

export function BrandingGallery2() {
	const containerRef = useRef<HTMLDivElement>(null);

	// Track scroll progress
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end center"],
	});

	// Create smooth spring animations
	const springConfig = { damping: 15, stiffness: 100 };

	// Transform values based on scroll progress

	const rotateX = useTransform(scrollYProgress, [0, 1], [60, 0]);
	const rotateY = useTransform(scrollYProgress, [0, 1], [5, 0]);
	const rotateZ = useTransform(scrollYProgress, [0, 1], [-20, 0]);

	// Apply spring animation to the transforms

	const smoothRotateX = useSpring(rotateX, springConfig);
	const smoothRotateY = useSpring(rotateY, springConfig);
	const smoothRotateZ = useSpring(rotateZ, springConfig);

	return (
		<div ref={containerRef} className="relative">
			{/* Add some height for scrolling */}
			<div className="h-screen">
				<div
					className={
						"sticky top-0  flex h-screen w-full flex-row items-center justify-center gap-4 overflow-hidden"
					}
				>
					<div
						className={
							"relative flex h-screen w-full flex-row items-center justify-center gap-4 overflow-hidden"
						}
					>
						<motion.div
							className="flex flex-row justify-between gap-4"
							style={{
								transform: useTransform(
									[smoothRotateX, smoothRotateY, smoothRotateZ],
									([rx, ry, rz]) =>
										`translateX(500px) translateY(0px) translateZ(0px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`,
								),
								transformStyle: "preserve-3d",
							}}
						>
							<Marquee pauseOnHover vertical className="[--duration:20s]">
								{UIProjectMap.map((project, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<ReviewCard key={index} img={project.thumbnail} />
								))}
							</Marquee>
						</motion.div>
					</div>
					<div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
					<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
				</div>
			</div>
		</div>
	);
}
