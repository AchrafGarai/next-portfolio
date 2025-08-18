import { EyeDropperLens } from "@/components/toolbars/eye-dropper";
import BrandingNavigation from "@/components/navigation/branding-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { GridToggle } from "@/components/toolbars/grid-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

import {
	ChevronDownIcon,
	DownloadIcon,
	FramerLogoIcon,
} from "@radix-ui/react-icons";

import {
	BrushIcon,
	MousePointer2,
	PaletteIcon,
	SquareIcon,
	TypeIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import ScrollLink from "@/components/ui/scroll-link";
import { LensToggle } from "@/components/toolbars/lens-toggle";
import ArtboardLink from "@/components/toolbars/artboard-link";
import ProjectsNav from "@/components/toolbars/project-arbaord-navigation";
import { BrandingProjectMap } from "@/data/branding/projects";
import ProjectPalette from "@/components/toolbars/project-palette";
import { Pointer } from "@/components/magicui/pointer";
import PointerSelect from "@/components/toolbars/pointer-select";
import BrandingToolBar from "@/components/toolbars/branding-toolbar";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

async function Layout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="flex  grow relative">
			<div className="flex grow gap-6 w-full relative items-start">
				{/* Side navigation  */}
				<BrandingToolBar />
				{/* main section - canvas  */}
				<Container>
					<Pointer />
					{children}
				</Container>
				{/* right sidebar - inspector */}
				<div className="bg-background border-l w-56  sticky top-0 h-screen left-0 z-20 shadow-x flex flex-col justify-between">
					<div>
						<div className="p-4 flex justify-between items-center border-b">
							<div className="flex gap-1 items-center">
								<Avatar className="w-8 h-8">
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<ChevronDownIcon width={12} />
							</div>
							<div className="flex items-center gap-2">
								<Button
									size={"sm"}
									className=" rounded-full bg-blue-500 text-white hover:bg-blue-600"
								>
									Share
								</Button>
							</div>
						</div>
						<ProjectsNav />
						<div className="grow " />
					</div>
					<div className="p-4 py-1  flex items-center justify-between border-t">
						<span className="text-xs ">Theme</span>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Layout;
