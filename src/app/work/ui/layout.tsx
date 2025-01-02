import UiNavigation from "@/components/navigation/ui-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon, FigmaLogoIcon } from "@radix-ui/react-icons";
import { PlayIcon, SidebarIcon } from "lucide-react";
import type { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="min-h-screen flex relative">
				{/* Side navigation  */}
				<div className="sticky top-0 min-h-screen w-full flex-grow max-w-64 h-full bg-accent border-r">
					<div className=" p-4 pb-0 flex justify-between items-center">
						<FigmaLogoIcon width={18} />
						<SidebarIcon width={16} />
					</div>
					<div className="p-4 border-b">
						<p className="text-sm">Achraf garai</p>
						<p className="text-xs text-muted-foreground">Drafts</p>
					</div>
					<div className="border-b relative">
						<p className=" p-4 pb-0 text-xs sticky top-0">Pages</p>
						<UiNavigation />
					</div>
				</div>
				{/* main section - canvas  */}
				<div className="flex-grow h-sreen text-center p-4 ">{children}</div>

				{/* right sidebar - inspector */}
				<div className="sticky top-0 min-h-screen flex-grow max-w-64 h-full bg-accent border-l">
					<div className="p-4 flex justify-between items-center border-b">
						<div className="flex gap-1 items-center">
							<Avatar className="w-8 h-8">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<ChevronDownIcon width={12} />
						</div>
						<div className="flex items-center gap-2">
							<Button variant="ghost" size="icon">
								<PlayIcon width={16} />
							</Button>
							<Button size={"sm"}>Share</Button>
						</div>
					</div>
					<div className="p-4 py-1 border-b flex items-center justify-between">
						<div className=" flex gap-2 text-xs">
							<span>Design</span>
							<span className="text-muted-foreground">Prototype</span>
						</div>
						<Select>
							<SelectTrigger className=" w-20 border-none text-xs">
								<SelectValue placeholder="30%" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="30">30%</SelectItem>
									<SelectItem value="50">50%</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className="p-4 py-1 border-b flex items-center justify-between">
						<span className="text-xs text-muted-foreground">Theme</span>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</>
	);
}

export default Layout;
