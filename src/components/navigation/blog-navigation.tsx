import { getBlogPosts } from "@/lib/get-content";
import Link from "next/link";
import React from "react";

const posts = getBlogPosts();

function BlogNavigation() {
	return (
		<div className="p-2 text-sm">
			{posts.map((post) => (
				<div
					key={post.slug}
					className="px-2 py-1 flex-items-center text-muted-foreground hover:text-foreground transition-colors ease-in-out rounded-md"
				>
					<Link className="" href={`/work/dev/${post.slug}`}>
						<span className="truncate inline-block w-full">
							{post.metadata.title}
						</span>
					</Link>
				</div>
			))}
		</div>
	);
}

export default BlogNavigation;
