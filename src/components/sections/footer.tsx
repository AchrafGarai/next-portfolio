import Link from "next/link";
import React, { Suspense } from "react";
import { AbstractShape } from "../projects/abstract";
import Image from "next/image";
import ThemedImage from "../projects/themed-image";

function Footer() {
	return (
		<div className="relative min-h-screen border-t">
			<div className=" absolute inset-0 z-10">
				<Suspense fallback={null}>
					<AbstractShape color={"#91cfff"} />
				</Suspense>
			</div>
			<Image
				src={"/grids/grid-d.svg"}
				fill
				alt={""}
				className="object-cover absolute inset-0 z-20"
			/>

			<ThemedImage
				lightSrc={"/landscape-light.png"}
				darkSrc={"/landscape.png"}
				fill
				alt={""}
				className="object-cover absolute inset-0 z-20"
			/>

			<Image
				src={"/effects/smoke.svg"}
				fill
				alt={""}
				className="object-cover absolute inset-0 z-10 opacity-0 dark:opacity-30 "
			/>
			<div className=" absolute inset-0 bottom-0 z-20">
				<footer className="p-8 flex flex-col h-full justify-between ">
					<div className="flex mb-6 justify-between gap-4 text-sm uppercase `">
						<Link className="" href={""}>
							Contact
						</Link>
						<div className=" flex flex-col gap-2 text-sm uppercase">
							<Link className="" href={""}>
								Design Engineering
							</Link>
							<Link className="" href={""}>
								Creative direction
							</Link>
							<Link className="" href={""}>
								Blog
							</Link>
						</div>
						<div className=" flex flex-col gap-2 text-sm uppercase">
							<Link className="" href={""}>
								GitHub
							</Link>
							<Link className="" href={""}>
								Linkedin
							</Link>
							<Link className="" href={""}>
								Behance
							</Link>
						</div>
					</div>

					<h2 className=" font-heading text-[15.3vw] md:text-[16.3vw] lg:text-[17.3vw] max-w-screen font-bold uppercase">
						Let's Talk
					</h2>
				</footer>
			</div>
		</div>
	);
}

export default Footer;
