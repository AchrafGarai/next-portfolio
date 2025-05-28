"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import Artbaord from "../projects/artboard";

const images = [
	"/aichor/aichor-experiments-dark.png", // your uploaded image
	"/aichor/aichor-experiments-dark.png",
	"/aichor/aichor-experiments-dark.png",
	// Add more images here
];

export default function AnimatedImageList() {
	const containerRef = useRef(null);

	// Watch vertical scroll
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	// Move X from 0 to -totalScrollWidth as we scroll down
	const x = useTransform(scrollYProgress, [0, 1], [0, -images.length * 900]);

	return (
		<div ref={containerRef} className="relative w-screen">
			{/* Sticky container that holds the animation */}
			<div className="sticky top-0 h-screen flex items-center w-full max-w-screen">
				<motion.div style={{ x }} className="flex gap-10 px-40">
					{images.map((src, idx) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<AnimatedImage key={idx} src={src} />
					))}
				</motion.div>
			</div>
		</div>
	);
}

function AnimatedImage({ src }: { src: string }) {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	return (
		<motion.div ref={ref}>
			<div className="w-[900px]">
				<Artbaord href={src} title={"Test"} />
			</div>
		</motion.div>
	);
}
