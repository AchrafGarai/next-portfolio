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
	return [{ slug: "test" }, { slug: "about" }];
}

export const dynamicParams = false;
