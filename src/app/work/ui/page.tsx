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
				description="Where design precision meets engineering depth. I craft web and app interfaces that are functional, fluid, and visually alive — blending creativity, performance, and motion into seamless digital experiences."
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
					From pixels to production, I engineer user interfaces that balance
					beauty with performance. My work bridges design systems, front-end
					development, and creative experimentation to craft experiences that
					engage and endure.
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default Page;
