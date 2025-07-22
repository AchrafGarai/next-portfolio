import type { ProjectMetadata } from "..";
import { SectionTitle } from "@/components/projects/section-title";
import { Browser } from "@/components/projects/browser";
import Image from "next/image";
import ScrollImage from "@/components/projects/scroll-image";
import StudyStep from "@/components/projects/study-step";
import TransitionCard from "@/components/projects/transition-card";
import ProjectInfo from "@/components/projects/project-info";
import ProjectHighlight from "@/components/projects/project-highlight";
import React from "react";

export const metaData: ProjectMetadata = {
	slug: "hackages",
	title: "Hackages",
	slogan: "A Content-Driven Web Strategy",
	color: "#3ef2da",
	tag: "Website",
	description:
		"Designing a forward-looking, branded UI system to support AIchor's intelligent interface for technical researchers and developers.",
	coverImage: "/hackages/hero.png",
	intro: "Biometric login redesign using WebAuthn.",
	screens: [
		{ key: "home", title: "Home" },
		{ key: "topics", title: "Topics" },
		{ key: "trainings", title: "Trainings" },
		{ key: "footer", title: "Footer" },
		{ key: "training-list", title: "Training List" },
		{ key: "training-page", title: "Training Page" },
		{ key: "tutorials", title: "Tutorials" },
		{ key: "tutorials-list", title: "Tutorials list" },
		{ key: "webinars", title: "Webinars" },
	],
};

export function Content() {
	return (
		<>
			<ProjectInfo
				items={[
					{
						label: "My Role",
						values: ["Design Engineering", "Brand Identity Design"],
					},
					{
						label: "Team Size",
						values: ["08"],
					},
					{
						label: "Timeline",
						values: ["2022"],
					},
				]}
			/>

			<ProjectHighlight title="Challenge">
				<p>
					The aim was to create a unique visual identity that reflects
					intelligence and reliability, while building a scalable,
					developer-friendly UI system. We also focused on consistent motion,
					accessibility, and responsive performance across devices.
				</p>
			</ProjectHighlight>

			<Image
				src={"/hackages/mockup.jpg"}
				width={1280}
				height={720}
				quality={100}
				alt="Aichor "
				className=" rounded-4xl object-cover"
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

			<SectionTitle
				title={"An ever evolving UI"}
				tag={""}
				subtitle={"UI Showcase"}
			/>

			<div className="grid grid-cols-2 gap-24">
				{metaData.screens.map(({ key, title }) => (
					<TransitionCard
						key={key}
						href={`/work/ui/hackages/${key}`}
						transitionName={key}
					>
						<Browser imageSrc={`/hackages/screens/${key}.png`} title={title} />
					</TransitionCard>
				))}
			</div>

			<ScrollImage
				text="A Relaxing Music Experience"
				src={"/hackages/mockup-2.jpg"}
			/>
			<ProjectHighlight title="Result">
				<p>
					Lorem ipsum dolor sit amet consectetur. Maecenas ac turpis semper cras
					velit vulputate congue viverra. Maecenas nulla odio fringilla mi arcu
					faucibus ultrices cras. Tempus phasellus urna.222
				</p>
			</ProjectHighlight>
		</>
	);
}
