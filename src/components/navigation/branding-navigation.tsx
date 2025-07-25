import Link from "next/link";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EyeIcon, LockIcon } from "lucide-react";
type Post = {
	slug: string;
	title: string;
};

export type Props = {
	posts: Post[];
};

function BrandingNavigation({ posts }: Props) {
	return (
		<ScrollArea
			className="p-4 pb-0 flex flex-col gap-2 min-h-48 border-b"
			data-lenis-prevent
		>
			{posts.map((post) => (
				<div key={post.slug}>
					<Link
						className="py-2 flex gap-4 items-center text-xs text-muted-foreground"
						href={`/work/branding/${post.slug}`}
					>
						<EyeIcon className=" text-muted-foreground" width={12} />
						<span className="grow">{post.title}</span>
					</Link>
				</div>
			))}
		</ScrollArea>
	);
}

export default BrandingNavigation;
