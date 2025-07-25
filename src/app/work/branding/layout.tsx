import BrandingNavigation from "@/components/navigation/branding-navigation";
import { ShareProject } from "@/components/projects/share-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
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
import {
	ChevronDownIcon,
	DownloadIcon,
	FramerLogoIcon,
} from "@radix-ui/react-icons";

import {
	BrushIcon,
	MousePointer2,
	PenTool,
	PipetteIcon,
	SquareIcon,
	TypeIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const posts = [
	{
		slug: "aichor",
		title: "AIchor",
	},
	{
		slug: "lofi-app",
		title: "Lofi App",
	},
];

function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex  grow relative">
			{/* <div className="flex gap-4 bg-accent px-3 py-2 border-b justify-between items-center fixed min-h-14 w-full top-0 z-20">
				<div className="flex grow">
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
				<div className="flex grow justify-end ">
					<ShareProject />
				</div>
			</div> */}

			<div className="flex grow gap-6 w-full relative items-start">
				{/* Side navigation  */}

				<div className="flex flex-col   bg-background border-r sticky right-0 top-0 h-screen  shadow-xs ">
					<div className="flex flex-col w-fit gap-2  p-2 ">
						{/* <Image
							src="/adobe-illustrator.svg"
							alt=""
							width={32}
							height={32}
							className="mx-auto mb-4"
						/> */}
						<div className="mx-auto mb-4  rounded-md flex items-center justify-center font-semibold bg-[#330000] text-[#FF9A00] w-8 h-8">
							Ag
						</div>
						<span>
							<Button size={"sm"} variant={"ghost"}>
								<MousePointer2 />
							</Button>
						</span>
						<span>
							<Button size={"sm"} variant={"ghost"}>
								<TypeIcon />
							</Button>
						</span>
						<span>
							<Button size={"sm"} variant={"ghost"}>
								<SquareIcon />
							</Button>
						</span>
						<span>
							<Button size={"sm"} variant={"ghost"}>
								<PenTool />
							</Button>
						</span>
						<span>
							<Button size={"sm"} variant={"ghost"}>
								<BrushIcon />
							</Button>
						</span>
						<span>
							<Button size={"sm"} variant={"ghost"}>
								<PipetteIcon />
							</Button>
						</span>
					</div>
				</div>
				{/* main section - canvas  */}
				<Container>{children}</Container>
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

						<div className="flex gap-3 p-4 border-b">
							<span className="text-sm">Projects</span>
							<span className="text-sm text-m ">Artboards</span>
						</div>

						<BrandingNavigation posts={posts} />
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
