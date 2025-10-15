import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import { getBlogPostsMetaData } from "@/lib/get-content"; // adjust path
import Link from "next/link";

function Page() {
	const posts = getBlogPostsMetaData();
	return (
		<>
			{posts.map((post) => (
				<Link href={`/work/dev/${post.slug}`} key={post.slug}>
					<div className=" max-w-2xl mx-auto my-10 border-b pb-5">
						<p className=" text-sm text-muted-foreground mb-2">
							{post.metadata.publishedAt}
						</p>
						<h2 className=" font-heading text-4xl mb-2">
							{post.metadata.title}
						</h2>
						<p className=" text-muted-foreground">{post.metadata.summary}</p>
					</div>
				</Link>
			))}
		</>
	);
}

export default Page;
