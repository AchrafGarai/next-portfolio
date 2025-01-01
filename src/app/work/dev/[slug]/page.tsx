import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import BlogMDX from "@/components/projects/blog-mdx";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const slug = (await params).slug;
	console.log(slug);

	const post = allPosts.find((post) => post.slug === slug);
	if (!post) {
		return notFound();
	}
	const mdxSource = await serialize(post.content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [rehypeHighlight],
		},
	});

	return (
		<article className="post mb-24">
			<div className=" max-w-2xl mx-auto my-10 ">
				<div className=" flex gap-3 items-center  mb-10">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className=" flex flex-col ">
						<span>{post.author}</span>
						<span className="text-sm text-muted-foreground">
							Senior UI Specialist
						</span>
					</div>
				</div>
				<h1 className=" font-tanker text-8xl mb-9 ">{post.title}</h1>
				<BlogMDX mdxSource={mdxSource} />
			</div>
		</article>
	);
}
