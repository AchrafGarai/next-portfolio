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
import React, { Suspense } from "react";
import LensImage from "@/components/projects/lens-image";

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
			<section id="logo">
				<Suspense fallback={null}>
				<Logo3d
					title={metadata.slug}
					color={metadata.color}
					content={metadata.title}
					material={metadata?.material}
				/>

				</Suspense>
			</section>
			<SectionTitle
				title={metadata.title}
				subtitle="About"
				tag={metadata.tag}
				className="my-64"
			>
				<p className="mt-6 text-2xl">{metadata.description}</p>
			</SectionTitle>

			<section className="mx-auto max-w-screen" id="visual">
				<LensImage
					src={metadata.coverImage}
					alt=""
					width={1920}
					height={1080}
					className="rounded-2xl"
				/>
			</section>

			<Content />
		</>
	);
}

export default Page;
