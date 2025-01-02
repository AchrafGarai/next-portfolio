import { getBlogPosts } from "@/lib/get-content";

type Props = {
	params: Promise<{ slug: string }>;
};

async function Page({ params }: Props) {
	const slug = (await params).slug;
	const { default: Post } = await import(`@/content/dev/${slug}.mdx`);

	return <Post />;
}

export default Page;

export function generateStaticParams() {
	const posts = getBlogPosts();
	return posts.map((post) => ({ params: { slug: post.slug } }));
}

export const dynamicParams = false;
