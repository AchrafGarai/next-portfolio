import { BackButton } from "@/components/back-button";
import { Browser } from "@/components/projects/browser";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ screen: string; project: string }>;
}) {
	const { screen, project } = await params;

	const imageSrc = `/${project}/screens/${screen}.png`;
	return (
		<>
			<BackButton />
			<ViewTransition name={screen}>
				<Browser className="col-span-2" imageSrc={imageSrc} />
			</ViewTransition>
		</>
	);
}
