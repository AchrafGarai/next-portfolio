import { cn } from "@/lib/utils";
import Image from "next/image";
import { Container } from "../ui/container";
const LEFT_TITLE = "CREATIVE";
const RIGHT_TITLE = "ENGINEERING";

function HeroSection() {
	return (
		<div className="relative h-screen overflow-hidden">
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
					<LeftTitle className="z-20  text-white mix-blend-difference " />
					<RightTitle className="z-20 text-white mix-blend-difference " />
				</div>
			</div>
		</div>
	);
}

export default HeroSection;

function LeftTitle({ className }: { className?: string }) {
	return (
		<div className={cn("absolute top-10 left-16 leading-tight ", className)}>
			<h1 className=" text-[10rem] font-bold font-tanker">{LEFT_TITLE}</h1>
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
			<p className="max-w-[600px] dark:text-white">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae
				accusantium, cumque perferendis iure, ipsam voluptas animi neque maxime
				vel nisi, similique quasi laboriosam quos exercitationem non veritatis
				omnis nesciunt.
			</p>
			<h1 className=" text-[10rem] font-bold font-tanker ">{RIGHT_TITLE}</h1>
		</div>
	);
}
