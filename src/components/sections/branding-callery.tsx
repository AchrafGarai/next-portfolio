import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function BrandingGalley() {
	const images = [
		{
			src: "/test",
		},
		{
			src: "/test",
		},
		{
			src: "/test",
		},
	];
	return (
		<section className="flex flex-col items-center justify-center relative">
			<div className="min-h-screen sticky top-0 flex flex-col gap-6 justify-center items-center max-w-[600px] z-0">
				<p>
					Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu velit. At
					vel
				</p>
				<h3 className="text-6xl font-tanker text-center">
					Discover the world's largest shared adventure, crafted by everyone
				</h3>
			</div>
			<div className="h-screen flex-grow w-full max-w-4xl p-6 z-10">
				{images.map((image, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={cn(
							`flex ${
								index % 2 === 0
									? "justify-start rotate-[8deg]"
									: "justify-end rotate-[-8deg]"
							}`,
						)}
					>
						<div className=" bg-card border rounded h-80 w-52" />
					</div>
				))}
			</div>
		</section>
	);
}

export default BrandingGalley;
