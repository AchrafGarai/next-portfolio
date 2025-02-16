"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface Props {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export default function LightboxImage({ src, alt, width, height }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative flex items-center justify-center min-h-screen bg-gray-900">
			<motion.div
				className="cursor-pointer"
				layoutId="lightbox"
				onClick={() => setIsOpen(true)}
			>
				<Image
					src="/example.jpg"
					alt="Example Image"
					width={300}
					height={200}
					className="rounded-lg shadow-lg"
				/>
			</motion.div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsOpen(false)}
					>
						<motion.div layoutId="lightbox" className="relative">
							<Image
								src="/aichor/home.png"
								alt="Example Image"
								width={800}
								height={600}
								className="rounded-lg shadow-lg"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
