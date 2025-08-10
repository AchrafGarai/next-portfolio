import { cn } from "@/lib/utils";
import { Home, Palette, Pencil, FileText, Sun } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

interface NavItem {
	label: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	href: string;
	active?: boolean;
}

const navItems: NavItem[] = [
	{ label: "Home", icon: Home, href: "/", active: true },
	{ label: "Design", icon: Palette, href: "/work/ui/aichor" },
	{ label: "Branding", icon: Pencil, href: "/work/branding/aichor" },
	{ label: "Blog", icon: FileText, href: "/dev" },
];

export function Navbar() {
	return (
		<div className="sticky mt-[-90px] bottom-8 inset-x-0 z-50 flex justify-center ">
			<div className=" flex p-3 px-4 w-full max-w-2xl items-center rounded-full border border-neutral-300/60  bg-background/60 dark:bg-neutral-900/60  dark:border-white/10 backdrop-blur-xl gap-2">
				{navItems.map((item, i) => (
					<Link
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						href={item.href}
						className={cn(
							"flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors",
							item.active
								? "bg-foreground/80 text-background"
								: "text-foreground/80 hover:text-foreground",
						)}
					>
						<item.icon className="h-4 w-4" />
						<span>{item.label}</span>
					</Link>
				))}
				{/* Separator */}
				<div className="flex-grow " />

				{/* Separator */}
				<div className="mx-3 h-6 w-px bg-border dark:bg-neutral-900/60 " />

				{/* Theme toggle */}
				<div className="flex items-center gap-2 rounded-full text-sm text-foreground/80 hover:text-foreground">
					<span>Theme</span>
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
}
