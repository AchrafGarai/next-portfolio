import type { ProjectMetadata } from "..";
import Image from "next/image";
import ScrollImage from "@/components/projects/scroll-image";
import StudyStep from "@/components/projects/study-step";
import ProjectHighlight from "@/components/projects/project-highlight";
import React from "react";
import { SectionTitle } from "@/components/projects/section-title";
import LogoGrid from "@/components/projects/logo-grid";
import LensImage from "@/components/projects/lens-image";

export const metaData: ProjectMetadata = {
	slug: "qdax",
	title: "Q-dax",
	slogan: "A thrilling adventure awaits",
	color: "#61fdf8",
	tag: "Library",
	material: {
		thickness: 0.9,
		roughness: 0.1,
		transmission: 1,
		ior: 0.6,
		chromaticAberration: 0.3,
		backside: false,
	},
	description:
		"Designing a forward-looking, branded UI system to support AIchor's intelligent interface for technical researchers and developers.",
	coverImage: "/branding/qdax/mockup-1.jpg",
	intro: "Biometric login redesign using WebAuthn.",
	logos: [
		{
			title: "Q-dax Mark",
			src: "qdax-mark",
			themed: false,
		},
		{
			title: "Q-dax Horizontal",
			src: "qdax-h",
			themed: true,
		},
		{
			title: "Q-dax Vertical",
			src: "qdax-v",
			themed: true,
		},
	],
	palette: [
		{
			name: "Primary",
			value: "#0b9e99",
		},
		{
			name: "Primary",
			value: "#61fdf8",
		},
	],
};

export function Content() {
	return (
		<>
			<ProjectHighlight title="Challenge">
				<p>
					The aim was to create a unique visual identity that reflects
					intelligence and reliability, while building a scalable,
					developer-friendly UI system. We also focused on consistent motion,
					accessibility, and responsive performance across devices.
				</p>
			</ProjectHighlight>
			<LensImage
				src={"/branding/qdax/mockup-2.jpg"}
				width={2000}
				height={488}
				quality={100}
				alt="Aichor "
			/>

			<StudyStep title="Process">
				<p className=" text-muted-foreground text-2xl">
					The process began with exploring visual themes and layout systems that
					aligned with the brand’s AI focus. I collaborated closely with
					designers and developers to translate these ideas into reusable
					components using Tailwind CSS and Framer Motion, ensuring consistency,
					responsiveness, and smooth interactions across the app.
				</p>
				<p className=" text-muted-foreground">
					The process began with exploring visual themes and layout systems that
					aligned with the brand’s AI focus. I collaborated closely with
					designers and developers to translate these ideas into reusable
					components using Tailwind CSS and Framer Motion, ensuring consistency,
					responsiveness, and smooth interactions across the app.
				</p>
			</StudyStep>
			<LensImage
				src={"/branding/qdax/mockup-3.jpg"}
				width={2250}
				height={1500}
				alt="Aichor "
			/>
			<section id="logo-showcase">
				<SectionTitle
					subtitle={"Logo Showcase"}
					title={"Aichor"}
					tag={""}
					className="mt-32"
				/>

				<div className="grid gap-8 grid-cols-2  ">
					<LogoGrid logos={metaData.logos} projectName={metaData.slug} />
				</div>
			</section>

			<StudyStep title="Action">
				<div className="flex flex-col gap-4 mt-2">
					<span>Focus</span>
					<p className=" text-muted-foreground">
						The process began with exploring visual themes and layout systems
						that aligned with the brand’s AI focus. I collaborated closely with
						designers and developers to translate these ideas into reusable
						components using Tailwind CSS and Framer Motion, ensuring
						consistency, responsiveness, and smooth interactions across the app.
					</p>
				</div>

				<div className="flex flex-col gap-4 mt-2">
					<span>Division</span>
					<p className=" text-muted-foreground">
						To avoid chaos, we clearly split responsibilities. While other team
						members focused on backend and infrastructure, I led the
						implementation of the UI system, CSS architecture, and interaction
						polish. I worked closely with the frontend team to integrate the
						components and ship features with consistency.
					</p>
				</div>

				<div className="flex flex-col gap-4 mt-2">
					<span>Execution</span>
					<p className=" text-muted-foreground">
						Every screen, every component was built with performance and clarity
						in mind. Animations were kept purposeful. Visual hierarchy was tuned
						for technical users. And collaboration with QA ensured that every
						interaction worked as intended across devices.
					</p>
				</div>
			</StudyStep>
			<ScrollImage
				text="Aichor - The AI platform"
				src={"/branding/qdax/mockup-4.jpg"}
			/>
			<ProjectHighlight title="Result">
				<p>
					Lorem ipsum dolor sit amet consectetur. Maecenas ac turpis semper cras
					velit vulputate congue viverra. Maecenas nulla odio fringilla mi arcu
					faucibus ultrices cras. Tempus phasellus urna.
				</p>
			</ProjectHighlight>
		</>
	);
}
