"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import Image from "next/image";
export default function ScrollImage() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"], // Animate during scroll through section
	});

	// Animate width & height from small box to full screen
	const width = useTransform(scrollYProgress, [0, 1], ["16rem", "100vw"]);
	const height = useTransform(scrollYProgress, [0, 1], ["16rem", "100vh"]);
	const borderRadius = useTransform(scrollYProgress, [0, 1], ["1rem", "0rem"]);

	return (
		<div
			ref={ref}
			className="relative flex items-center justify-center overflow-hidden uppercase min-h-screen "
		>
			<VelocityScroll defaultVelocity={1}>
				Aichor - The AI platfrom
			</VelocityScroll>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background " />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
			<motion.div
				style={{
					width,
					height,

					borderRadius,
					position: "absolute",
					overflow: "hidden",
				}}
				className="shadow-xl"
			>
				<div>
					<Image src={"/aichor/aichor-mockup.jpg"} alt="aichor" />
				</div>
			</motion.div>
		</div>
	);
}
