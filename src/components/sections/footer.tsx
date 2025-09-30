import Link from "next/link";
import React, { Suspense } from "react";
import { AbstractShape } from "../projects/abstract";

function Footer() {
	return (
		<div className="relative min-h-screen">
			<div className=" absolute inset-0 z-0">
				<Suspense fallback={null}>
					<AbstractShape color={"#91cfff"} />
				</Suspense>
			</div>
			<div className=" absolute inset-x-0 bottom-0 z-10">
				<footer className=" p-8 ">
					<div className="flex mb-6 justify-between gap-4">
						<Link href={""}>Hello@achraf.com</Link>
						<div className=" flex gap-3">
							<Link href={""}>Instagram</Link>
							<Link href={""}>Linkedin</Link>
							<Link href={""}>Blog</Link>
						</div>
					</div>

					<h2 className=" font-heading text-[17.3vw] max-w-screen font-bold uppercase">
						Let's Talk
					</h2>
				</footer>
			</div>
		</div>
	);
}

export default Footer;
