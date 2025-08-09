import { cn } from "@/lib/utils";
import { Home, Palette, Pencil, FileText, Sun } from "lucide-react";
import Link from "next/link";

interface NavItem {
	label: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	href: string;
	active?: boolean;
}

const navItems: NavItem[] = [
	{ label: "Home", icon: Home, href: "/", active: true },
	{ label: "Design", icon: Palette, href: "/design" },
	{ label: "Branding", icon: Pencil, href: "/branding" },
	{ label: "Blog", icon: FileText, href: "/blog" },
];

export function Navbar() {
	return (
		<div className="sticky mt-[-90px] bottom-8 inset-x-0 z-50 flex justify-center ">
			<div className="dark flex p-3 px-4 w-full max-w-3xl items-center rounded-full border  bg-background/60 dark:bg-neutral-900/60 dark:border border-white/10 backdrop-blur-xl gap-2">
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
				<div className="mx-3 h-6 w-px bg-white/20 " />

				{/* Theme toggle */}
				<Link
					href={""}
					className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-foreground/80 hover:text-foreground"
				>
					<Sun className="h-4 w-4" />
					<span>Theme</span>
				</Link>
			</div>
		</div>
	);
}
