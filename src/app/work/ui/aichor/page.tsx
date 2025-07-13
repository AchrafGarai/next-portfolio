import { SectionTitle } from "@/components/projects/section-title";
import { Browser } from "@/components/projects/browser";
import { Logo3d } from "@/components/projects/logo-3d";
import ProjectHeader from "@/components/projects/project-header";
import BrandingGalley from "@/components/sections/branding-callery";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import Image from "next/image";
import ScrollImage from "@/components/projects/scroll-image";
import StudyStep from "@/components/projects/study-step";

const ImageSouurce = {
	lightSrc: "/aichor/aichor-experiments.png",
	darkSrc: "/aichor/aichor-experiments-dark.png",
};

function Page() {
	return (
		<>
			<Logo3d title="aichor" color="#6cd0ff" />
			<SectionTitle
				title="Aichor"
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
				title={"Aichor-Building a next Gen AI Platform"}
				description={
					"Designing a forward-looking, branded UI system to support AIchor’s intelligent interface for technical researchers and developers."
				}
				imageSrc={ImageSouurce}
			/>
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

			<div className="relative h-[480px] ">
				<Image
					src={"/aichor/aichor-mockup.jpg"}
					fill
					alt="Aichor "
					className=" rounded-4xl object-cover"
				/>
			</div>

			<StudyStep title="Process">
				<p className=" text-muted-foreground">
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
				<ViewTransition name="experimental-label">
					<Link href={"/work/ui/aichor/experimental-label"}>
						<Browser className="col-span-2" imageSrc="/aichor/home.png" />
					</Link>
				</ViewTransition>

				<Browser imageSrc="/aichor/home.png" />
				<Browser />
				<Browser />
				<Browser />
				<Browser />
				<Browser />
			</div>

			<section className=" my-48">
				<SectionTitle
					subtitle={"Design System"}
					title={"A Flexible System For The Web"}
					tag={""}
				/>
				<div className="grid grid-cols-2 gap-24">
					<Browser imageSrc="/aichor/home.png" />
					<Browser />
				</div>
			</section>

			<BrandingGalley />
			{/* <AnimatedImageList /> */}

			<ScrollImage />

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
