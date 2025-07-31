"use client";
import { Dock, DockIcon } from "@/components/ui/dock";
import { FigmaLogoIcon, GitHubLogoIcon, HomeIcon } from "@radix-ui/react-icons";
import { CodeIcon, HouseIcon, PaletteIcon } from "lucide-react";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function Navbar() {
	return (
		<div className="sticky mt-[-90px] bottom-8 inset-x-0 z-50 flex justify-center ">
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
