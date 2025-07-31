import type { ProjectMetadata } from "..";
import { SectionTitle } from "@/components/projects/section-title";
import { Browser } from "@/components/projects/browser";
import Image from "next/image";
import ScrollImage from "@/components/projects/scroll-image";
import StudyStep from "@/components/projects/study-step";
import ListSection from "@/components/sections/list-section";
import Testimonial from "@/components/projects/testimonial";
import ThemedImage from "@/components/projects/themed-image";
import TransitionCard from "@/components/projects/transition-card";
import ProjectInfo from "@/components/projects/project-info";
import ProjectHighlight from "@/components/projects/project-highlight";

export const metaData: ProjectMetadata = {
	slug: "aichor",
	title: "AIchor",
	slogan: "Aichor - Building a next Gen AI Platform",
	color: "#6cd0ff",
	tag: "Saas",
	description:
		"Designing a forward-looking, branded UI system to support AIchor's intelligent interface for technical researchers and developers.",
	coverImage: "/aichor/aichor-hero.png",
	intro: "Biometric login redesign using WebAuthn.",
	screens: [
		{ key: "login", title: "Login" },
		{ key: "project", title: "Project" },
		{ key: "project-list", title: "Projects" },
		{ key: "vcs", title: "VCS" },
		{ key: "logs", title: "Logs" },
		{ key: "experiment-list", title: "Experiments" },
		{ key: "admins", title: "Admins" },
		{ key: "back-end-management", title: "Back-End Management" },
		{ key: "finops", title: "FinOps" },
		{ key: "resources", title: "Resources" },
		{ key: "storage", title: "Storage" },
		{ key: "users", title: "Users" },
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
						values: ["60"],
					},
					{
						label: "Timeline",
						values: ["2022 - Present"],
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
				src={"/aichor/aichor-mockup-3.jpg"}
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
						href={`/work/ui/aichor/${key}`}
						transitionName={key}
					>
						<Browser imageSrc={`/aichor/screens/${key}.png`} title={title} />
					</TransitionCard>
				))}
			</div>

			<section className=" my-48">
				<SectionTitle
					subtitle={"Design System"}
					title={"A Flexible System For The Web"}
					tag={""}
				/>
				<p className="text-2xl mb-12 text-left ">
					To build the design system for AIchor
					<span className=" text-muted-foreground">
						, I started by identifying common UI patterns and aligning them with
						the brand’s tone intelligent, minimal, and responsive. I focused on
						creating scalable components with a consistent layout grid, clear
						spacing rules, and accessible color and typography choices.
					</span>
				</p>
				<ThemedImage
					lightSrc={"/aichor/design-system-light.png"}
					darkSrc={"/aichor/design-system.png"}
					width={1280}
					height={720}
					alt="Aichor "
					className=" rounded-2xl object-cover border"
				/>
			</section>

			<ListSection
				title="Every pixel is built with user’s feedback in mind"
				subtitle="Every feature in AIchor is shaped by real feedback, helping us build a tool people actually enjoy using every day."
				components={[
					<Testimonial
						text="Saved me hours reading dense papers."
						imgSrc="/aichor/avatar.png"
						key="testimonial-1"
					/>,
					<Testimonial
						text="I love using this platform!"
						imgSrc="/aichor/avatar.png"
						key="testimonial-2"
					/>,
					<Testimonial
						text="I love using this platform!"
						imgSrc="/aichor/avatar.png"
						key="testimonial-3"
					/>,
				]}
			/>

			<ScrollImage
				text="Aichor - The AI platform"
				src={"/aichor/aichor-mockup.jpg"}
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
