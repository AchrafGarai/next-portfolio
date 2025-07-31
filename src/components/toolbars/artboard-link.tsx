import React, { type ReactNode } from "react";
import ScrollLink from "@/components/ui/scroll-link";
import { LayersIcon } from "lucide-react";

function ArtboardLink({ to, children }: { to: string; children: ReactNode }) {
	return (
		<div className="flex gap-2 items-center">
			<LayersIcon size={14} />
			<ScrollLink to={to}>{children}</ScrollLink>
		</div>
	);
}

export default ArtboardLink;
