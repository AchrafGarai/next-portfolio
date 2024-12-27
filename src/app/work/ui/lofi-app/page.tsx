import Artbaord from "@/components/projects/artboard";
import BrandingGalley from "@/components/sections/branding-callery";

function Page() {
	return (
		<>
			<div className="flex flex-col flex-grow  min-h-screen justify-center items-center">
				<div className="relative ">
					<Artbaord title="Artboard 1" />
					<div className="h-36 bg-gradient-to-t from-background w-full absolute bottom-0" />
				</div>
				<div className="max-w-2xl ">
					<div className=" flex flex-col gap-6 justify-center items-center">
						<h3 className="text-9xl font-tanker text-center">Lo-fi Music</h3>
						<p className="text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu
							velit. At vel
						</p>
					</div>
				</div>
			</div>
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
