"use client";
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "../ui/container";

const HorizontalScrollGallery = () => {
	const containerRef = useRef(null);
	const [windowWidth, setWindowWidth] = useState(0);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	// Sample images - replace with your actual image URLs
	const images = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
			alt: "Mountain landscape",
		},
		{
			id: 2,
			src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1200&fit=crop",
			alt: "Forest path",
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1200&fit=crop",
			alt: "Sunset over hills",
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=1200&fit=crop",
			alt: "Misty lake",
		},
		{
			id: 5,
			src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=1200&fit=crop",
			alt: "Desert dunes",
		},
		{
			id: 6,
			src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
			alt: "Ocean waves",
		},
		{
			id: 7,
			src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1200&fit=crop",
			alt: "Mountain peak",
		},
		{
			id: 8,
			src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1200&fit=crop",
			alt: "Valley view",
		},
	];

	// Handle window resize and initial width
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		handleResize(); // Set initial width
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Calculate the total width needed for horizontal scrolling
	const imageWidth = 320; // w-80 = 320px
	const gap = 32; // gap-8 = 32px
	const padding = 64; // px-8 on both sides = 64px
	const totalContentWidth =
		images.length * imageWidth + (images.length - 1) * gap + padding;
	const maxScrollDistance = Math.max(0, totalContentWidth - windowWidth);

	const x = useTransform(scrollYProgress, [0, 1], [0, -maxScrollDistance]);

	return (
		<div>
			{/* Horizontal Scroll Gallery Container */}
			<div
				ref={containerRef}
				className="relative"
				style={{ height: "400vh" }} // This creates the scroll distance
			>
				{/* Sticky container */}
				<div className="sticky top-0 h-screen overflow-hidden">
					<Container className=" py-8">
						<h2 className=" text-9xl font-tanker">UI Engineering</h2>
					</Container>

					<div className="h-full ">
						<Container>
							<motion.div
								className="flex gap-8 will-change-transform"
								style={{ x }}
							>
								{images.map((image, index) => (
									<motion.div
										key={image.id}
										className="relative flex-shrink-0"
										initial={{ opacity: 0, y: 50 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: false, margin: "-50px" }}
										transition={{
											duration: 0.6,

											ease: "easeOut",
										}}
										whileHover={{
											scale: 1.05,
											transition: { duration: 0.3 },
										}}
									>
										<div className="w-80 h-[60vh] rounded-2xl overflow-hidden shadow-2xl border ">
											<img
												src={image.src}
												alt={image.alt}
												className="w-full h-full object-cover"
												loading="lazy"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
												<div className="absolute bottom-6 left-6 text-white">
													<h3 className="text-xl font-semibold mb-2">
														{image.alt}
													</h3>
													<p className="text-sm text-gray-300">
														Image {index + 1} of {images.length}
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								))}
							</motion.div>
						</Container>
						<Container className="flex justify-between gap-8 py-8">
							<p className=" text-lg uppercase text-muted-foreground ">
								UI Engineering
							</p>
							<p className=" text-lg uppercase text-muted-foreground ">
								UI Engineering
							</p>

							<p className=" text-lg uppercase text-muted-foreground ">
								UI Engineering
							</p>
						</Container>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalScrollGallery;
