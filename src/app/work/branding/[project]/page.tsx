import { Logo3d } from "@/components/projects/logo-3d";
import ProjectHeader from "@/components/projects/project-header";
import { SectionTitle } from "@/components/projects/section-title";
import {
	BrandingprojectContentMap,
	BrandingProjectMap,
} from "@/data/branding/projects";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/ui/container";

async function Page({
	params,
}: {
	params: Promise<{ project: string }>;
}) {
	const { project } = await params;

	const metadata = BrandingProjectMap.find((p) => p.slug === project);

	if (!metadata) return notFound();
	const Content = dynamic(BrandingprojectContentMap[project]);

	return (
		<>
			<Logo3d
				title={metadata.slug}
				color={metadata.color}
				content={metadata.title}
				material={metadata?.material}
			/>
			<SectionTitle
				title={metadata.title}
				subtitle="About"
				tag={metadata.tag}
				className="my-64"
			>
				<p className="mt-6 text-2xl">{metadata.description}</p>
			</SectionTitle>

			<div className="mx-auto max-w-screen">
				<Image
					src={metadata.coverImage}
					alt=""
					width={1920}
					height={1080}
					className="rounded-2xl"
				/>
			</div>

			<Content />
		</>
	);
}

export default Page;
