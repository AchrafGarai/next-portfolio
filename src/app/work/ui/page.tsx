import CurvedLoop from "@/components/magicui/circle-text";
import BrandingHeader from "@/components/sections/branding-header";
import Footer from "@/components/sections/footer";
import { UIProjectsGrid } from "@/components/sections/ui-projects-grid";
import { Container } from "@/components/ui/container";

function Page() {
	return (
		<>
			<BrandingHeader
				imageSrc="/branding/lofiapp/mockup-2.jpg"
				title="UI Engineering"
				description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error
						nobis veritatis, dolor ex voluptatem aut dolorem ea officia voluptas
						necessitatibus? Qui assumenda vel odit eum perferendis, aut velit?
						Animi."
				cornerTexts={{
					topLeft: "CLIENT_01",
					topRight: "PROJECT_AICHOR",
					bottomLeft: "BRND_001",
					bottomRight: "STATUS_OK",
				}}
			/>

			<UIProjectsGrid />

			<CurvedLoop
				curveAmount={-300}
				interactive={false}
				marqueeText="Design Engineering Projects✦"
				className="font-heading uppercase tracking-wide "
			/>

			<Container className="mt-[-400px] mb-64 ">
				<div className="max-w-xl mr-0">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					commodi repellendus doloribus autem recusandae omnis officiis
					architecto, quam, reprehenderit molestias repudiandae maxime et
					dolorem excepturi necessitatibus voluptates? Sequi, natus eos.
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Page;
