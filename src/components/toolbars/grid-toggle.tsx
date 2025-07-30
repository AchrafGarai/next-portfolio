"use client";
import { useUIStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { GridIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export function GridToggle() {
	const toggleGrid = useUIStore((s) => s.toggleGrid);
	return (
		<Toggle onClick={toggleGrid} size={"sm"} variant={"ghost"}>
			<GridIcon />
		</Toggle>
	);
}
