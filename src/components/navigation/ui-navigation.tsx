import Link from "next/link";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UIProjectMap } from "@/data/ui/projects";

function UiNavigation() {
	return (
		<ScrollArea
			className="p-4 pb-0 flex flex-col gap-6 h-64"
			data-lenis-prevent
		>
			{UIProjectMap.map((project) => (
				<div className="py-1" key={project.slug}>
					<Link
						className="text-xs font-medium text-muted-foreground"
						href={`/work/ui/${project.slug}`}
					>
						<span className="truncate inline-block w-full">
							{project.title}
						</span>
					</Link>
				</div>
			))}
		</ScrollArea>
	);
}

export default UiNavigation;
