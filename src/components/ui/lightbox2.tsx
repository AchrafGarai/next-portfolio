"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Browser } from "../projects/browser";
import { Container } from "./container";

const images = ["/aichor/home.png", "/aichor/aichor-experiments-dark.png"];

export default function ExpandableGrid() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [hasMounted, setHasMounted] = useState(false); // Fix for hydration error

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) return null; // Prevents hydration mismatch

	return (
		<LayoutGroup>
			<div className="grid grid-cols-2 gap-4 p-4">
				{images.map((image, index) => (
					<motion.div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						layoutId={`image-${index}`}
						onClick={() => setSelectedImage(image)}
					>
						<Browser imageSrc={image} />
					</motion.div>
				))}
			</div>

			<AnimatePresence>
				{selectedImage && (
					<motion.div
						className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}
					>
						<motion.div
							className=" p-6 rounded-2xl shadow-xl w-full "
							onClick={(e) => e.stopPropagation()}
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
						>
							<Container>
								<div className="flex justify-between items-center">
									<h3 className="text-xl font-semibold">Expanded Modal</h3>
									<Button
										variant="ghost"
										size="icon"
										onClick={() => setSelectedImage(null)}
									>
										<X className="w-5 h-5" />
									</Button>
								</div>

								<motion.div
									layoutId={`image-${images.indexOf(selectedImage)}`}
									className=" p-8 flex-grow h-full w-full relative"
								>
									<Browser imageSrc={selectedImage} />
								</motion.div>
							</Container>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</LayoutGroup>
	);
}
