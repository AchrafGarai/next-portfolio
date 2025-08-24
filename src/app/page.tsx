"use client";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ProjectGallery2 } from "@/components/projects/project-line-gallery";
import BrandingGalley from "@/components/sections/branding-callery";
import { CodeGallery } from "@/components/sections/code-gallery";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import MaskedHeader from "@/components/sections/masked-header";
import { ProjectGallery } from "@/components/sections/project-gallery";
import SecondSection from "@/components/sections/second";
import SkillTags from "@/components/sections/skill-tags";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
	return (
		<>
			<div className=" absolute top-4 right-4 z-50">
				<ThemeToggle />
			</div>
			<section>
				<HeroSection />
				{/* <SecondSection /> */}
				<MaskedHeader src={"/branding/lofiapp/mockup-2.jpg"}>
					<p>Hello world</p>
					<h2 className="text-9xl font-tanker">Redefine gaming</h2>
				</MaskedHeader>
				<ProjectGallery />
				<ProjectGallery2 />
				<CodeGallery />
				<BrandingGalley />
				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden uppercase min-h-screen">
					<VelocityScroll defaultVelocity={1}>
						From Vision to Interaction * Seamlessly Engineered
					</VelocityScroll>
					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background " />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
				</div>
				<SkillTags />
				<Footer />
			</section>
		</>
	);
}
