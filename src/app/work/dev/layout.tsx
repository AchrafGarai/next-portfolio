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

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import BlogNavigation from "@/components/navigation/blog-navigation";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

function Layout({ children }: { children: ReactNode }) {
	return (
		<div className=" flex flex-col ">
			<div className="flex gap-4 bg-background px-3 py-2 border-b justify-between items-center fixed top-0 w-full z-20">
				<div className="flex grow">
					<Image
						src="/vs-code.svg"
						alt=""
						width={32}
						height={32}
						className="mr-2"
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
					<Button size={"sm"} variant={"outline"} className=" rounded-full">
						Share
					</Button>
				</div>
			</div>

			<div className="flex grow w-full">
				{/* Side navigation  */}

				{/* secondary file nav section - file tree  */}
				<div className="flex border-r flex-col grow max-w-48 gap-4 h-screen sticky top-0 pt-16">
					<BlogNavigation />
					<div className="grow " />
					<div className="flex items-center gap-2 border-t p-2">
						<span className="text-xs flex-grow font-medium">Theme</span>
						<AnimatedThemeToggler />
					</div>
				</div>

				{/* main section - canvas  */}
				<div className="grow h-full p-6 pt-16">{children}</div>
			</div>
		</div>
	);
}

export default Layout;
