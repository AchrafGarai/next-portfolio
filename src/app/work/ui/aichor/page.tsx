import Artboard from "@/components/projects/artboard";
import Artbaord from "@/components/projects/artboard";
import { Logo3d } from "@/components/projects/logo-3d";
import ProjectHeader from "@/components/projects/project-header";
import BrandingGalley from "@/components/sections/branding-callery";
import { Container } from "@/components/ui/container";
import Image from "next/image";
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

			<div className="min-h-screen flex items-center justify-center">
				<Image
					className="drop-shadow-[0px_0px_194px_#0ea5e9]"
					width={128}
					height={128}
					src={"/aichor/aichor-logo.png"}
					alt=""
				/>
			</div>

			<div className="text-2xl font-medium text-left my-96">
				<div className=" pb-6 border-b flex ">
					<div className="flex-grow flex  items-start gap-4">
						<span className=" text-muted-foreground">About</span>
						<span>Aichor</span>
					</div>
					<div>Case Study</div>
				</div>
				<p className="mt-6 font">
					Lorem ipsum dolor sit amet consectetur. Maecenas ac turpis semper cras
					velit vulputate congue viverra. Maecenas nulla odio fringilla mi arcu
					faucibus ultrices cras. Tempus phasellus urna.
				</p>
			</div>

			<div className="grid grid-cols-2 gap-8 *:rounded-2xl *:min-h-[50vh] my-28">
				<Artboard
					title="Home Page"
					className="col-span-2"
					heading="Home Page"
					subHeading="Home Page"
				/>
				<Artboard title="Home Page" className="row-span-2" />
				<Artboard title="Home Page" className="" />
				<Artboard title="Home Page" className="" />
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
		</>
	);
}

export default Page;
