import Link from "next/link";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type Post = {
	slug: string;
	title: string;
};

export type Props = {
	posts: Post[];
};

function UiNavigation({ posts }: Props) {
	return (
		<ScrollArea
			className="p-4 pb-0 flex flex-col gap-6 h-64"
			data-lenis-prevent
		>
			{posts.map((post) => (
				<div className="py-1" key={post.slug}>
					<Link
						className="text-xs font-medium text-muted-foreground"
						href={`/work/ui/${post.slug}`}
					>
						<span className="truncate inline-block w-full">{post.title}</span>
					</Link>
				</div>
			))}
		</ScrollArea>
	);
}

export default UiNavigation;
