"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Gallery } from "@/components/projects/project-gallery";
import Testimonial from "@/components/projects/testimonial";
import { CodeGallery } from "@/components/sections/code-gallery";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import ListSection from "@/components/sections/list-section";
import MaskedHeader from "@/components/sections/masked-header";

import SkillTags from "@/components/sections/skill-tags";
import StackGallery from "@/components/sections/stack-gallery";
import StackGallery2 from "@/components/sections/stack-gallery-2";

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
					<h2 className="text-9xl font-heading uppercase">Redefine gaming</h2>
				</MaskedHeader>
				{/* <ProjectGallery /> */}
				{
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
								<h2 className=" text-2xl font-semibold uppercase">
									Branding_01
								</h2>
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
				}
				{/* <CodeGallery /> */}
				<StackGallery2 />

				{/* <StackGallery /> */}
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

				<SkillTags />

				<Footer />
			</section>
		</>
	);
}
