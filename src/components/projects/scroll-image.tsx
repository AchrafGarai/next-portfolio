"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import Image from "next/image";
export default function ScrollImage() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"], // Animate during scroll through section
	});
	const smoothProgress = useSpring(scrollYProgress, {
		damping: 20,
		mass: 1.2,
	});

	// Animate width & height from small box to full screen
	const width = useTransform(smoothProgress, [0, 1], ["32rem", "100vw"]);
	const height = useTransform(smoothProgress, [0, 1], ["32rem", "100vh"]);
	const borderRadius = useTransform(smoothProgress, [0, 1], ["4rem", "0rem"]);

	return (
		<div
			ref={ref}
			className="relative ppercase min-h-[200vh] border border-red-500 "
		>
			<div className="sticky top-0 z-10 border border-red-500 min-h-screen flex items-center justify-center">
				<div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center w-full">
					<VelocityScroll defaultVelocity={1}>
						Aichor - The AI platfrom
					</VelocityScroll>
					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background " />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
				</div>
				<motion.div
					style={{
						width,
						height,
						borderRadius,
					}}
					className=" overflow-hidden z-20 "
				>
					<Image
						src={"/aichor/aichor-mockup.jpg"}
						alt="aichor"
						width={1920}
						height={1080}
						className="shadow-xl "
					/>
				</motion.div>
			</div>
		</div>
	);
}
