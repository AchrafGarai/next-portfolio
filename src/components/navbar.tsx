"use client";
import { Dock, DockIcon } from "@/components/ui/dock";
import { FigmaLogoIcon, GitHubLogoIcon, HomeIcon } from "@radix-ui/react-icons";
import { CodeIcon, HouseIcon, PaletteIcon } from "lucide-react";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function Navbar() {
	return (
		<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-8 z-50">
			<Dock direction="middle">
				<DockIcon>
					<Link href={"/"}>
						<HouseIcon className="w-5" />
					</Link>
				</DockIcon>
				<DockIcon>
					<Link href={"/work/ui"}>
						<FigmaLogoIcon className="w-5" width={20} height={20} />
					</Link>
				</DockIcon>
				<DockIcon>
					<Link href={"/work/branding"}>
						<PaletteIcon className="w-5" />
					</Link>
				</DockIcon>
				<DockIcon>
					<Link href={"/work/dev"}>
						<CodeIcon className="w-5" />
					</Link>
				</DockIcon>
			</Dock>
		</div>
	);
}
