import React from "react";
import Artbaord from "@/components/projects/artboard";
import BrandingGalley from "@/components/sections/branding-callery";
function Page() {
	return (
		<>
			<div className="flex flex-col grow justify-center items-center py-12 ">
				<div className="relative ">
					<Artbaord title="Artboard 1" />
					<div className="h-36 bg-linear-to-t from-background w-full absolute bottom-0" />
				</div>
				<div className="max-w-2xl mb-9 ">
					<div className=" flex flex-col gap-6 justify-center items-center">
						<h3 className="text-8xl font-tanker text-center">AIchor</h3>
						<p className="text-muted-foreground">
							Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu
							velit. At vel
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col grow min-h-screen justify-center items-center gap-40">
				<Artbaord title="Artboard 1" />
				<Artbaord title="Artboard 1" />
			</div>
			<BrandingGalley />
		</>
	);
}

export default Page;
