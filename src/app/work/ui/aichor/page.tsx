import Artbaord from "@/components/projects/artboard";
import ProjectHeader from "@/components/projects/project-header";
import BrandingGalley from "@/components/sections/branding-callery";
const ImageSouurce = {
	lightSrc: "/aichor/aichor-experiments.png",
	darkSrc: "/aichor/aichor-experiments-dark.png",
};

function Page() {
	return (
		<>
			<ProjectHeader
				title={"Aichor-Building a next Gen AI Platform"}
				description={
					"Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu velit. At vel"
				}
				imageSrc={ImageSouurce}
			/>
			<div className="flex flex-grow  h-screen justify-center items-center ">
				<div className="max-w-2xl ">
					<div className=" flex flex-col gap-6 justify-center items-center">
						<p>
							Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu
							velit. At vel
						</p>
						<h3 className="text-6xl font-tanker text-center">
							Discover the world's largest shared adventure, crafted by everyone
						</h3>
					</div>
				</div>
			</div>
			<div className="flex flex-col flex-grow min-h-screen justify-center items-center gap-40">
				<Artbaord
					title="Artboard 1"
					className=" bg-gradient-to-b from-sky-400 to-indigo-600 "
					href="/aichor/aichor-experiments.png"
				/>
				<Artbaord title="Artboard 1" />
			</div>
			<BrandingGalley />
		</>
	);
}

export default Page;
