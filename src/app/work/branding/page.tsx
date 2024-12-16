import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
	BrushIcon,
	EyeIcon,
	LockIcon,
	MousePointer2,
	PenTool,
	PipetteIcon,
	SquareIcon,
	TypeIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function Page() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex gap-4 bg-accent px-3 py-2 border-b justify-between items-center">
				<div className="flex flex-grow">
					<Image
						src="/adobe-illustrator.svg"
						alt=""
						width={32}
						height={32}
						className="mr-6"
					/>
					<Menubar className="rounded-none bg-accent w-full border-none text-xs shadow-none">
						<MenubarMenu>
							<MenubarTrigger className="text-sm">File</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>
									New Tab <MenubarShortcut>⌘T</MenubarShortcut>
								</MenubarItem>
								<MenubarItem>New Window</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>Share</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>Print</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger className="text-sm">Edit</MenubarTrigger>
						</MenubarMenu>
					</Menubar>
				</div>
				<div className="font-medium text-sm text-muted-foreground">
					My Branding Projects.ai
				</div>
				<div className="flex flex-grow justify-end ">
					<Button size={"sm"} className=" rounded-full">
						Share
					</Button>
				</div>
			</div>

			<div className="flex flex-grow w-full">
				{/* Side navigation  */}
				<div className="h-full bg-accent border-r flex flex-col gap-2 p-2 py-4 text-muted-foreground">
					<Button size={"sm"} variant={"ghost"}>
						<MousePointer2 />
					</Button>
					<Button size={"sm"} variant={"ghost"}>
						<TypeIcon />
					</Button>
					<Button size={"sm"} variant={"ghost"}>
						<SquareIcon />
					</Button>
					<Button size={"sm"} variant={"ghost"}>
						<PenTool />
					</Button>
					<Button size={"sm"} variant={"ghost"}>
						<BrushIcon />
					</Button>
					<Button size={"sm"} variant={"ghost"}>
						<PipetteIcon />
					</Button>
				</div>
				{/* main section - canvas  */}
				<div className="flex-grow h-full" />

				{/* right sidebar - inspector */}
				<div className="flex flex-col flex-grow max-w-64 h-full bg-accent border-l">
					<div className="flex gap-3 p-4 border-b">
						<span className="text-sm">Layers</span>
						<span className="text-sm text-muted-foreground">Artboards</span>
					</div>
					<div className="p-3 border-b">
						<Input placeholder="Search Layers" className="bg-background" />
					</div>
					<ScrollArea className="p-3 border-b h-40 text-xs">
						<div className="py-2 flex gap-4 items-center">
							<EyeIcon className=" text-muted-foreground" width={12} />
							<span className="flex-grow">Project 1</span>
							<LockIcon className=" text-muted-foreground" width={12} />
						</div>
						<div className="py-2 flex gap-4 items-center">
							<EyeIcon className=" text-muted-foreground" width={12} />
							<span className="flex-grow">Project 1</span>
							<LockIcon className=" text-muted-foreground" width={12} />
						</div>
					</ScrollArea>
					<div className="flex-grow " />
					<div className="p-4 py-1 border-t flex items-center justify-between">
						<span className="text-xs text-muted-foreground">Theme</span>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;
