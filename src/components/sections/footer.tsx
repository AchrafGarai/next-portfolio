import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<footer className=" flex p-8 mb-6 justify-between gap-4">
			<Link href={""}>Hello@achraf.com</Link>
			<div className=" flex gap-3">
				<Link href={""}>Instagram</Link>
				<Link href={""}>Linkedin</Link>
				<Link href={""}>Blog</Link>
			</div>
		</footer>
	);
}

export default Footer;
