import "@/styles/highlight.css";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
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
import BlogNavigation from "@/components/navigation/blog-navigation";

function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="h-screen flex flex-col ">
			<div className="flex gap-4 bg-background px-3 py-2 border-b justify-between items-center fixed top-0 w-full z-20">
				<div className="flex grow">
					<Image
						src="/vs-code.svg"
						alt=""
						width={32}
						height={32}
						className="mr-6"
					/>
					<Menubar className="rounded-none bg-background w-full border-none text-xs shadow-none">
						<MenubarMenu>
							<MenubarTrigger className="text-sm">Article</MenubarTrigger>
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
					</Menubar>
				</div>
				<div className="font-medium text-sm text-muted-foreground">
					My Web Dev Projects
				</div>
				<div className="flex grow justify-end ">
					<Button size={"sm"} className=" rounded-full">
						Share
					</Button>
				</div>
			</div>

			<div className="flex grow w-full">
				{/* Side navigation  */}

				{/* secondary file nav section - file tree  */}
				<div className="flex border-r flex-col grow max-w-64 gap-2 p-4 h-screen sticky top-0 pt-16">
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
					<BlogNavigation />
					{/* 					<ul className="flex flex-col grow max-w-64 gap-2">
						{allPosts.map((post) => (
							<Link
								key={post._meta.path}
								className="p-2 text-sm font-medium text-muted-foreground"
								href={`/work/dev/${post.slug}`}
							>
								<span className="truncate inline-block w-full">
									{post.title}
								</span>
							</Link>
						))}
					</ul> */}
				</div>

				{/* main section - canvas  */}
				<div className="grow h-full p-6 pt-16">{children}</div>

				{/* right sidebar - inspector */}
				<div className="flex flex-col h-screen bg-background border-l pt-16 sticky top-0">
					<div className="grow flex  flex-col gap-2 px-2 py-2 ">
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
