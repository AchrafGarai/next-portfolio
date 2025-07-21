import { Logo3d } from "@/components/projects/logo-3d";
import ProjectHeader from "@/components/projects/project-header";
import { SectionTitle } from "@/components/projects/section-title";
import { projectMap } from "@/data/ui/projects";
import { notFound } from "next/navigation";
import React from "react";

async function Page({
	params,
}: {
	params: Promise<{ project: string }>;
}) {
	const { project } = await params;

	const projectData = projectMap[project];

	if (!projectData) return notFound();
	const ProjectComponent = projectData.content;
	const metadata = projectData.metadata;

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

			<ProjectHeader title={metadata.slogan} imageSrc={metadata.coverImage} />
			<ProjectComponent />
		</>
	);
}

export default Page;
