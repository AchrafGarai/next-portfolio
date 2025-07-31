"use client";
import { BrandingProjectMap, type ColorSwatch } from "@/data/branding/projects";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PaletteIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

function ProjectPalette() {
	const params = useParams();
	const project = params?.project;
	const metadata = BrandingProjectMap.find((p) => p.slug === project);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size={"sm"} variant={"ghost"}>
					<PaletteIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className=" ml-4">
				{/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
				{metadata?.palette.map((color, index) => {
					return (
						<>
							{/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
							<SwatchItem key={index} swatch={color} />
						</>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default ProjectPalette;

type SwatchItemProps = {
	swatch: ColorSwatch;
} & React.ComponentProps<typeof DropdownMenuItem>;

function SwatchItem({ swatch, children, ...rest }: SwatchItemProps) {
	return (
		<DropdownMenuItem {...rest} className=" flex items-center text-xs">
			<div
				className={"w-3 h-3 rounded-sm "}
				style={{ backgroundColor: swatch.value }}
			/>
			<span>{swatch.name}</span>
			<span className=" text-muted-foreground">{swatch.value}</span>
		</DropdownMenuItem>
	);
}
