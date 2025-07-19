import Image from "next/image";
import React from "react";

function Testimonial({ text, imgSrc }: { text: string; imgSrc: string }) {
	return (
		<div className="flex gap-4 items-center p-2 border rounded-full bg-accent shadow text-left  ">
			<Image
				src={imgSrc}
				alt="Testimonial"
				className="rounded-full grayscale "
				width={100}
				height={100}
			/>
			<p className="italic text-xl">“{text}”</p>
		</div>
	);
}

export default Testimonial;
