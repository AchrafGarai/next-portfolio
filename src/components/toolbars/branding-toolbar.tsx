import React from "react";
import PointerSelect from "./pointer-select";
import ProjectPalette from "./project-palette";
import { GridToggle } from "./grid-toggle";
import { LensToggle } from "./lens-toggle";
import { EyeDropperLens } from "./eye-dropper";

function BrandingToolBar() {
	return (
		<div className="sticky  top-0 h-full max-h-screen inset-x-0 z-50 flex justify-center ">
			<div className=" mr-16 flex flex-col p-4 items-center border-r  backdrop-blur-xl gap-2">
				<div className="mx-auto mb-4  rounded-md flex items-center justify-center font-semibold bg-[#330000] text-[#FF9A00] w-8 h-8">
					Ag
				</div>
				<PointerSelect />
				<ProjectPalette />
				<GridToggle />
				<LensToggle />
				<EyeDropperLens />
			</div>
		</div>
	);
}

export default BrandingToolBar;
