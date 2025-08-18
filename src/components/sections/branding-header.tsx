import type React from "react";
import Image from "next/image";

interface BrandingHeaderProps {
	imageSrc: string;
	imageAlt?: string;
	title: string;
	description: string;
	cornerTexts?: {
		topLeft?: string;
		topRight?: string;
		bottomLeft?: string;
		bottomRight?: string;
	};
}

const BrandingHeader: React.FC<BrandingHeaderProps> = ({
	imageSrc,
	imageAlt = "Branding Image",
	title,
	description,
	cornerTexts = {},
}) => {
	return (
		<>
			<div className="relative w-full h-[50vh]">
				{/* Background image */}
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className="object-cover"
					priority
				/>

				{/* Black overlay */}
				<div className="absolute inset-0 bg-black/30" />

				{/* Futuristic grid overlay */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="absolute inset-0">
						<div className="absolute top-1/2 left-0 w-full border-t border-white/40" />
						<div className="absolute left-1/2 top-0 h-full border-l border-white/40" />
						<div className="absolute inset-0 border border-white/30" />
					</div>

					{/* Corner squares */}
					<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white" />
					<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white" />
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white" />
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white" />

					{/* Center square */}
					<div className="w-3 h-3 bg-white" />

					{/* Futuristic corner text */}
					{cornerTexts.topLeft && (
						<div className="absolute top-2 left-2 text-xs tracking-widest text-white/70">
							{cornerTexts.topLeft}
						</div>
					)}
					{cornerTexts.topRight && (
						<div className="absolute top-2 right-2 text-xs tracking-widest text-white/70">
							{cornerTexts.topRight}
						</div>
					)}
					{cornerTexts.bottomLeft && (
						<div className="absolute bottom-2 left-2 text-xs tracking-widest text-white/70">
							{cornerTexts.bottomLeft}
						</div>
					)}
					{cornerTexts.bottomRight && (
						<div className="absolute bottom-2 right-2 text-xs tracking-widest text-white/70">
							{cornerTexts.bottomRight}
						</div>
					)}
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 justify-center items-center p-8 w-full">
				<h2 className="text-9xl font-tanker flex-grow">{title}</h2>
				<p className="flex-grow">{description}</p>
			</div>
		</>
	);
};

export default BrandingHeader;
