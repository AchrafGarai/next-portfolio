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
import { ChatBubbleIcon, FileIcon } from "@radix-ui/react-icons";

import {
	BlocksIcon,
	FilesIcon,
	GitFork,
	PlayIcon,
	Settings,
	User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex gap-4 bg-accent px-3 py-2 border-b justify-between items-center">
				<div className="flex flex-grow">
					<Image
						src="/vs-code.svg"
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
					My Web Dev Projects
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
					<div className="flex-grow flex  flex-col gap-2 ">
						<Button size={"sm"} variant={"ghost"}>
							<FileIcon />
						</Button>
						<Button size={"sm"} variant={"ghost"}>
							<GitFork />
						</Button>
						<Button size={"sm"} variant={"ghost"}>
							<PlayIcon />
						</Button>
						<Button size={"sm"} variant={"ghost"}>
							<BlocksIcon />
						</Button>
					</div>
					<div className="flex  flex-col gap-2 ">
						<Button size={"sm"} variant={"ghost"}>
							<Settings />
						</Button>
						<Button size={"sm"} variant={"ghost"}>
							<User />
						</Button>
					</div>
				</div>
				{/* secondary file nav section - file tree  */}
				<div className="flex border-r flex-col flex-grow max-w-64 gap-2 p-4 h-full">
					<Link
						className="p-2 text-sm font-medium hover:text-muted-foreground "
						href={""}
					>
						<span className="truncate inline-block w-full">
							Nextjs Setup with Clerk
						</span>
					</Link>
					<Link
						className="p-2 text-sm font-medium text-muted-foreground"
						href={""}
					>
						<span className="truncate inline-block w-full">
							Radiant: A beautiful new marketing site template
						</span>
					</Link>
				</div>

				{/* main section - canvas  */}
				<div className="flex-grow h-full p-6">{children}</div>

				{/* right sidebar - inspector */}
				<div className="flex flex-col h-full bg-accent border-l">
					<div className="flex-grow flex  flex-col gap-2 px-2 py-2 ">
						<Button size={"sm"} variant={"ghost"}>
							<ChatBubbleIcon />
						</Button>
					</div>
					<div className="flex justify-center mb-4">
						<ThemeToggle />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Layout;