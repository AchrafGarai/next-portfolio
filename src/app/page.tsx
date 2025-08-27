"use client";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { BrandingGallery2 } from "@/components/projects/branding-gallery";
import { Gallery } from "@/components/projects/project-gallery";
import BrandingGalley from "@/components/sections/branding-callery";
import { CodeGallery } from "@/components/sections/code-gallery";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import MaskedHeader from "@/components/sections/masked-header";
import SkillTags from "@/components/sections/skill-tags";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
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
				<div className=" min-h-screen min-w-screen relative">
					<div className=" absolute z-10 inset-0 h-full w-full">
						<Container className=" flex flex-col gap-6 z-10 h-full flex-grow justify-between py-32">
							<span className=" text-xs uppercase text-muted-foreground">
								Branding -110
							</span>
							<div className=" flex flex-col gap-6 items-start">
								<h3 className="text-9xl font-tanker">Branding</h3>
								<p className=" uppercase text-sm text-muted-foreground max-w-lg">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Animi ut saepe odit rem dolores? Placeat, dolores inventore.
									Error eligendi
								</p>
								<Button
									variant={"glass"}
									size={"lg"}
									className="rounded-full text-primary"
								>
									Explore Projects
								</Button>
							</div>
							<span className=" text-xs uppercase text-muted-foreground">
								Branding -110
							</span>
						</Container>
					</div>
					<BrandingGallery2 />
				</div>

				<BrandingGalley />

				<SkillTags />
				<Footer />
			</section>
		</>
	);
}
