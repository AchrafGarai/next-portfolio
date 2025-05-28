import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
	experimental: {
		viewTransition: true,
	},
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [remarkFrontmatter],
		rehypePlugins: [rehypeHighlight],
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
