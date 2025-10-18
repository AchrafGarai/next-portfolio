"use client";
import { cn } from "@/lib/utils";
import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

function MaskedHeader({ src, children }: { src: string; children: ReactNode }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const clipPath = useTransform(
		scrollYProgress,
		[0, 0.3],
		[
			"polygon(41% 38%, 56% 34%, 60% 73%, 43% 58%)",
			"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		],
	);

	return (
		<section className="relative min-h-[300vh]" ref={ref}>
			<div className=" sticky top-0 w-full h-screen">
				<Image
					src={"/grids/grid-c.svg"}
					fill
					alt=""
					className="object-cover absolute inset-0"
				/>
				<div className="relative w-full h-full">
					<MaskedContent>{children}</MaskedContent>
					<motion.div
						className="relative w-full h-full"
						style={{
							clipPath,
							WebkitClipPath: clipPath,
						}}
					>
						<Image src={src} alt="" fill className="object-cover" />
						<div className="absolute inset-0 bg-black/40" />
						<MaskedContent className="z-20 text-white">
							{children}
						</MaskedContent>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default MaskedHeader;

function MaskedContent({
	className,
	children,
}: { className?: string; children?: ReactNode }) {
	return (
		<div
			className={cn(
				"absolute inset-0 flex flex-col gap-3 justify-center items-center text-center leading-tight",
				className,
			)}
		>
			{children}
		</div>
	);
}
