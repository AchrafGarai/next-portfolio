import { getBlogPosts } from "@/lib/get-content";
import Link from "next/link";
import React from "react";

const posts = getBlogPosts();

function BlogNavigation() {
	console.log(posts);
	return (
		<>
			{posts.map((post) => (
				<Link
					key={post.slug}
					className="p-2 text-sm font-medium text-muted-foreground"
					href={`/work/dev/${post.slug}`}
				>
					<span className="truncate inline-block w-full">
						{post.metadata.title}
					</span>
				</Link>
			))}
		</>
	);
}

export default BlogNavigation;
