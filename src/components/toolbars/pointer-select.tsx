"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/lib/store";

// Array with separate bg and fill classes
const pointerColors = [
	{ bgClass: "bg-blue-500", fillClass: "fill-blue-500", label: "Blue" },
	{ bgClass: "bg-indigo-500", fillClass: "fill-indigo-500", label: "Indigo" },
	{ bgClass: "bg-zinc-900", fillClass: "fill-zinc-900", label: "Zinc" },
	{
		bgClass: "bg-emerald-500",
		fillClass: "fill-emerald-500",
		label: "Emerald",
	},
];

function PointerSelect() {
	const SetPointer = useUIStore((s) => s.setPointerColor);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size={"sm"} variant={"ghost"}>
					<MousePointer2 />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="ml-4">
				{pointerColors.map(({ bgClass, fillClass, label }) => (
					<>
						<DropdownMenuItem
							key={fillClass}
							onClick={() => SetPointer(fillClass)}
						>
							<div className={`w-3 h-3 border-b ${bgClass} rounded-sm`} />
							<span>{label}</span>
						</DropdownMenuItem>
					</>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default PointerSelect;
