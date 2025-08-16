import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Image from "next/image";

function MaskedHeader({ src, children }: { src: string; children: ReactNode }) {
	return (
		<section className="h-screen">
			<div className="relative w-full h-full">
				<MasketContent>{children}</MasketContent>
				<div
					className="relative w-full h-full bg-indigo-500"
					style={{ clipPath: "polygon(41% 38%, 56% 34%, 60% 73%, 43% 58%)" }}
				>
					<Image src={src} alt={""} fill className="object-cover" />
					<MasketContent className=" z-20 text-white ">
						{children}
					</MasketContent>
				</div>
			</div>
		</section>
	);
}

export default MaskedHeader;

function MasketContent({
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
