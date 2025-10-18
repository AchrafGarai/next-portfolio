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
		"Aichor.ai is a platform designed to help teams build, deploy, and monitor machine learning models more intuitively through a unified web interface. My task was to design and engineer the entire UI layer — building a scalable design system and implementing it in production using Next.js, Tailwind CSS, and shadcn/ui.",
	coverImage: "/aichor/aichor-hero.png",
	thumbnail: "/aichor/aichor-mockup.jpg",
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
					The challenge was to turn Aichor’s complex product vision into a
					cohesive coded design language that worked seamlessly for both
					designers and engineers. I needed to build consistency without
					limiting flexibility, ensuring performance, accessibility, and unity
					across all interface elements.
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
					I started by identifying key user flows and refining the visual
					structure through quick prototypes. Once the foundation was clear, I
					brought the designs to life using Next.js, Tailwind, and shadcn/ui.
					Working iteratively, I documented, tested, and refined each component
					to ensure design and development stayed perfectly aligned.
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
						The focus was on building a robust foundation before expanding to
						full pages—starting with atomic components, then assembling them
						into patterns and templates. Design and development ran in parallel,
						with constant validation through coded prototypes.
					</p>
				</div>

				<div className="flex flex-col gap-4 mt-2">
					<span>Division</span>
					<p className=" text-muted-foreground">
						Execution centered on speed and reusability: I defined tokens and
						themes early, built out base components, and progressively layered
						complexity, ensuring each element was responsive and accessible.
					</p>
				</div>

				<div className="flex flex-col gap-4 mt-2">
					<span>Execution</span>
					<p className=" text-muted-foreground">
						As components matured, I integrated them into the Next.js structure,
						connecting data and state logic to make the UI fully functional.
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
						The design system became the backbone of the entire interface. It
						unified colors, typography, spacing, and motion through Tailwind
						tokens, while shadcn/ui provided a flexible architecture for
						component variants. Each element—whether designed or coded—followed
						shared principles of clarity, consistency, and accessibility. The
						result was a design language that looked cohesive in Figma and
						behaved identically in production.
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
					The result was a scalable, production-ready UI that accelerated
					development, improved visual harmony, and strengthened collaboration
					between designers and engineers. The system now supports rapid
					iteration and a consistent experience across all of Aichor’s machine
					learning tools.
				</p>
			</ProjectHighlight>
		</>
	);
}
