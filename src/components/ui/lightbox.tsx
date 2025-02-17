"use client";

import { useState } from "react";
import Image from "next/image";

export default function LightboxImage() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleLightbox = () => {
		if (!document.startViewTransition) {
			setIsOpen((prev) => !prev);
			return;
		}

		document.startViewTransition(() => setIsOpen((prev) => !prev));
	};

	return (
		<div className="relative flex items-center justify-center min-h-screen bg-gray-900">
			{!isOpen ? (
				<Image
					src="/aichor/home.png"
					alt="Example Image"
					width={300}
					height={200}
					className="rounded-lg cursor-pointer shadow-lg"
					data-view-transition-name="image-transition"
					onClick={toggleLightbox}
				/>
			) : (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
					onClick={toggleLightbox}
				>
					<Image
						src="/aichor/home.png"
						alt="Example Image"
						width={800}
						height={600}
						className="rounded-lg cursor-pointer shadow-lg"
						data-view-transition-name="image-transition"
					/>
				</div>
			)}
		</div>
	);
}
