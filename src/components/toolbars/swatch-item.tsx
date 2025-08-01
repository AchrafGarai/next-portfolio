"use client";
import { toast } from "sonner";
import type { ColorSwatch } from "@/data/branding/projects";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

type SwatchItemProps = {
	swatch: ColorSwatch;
} & React.ComponentProps<typeof DropdownMenuItem>;

export default function SwatchItem({
	swatch,
	children,
	...rest
}: SwatchItemProps) {
	return (
		<DropdownMenuItem
			{...rest}
			className=" flex items-center text-xs"
			onClick={() =>
				toast("Event has been created", {
					description: "Sunday, December 03, 2023 at 9:00 AM",
				})
			}
		>
			<div
				className={"w-3 h-3 rounded-sm "}
				style={{ backgroundColor: swatch.value }}
			/>
			<span className="min-w-20">{swatch.name}</span>
			<span className=" text-muted-foreground">{swatch.value}</span>
		</DropdownMenuItem>
	);
}
