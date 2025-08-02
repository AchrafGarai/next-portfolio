"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckIcon, PipetteIcon } from "lucide-react";
import { toast } from "sonner";

export function EyeDropperLens() {
	const handlePick = async () => {
		if (!("EyeDropper" in window)) {
			alert("EyeDropper API not supported in this browser.");
			return;
		}

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const eyeDropper = new (window as any).EyeDropper();

		const result = await eyeDropper.open();
		const color = result.sRGBHex;
		navigator.clipboard
			.writeText(color)
			.then(() => toast.success(`Copied Hex code to clipboard  ${color}`, {}))
			.catch(() => toast.error("Failed to copy color"));
	};

	return (
		<div className="flex flex-col items-center gap-4">
			<Button onClick={handlePick} variant="ghost" className="p-2">
				<PipetteIcon className="w-5 h-5" />
			</Button>
		</div>
	);
}
