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

export function EyeDropperLens() {
	const [pickedColor, setPickedColor] = useState<string | null>(null);
	const [showTooltip, setShowTooltip] = useState(false);

	const handlePick = async () => {
		if (!("EyeDropper" in window)) {
			alert("EyeDropper API not supported in this browser.");
			return;
		}

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const eyeDropper = new (window as any).EyeDropper();
		try {
			const result = await eyeDropper.open();
			const color = result.sRGBHex;
			setPickedColor(color);
			await navigator.clipboard.writeText(color);
			setShowTooltip(true);
			setTimeout(() => setShowTooltip(false), 1500);
		} catch (err) {
			console.error("EyeDropper cancelled or failed.", err);
		}
	};

	return (
		<TooltipProvider>
			<div className="flex flex-col items-center gap-4">
				<Tooltip open={showTooltip}>
					<TooltipTrigger asChild>
						<Button onClick={handlePick} variant="ghost" className="p-2">
							<PipetteIcon className="w-5 h-5" />
						</Button>
					</TooltipTrigger>
					<TooltipContent side="top">Copied!</TooltipContent>
				</Tooltip>
			</div>
		</TooltipProvider>
	);
}
