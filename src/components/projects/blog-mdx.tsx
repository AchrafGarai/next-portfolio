"use client";
import type React from "react";
import MdxLayout from "../mdx-layout";
import {
	MDXRemote,
	type MDXRemoteProps,
	type MDXRemoteSerializeResult,
} from "next-mdx-remote";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Artboard } from "@/components/projects/artboard";

function BlogMDX({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) {
	const components = { Button, Input, Artboard };
	return (
		<MdxLayout>
			<MDXRemote {...mdxSource} components={components} />
		</MdxLayout>
	);
}

export default BlogMDX;
