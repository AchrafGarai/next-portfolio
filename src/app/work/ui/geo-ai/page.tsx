import { Logo3d } from "@/components/projects/logo-3d";
import ProjectHeader from "@/components/projects/project-header";
import { SectionTitle } from "@/components/projects/section-title";

function Page() {
	return (
		<>
			{/* <Logo3d title="hackages" color="#3ef2da" content="Geo-AI Hack" />*/}
			<Logo3d
				title="geo-ai"
				color="#c49ef9"
				content="Geo-AI Hack"
				material={{
					thickness: 0.6,
					roughness: 0.1,
					transmission: 1,
					ior: 0.7,
					chromaticAberration: 0.3,
					backside: false,
				}}
			/>
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
				title={"Content-driven web strategy"}
				imageSrc="/Hackages/hero.png"
			/>
		</>
	);
}

export default Page;
