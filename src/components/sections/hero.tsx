import { cn } from "@/lib/utils";
import Image from "next/image";
import { Container } from "../ui/container";
import ThemedImage from "@/components/projects/themed-image";
const LEFT_TITLE = "DESIGN";
const RIGHT_TITLE = "ENGINEERING";

function HeroSection() {
	return (
		<section className=" relative border-b">
			<Image
				src={"/grids/grid-a.svg"}
				fill
				alt={""}
				className="object-cover absolute inset-0"
			/>
			<ThemedImage
				lightSrc={"/landscape-light.png"}
				darkSrc={"/landscape.png"}
				fill
				alt={""}
				className="object-fill absolute inset-0 "
			/>
			<div className="relative h-screen overflow-hidden  inset-0">
				{/* Background titles */}

				<div className=" max-w-[1980px] mx-auto relative w-full h-full">
					<LeftTitle />
					<RightTitle />
				</div>

				<div
					className="absolute top-0 left-0 w-full h-full bg-indigo-500"
					style={{ clipPath: "polygon(21% 16%, 86% 29%, 100% 82%, 0 60%)" }}
				>
					<Image
						src={"/branding/lofiapp/mockup-2.jpg"}
						fill
						className=" object-cover"
						alt={""}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
					{/* Foreground titles  */}
					<div className=" max-w-[1980px] w-full h-full mx-auto relative">
						<LeftTitle className="z-20  text-white " />
						<RightTitle className="z-20 text-white " />
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;

function LeftTitle({ className }: { className?: string }) {
	return (
		<div className={cn("absolute top-10 left-16 leading-tight ", className)}>
			<h1 className=" text-[10rem] font-bold font-heading uppercase">
				{LEFT_TITLE}
			</h1>
		</div>
	);
}

function RightTitle({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				className,
				"absolute bottom-24 left-16 flex justify-between items-center right-16 leading-tight   ",
			)}
		>
			<p className="max-w-[400px]  text-muted-foreground text-xs uppercase tracking-widest">
				From imagination to interaction — I engineer digital experiences that
				push the boundaries of design and technology, shaping a web that’s as
				dynamic as it is beautiful.
			</p>
			<h1 className=" text-[10rem] font-bold font-heading uppercase ">
				{RIGHT_TITLE}
			</h1>
		</div>
	);
}
