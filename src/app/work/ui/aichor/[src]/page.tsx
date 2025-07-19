import { BackButton } from "@/components/back-button";
import { Browser } from "@/components/projects/browser";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ src: string }>;
}) {
	const { src } = await params;

	const imageSrc = `/aichor/screens/${src}.png`;
	const linkHref = `/work/ui/aichor/${src}`;
	return (
		<>
			<BackButton />
			<ViewTransition name={src}>
				<Browser className="col-span-2" imageSrc={imageSrc} />
			</ViewTransition>
		</>
	);
}
