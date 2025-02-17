import { AboutProject } from "@/components/projects/about-project";
import Artboard from "@/components/projects/artboard";
import { Browser } from "@/components/projects/browser";
import { Logo3d } from "@/components/projects/logo-3d";
import ProjectHeader from "@/components/projects/project-header";
import BrandingGalley from "@/components/sections/branding-callery";
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

			{/* <div className="min-h-screen flex items-center justify-center">
				<Image
					className="drop-shadow-[0px_0px_194px_#0ea5e9]"
					width={128}
					height={128}
					src={"/aichor/aichor-logo.png"}
					alt=""
				/>
			</div> */}

			<AboutProject title="Aichor" tag="Saas" />

			{/* 
			<div className="grid grid-cols-2 gap-8 *:rounded-2xl *:min-h-[50vh] my-28">
				<Artboard
					title="Home Page"
					className="col-span-2"
					heading="Home Page"
					subHeading="Home Page"
					href="/aichor/home.png"
				/>
				<Artboard title="Home Page" className="row-span-2" />
				<Artboard title="Home Page" className="" />
				<Artboard title="Home Page" className="" />
			</div> */}

			<div className="grid grid-cols-2 gap-24">
				<Browser className="col-span-2" imageSrc="/aichor/home.png" />
				<Browser imageSrc="/aichor/home.png" />
				<Browser />
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
		</>
	);
}

export default Page;
