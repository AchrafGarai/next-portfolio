import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { AboutProject } from "@/components/projects/about-project";
import Artboard from "@/components/projects/artboard";
import { Browser } from "@/components/projects/browser";
import { Logo3d } from "@/components/projects/logo-3d";
import ProjectHeader from "@/components/projects/project-header";
import BrandingGalley from "@/components/sections/branding-callery";
import AnimatedImageList from "@/components/test/animated-list";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import Image from "next/image";
import ScrollImage from "@/components/projects/scroll-image";

const ImageSouurce = {
	lightSrc: "/aichor/aichor-experiments.png",
	darkSrc: "/aichor/aichor-experiments-dark.png",
};

function Page() {
	return (
		<>
			<Logo3d title="aichor" color="#6cd0ff" />
			<ProjectHeader
				title={"Aichor-Building a next Gen AI Platform"}
				description={
					"Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu velit. At vel"
				}
				imageSrc={ImageSouurce}
			/>

			<AboutProject title="Aichor" tag="Saas" />

			<div className="grid grid-cols-2 gap-24">
				<ViewTransition name="experimental-label">
					<Link href={"/work/ui/aichor/experimental-label"}>
						<Browser className="col-span-2" imageSrc="/aichor/home.png" />
					</Link>
				</ViewTransition>

				<Browser imageSrc="/aichor/home.png" />
				<Browser />
				<Browser />
				<Browser />
				<Browser />
				<Browser />
				<Browser />
			</div>

			<div className="min-h-screen flex flex-col gap-6 items-center justify-center text-2xl font-medium text-left *:w-full">
				<div className="max-w-2xl">
					<span className=" text-muted-foreground">Challenge</span>
					<p className="mt-6 font">
						Lorem ipsum dolor sit amet consectetur. Maecenas ac turpis semper
						cras velit vulputate congue viverra. Maecenas nulla odio fringilla
						mi arcu faucibus ultrices cras. Tempus phasellus urna.
					</p>
				</div>
			</div>

			<BrandingGalley />
			{/* <AnimatedImageList /> */}

			<div className="relative flex w-full flex-col items-center justify-center overflow-hidden uppercase min-h-screen ">
				<VelocityScroll defaultVelocity={1}>
					Aichor - The AI platfrom
				</VelocityScroll>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background " />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
				<Image
					src={"/aichor/aichor-mockup.jpg"}
					alt="aichor"
					width={600}
					height={420}
					className="mb-8 shadow-3xl rounded-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				/>
			</div>

			<ScrollImage />

			<div className="min-h-screen flex flex-col gap-6 items-center justify-center text-2xl font-medium text-left *:w-full">
				<div className="max-w-2xl">
					<span className=" text-muted-foreground">Result</span>
					<p className="mt-6 font">
						Lorem ipsum dolor sit amet consectetur. Maecenas ac turpis semper
						cras velit vulputate congue viverra. Maecenas nulla odio fringilla
						mi arcu faucibus ultrices cras. Tempus phasellus urna.
					</p>
				</div>
			</div>
		</>
	);
}

export default Page;
