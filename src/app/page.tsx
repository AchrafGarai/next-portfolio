"use client";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Gallery } from "@/components/projects/project-gallery";
import BrandingGalley from "@/components/sections/branding-callery";
import { CodeGallery } from "@/components/sections/code-gallery";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import MaskedHeader from "@/components/sections/masked-header";
import { ProjectGallery } from "@/components/sections/project-gallery";
import SecondSection from "@/components/sections/second";
import SkillTags from "@/components/sections/skill-tags";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui/container";

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
				{/* <ProjectGallery /> */}
				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen">
					<div className="w-full absolute z-10">
						<Gallery />
					</div>
					<Container className="absolute h-full w-full flex flex-col justify-between py-36">
						<div className="flex justify-between items-center">
							<p className=" max-w-sm text-sm text-muted-foreground uppercase">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
								eius voluptate nostrum necessitatibus delectus sit nesciunt
								temporibus
							</p>
							<h2 className=" text-2xl font-semibold uppercase">Branding_01</h2>
						</div>
						<div className="flex justify-end">
							<p className="text-sm text-right max-w-sm text-muted-foreground uppercase">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
								eius voluptate nostrum necessitatibus delectus sit nesciunt
							</p>
						</div>
					</Container>
					<VelocityScroll defaultVelocity={1} numRows={1}>
						From Vision to Interaction * Seamlessly Engineered
					</VelocityScroll>
					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background " />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
				</div>
				<CodeGallery />
				<BrandingGalley />

				<SkillTags />
				<Footer />
			</section>
		</>
	);
}
