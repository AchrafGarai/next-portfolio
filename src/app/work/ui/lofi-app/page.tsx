import { Logo3d } from "@/components/projects/logo-3d";
import ProjectHeader from "@/components/projects/project-header";
import { SectionTitle } from "@/components/projects/section-title";
import StudyStep from "@/components/projects/study-step";
import TransitionCard from "@/components/projects/transition-card";

import Image from "next/image";
import { cards } from "./data";
import { Browser } from "@/components/projects/browser";
import ScrollImage from "@/components/projects/scroll-image";

function Page() {
	return (
		<>
			<Logo3d title="lofiapp" color="#ffffff" content="Lo-Fi App" />

			<SectionTitle
				title="Lofi Music"
				subtitle="About"
				tag="SaaS"
				className="my-64"
			>
				<p className="mt-6 text-2xl">
					Designing a forward-looking, branded UI system to support AIchor’s
					intelligent interface for technical researchers and developers.
				</p>
			</SectionTitle>

			<ProjectHeader
				title={"A Relaxing Music Experience"}
				imageSrc="/lofi-app/hero.png"
			/>

			<div className="flex gap-6 justify-center text-xl font-medium text-left *:w-full mx-8 mb-32  border-t pt-6  ">
				<div className="flex flex-col gap-2">
					<span className="text-muted-foreground">My Role</span>
					<p>Design Engineering </p>
					<p>Brand Identity Design</p>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-muted-foreground">Team Size</span>
					<p>8</p>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-muted-foreground">Timeline</span>
					<p>2023</p>
				</div>
			</div>

			<div className="min-h-screen flex flex-col gap-6 items-center justify-center text-2xl font-medium text-left *:w-full">
				<div className="max-w-2xl">
					<span className=" text-muted-foreground">Challenge</span>
					<p className="mt-6 font mb-10">
						The aim was to create a unique visual identity that reflects
						intelligence and reliability, while building a scalable,
						developer-friendly UI system. We also focused on consistent motion,
						accessibility, and responsive performance across devices.
					</p>
				</div>
			</div>

			<Image
				src={"/lofi-app/mockup-1.jpg"}
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
				{cards.map(({ key, title }) => (
					<TransitionCard
						key={key}
						href={`/work/ui/lofi-app/${key}`}
						transitionName={key}
					>
						<Browser imageSrc={`/lofi-app/screens/${key}.png`} title={title} />
					</TransitionCard>
				))}
			</div>

			<ScrollImage
				text="A Relaxing Music Experience"
				src={"/lofi-app/mockup-3.jpg"}
			/>
			<div className="min-h-screen flex flex-col gap-6 items-center justify-center text-2xl font-medium text-left *:w-full">
				<div className="max-w-2xl">
					<span className=" text-muted-foreground">Result</span>
					<p className="mt-6 font">
						Lorem ipsum dolor sit amet consectetur. Maecenas ac turpis semper
						cras velit vulputate congue viverra. Maecenas nulla odio fringilla
						mi arcu faucibus ultrices cras. Tempus phasellus urna.
					</p>
				</div>
			</div>
		</>
	);
}

export default Page;
