import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<footer className=" p-8 ">
			<div className="flex mb-6 justify-between gap-4">
				<Link href={""}>Hello@achraf.com</Link>
				<div className=" flex gap-3">
					<Link href={""}>Instagram</Link>
					<Link href={""}>Linkedin</Link>
					<Link href={""}>Blog</Link>
				</div>
			</div>

			<h2 className=" font-heading text-[18vw] font-bold uppercase">
				Let's Talk
			</h2>
		</footer>
	);
}

export default Footer;
