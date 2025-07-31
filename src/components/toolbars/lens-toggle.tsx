"use client";
import { useUIStore } from "@/lib/store";
import { Search } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function LensToggle() {
	const toggleLens = useUIStore((s) => s.toggleLens);
	return (
		<Tooltip delayDuration={800}>
			<TooltipTrigger asChild>
				<div className="flex items-center justify-center">
					<Toggle onClick={toggleLens} size={"sm"} variant={"ghost"}>
						<Search />
					</Toggle>
				</div>
			</TooltipTrigger>
			<TooltipContent>
				<p>Toggle Image Lens</p>
			</TooltipContent>
		</Tooltip>
	);
}
