"use client";
import { useUIStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { GridIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function GridToggle() {
	const toggleGrid = useUIStore((s) => s.toggleGrid);
	return (
		<Tooltip delayDuration={1200}>
			<TooltipTrigger asChild>
				<div className="flex items-center justify-center">
					<Toggle onClick={toggleGrid} size={"sm"} variant={"ghost"}>
						<GridIcon />
					</Toggle>
				</div>
			</TooltipTrigger>
			<TooltipContent>
				<p>Toggle logo grid</p>
			</TooltipContent>
		</Tooltip>
	);
}
