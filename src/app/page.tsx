"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { AbstractShape } from "@/components/projects/abstract";
import { Logo3d } from "@/components/projects/logo-3d";
import { Gallery } from "@/components/projects/project-gallery";
import ScrollImage from "@/components/projects/scroll-image";
import Testimonial from "@/components/projects/testimonial";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import ListSection from "@/components/sections/list-section";
import MaskedHeader from "@/components/sections/masked-header";
import StackGallery from "@/components/sections/stack-gallery";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
	return (
		<>
			<div className=" absolute top-4 right-4 z-50">
				<ThemeToggle />
			</div>

			{/* 	<div className="  h-screen w-full overflow-hidden absolute top-0">
				<LightRays />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background" />
			</div> */}

			<section>
				<HeroSection />
				{/* <SecondSection /> */}
				<MaskedHeader src={"/branding/lofiapp/mockup-2.jpg"}>
					<p>Interfaces that move, respond, and inspire.</p>
					<h2 className="text-6xl md:text-9xl font-heading uppercase font-bold tracking-tight">
						Digital Alchemy
					</h2>
				</MaskedHeader>
				{/* <ProjectGallery /> */}
				{
					<div className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen border-b">
						<Image
							src={"/grids/grid-d.svg"}
							fill
							alt={""}
							className="object-cover absolute inset-0"
						/>
						<div className="w-full absolute z-10">
							<Suspense fallback={null}>
								<Gallery />
							</Suspense>
						</div>
						<Container className="absolute h-full w-full flex flex-col justify-between p-4 py-36">
							<div className="flex justify-between items-center">
								<p className=" max-w-sm text-sm text-muted-foreground uppercase">
									Turning ideas into living identities, where vision and design
									fuse like elements in a spell.
								</p>
								<h2 className=" text-2xl font-semibold font-heading uppercase">
									Creative Direction
								</h2>
							</div>
							<div className="flex justify-end">
								<p className="text-sm text-right max-w-sm text-muted-foreground uppercase">
									Crafting brands that breathe, move, and leave a mark simple,
									bold, unforgettable.
								</p>
							</div>
						</Container>
						<VelocityScroll defaultVelocity={1} numRows={1}>
							Brand Alchemy
						</VelocityScroll>
						<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background " />
						<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
					</div>
				}

				<StackGallery />

				<ListSection
					title="Endorsed by minds who craft tomorrow’s digital experiences"
					subtitle="Creating interfaces that feel intuitive, responsive, and alive."
					components={[
						<Testimonial
							text="Every detail is intentional, every interaction thoughtful."
							imgSrc="/aichor/avatar.png"
							key="testimonial-1"
						/>,
						<Testimonial
							text="He crafts experiences that delight users and elevate the product."
							imgSrc="/aichor/avatar.png"
							key="testimonial-2"
						/>,
						<Testimonial
							text="creativity, precision, and user focus all in one."
							imgSrc="/aichor/avatar.png"
							key="testimonial-3"
						/>,
					]}
				/>

				<ScrollImage
					text={"Interactive Craft"}
					src={"/branding/lofiapp/mockup-2.jpg"}
				/>
				<div className="relative min-h-screen">
					<div className=" absolute inset-0 z-0">
						<Suspense fallback={null}>
							<AbstractShape color={"#91cfff"} />
						</Suspense>
					</div>
					<Footer />
				</div>
			</section>
		</>
	);
}
