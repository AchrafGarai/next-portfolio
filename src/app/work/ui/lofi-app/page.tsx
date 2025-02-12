import Artbaord from "@/components/projects/artboard";
import { Logo3d } from "@/components/projects/logo-3d";
import ProjectHeader from "@/components/projects/project-header";
import BrandingGalley from "@/components/sections/branding-callery";

function Page() {
	return (
		<>
			<Logo3d title="lofiapp" color="#ffffff" />
			<ProjectHeader
				title={"Lo-fi Music"}
				description={
					"Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu velit. At vel"
				}
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
				<Artbaord title="Artboard 1" />
				<Artbaord title="Artboard 1" />
			</div>

			<BrandingGalley />
		</>
	);
}

export default Page;
