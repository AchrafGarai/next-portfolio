import { Browser } from "@/components/projects/browser";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
function page() {
	return (
		<>
			<Button asChild>
				<Link href="/work/ui/aichor">Login</Link>
			</Button>
			<ViewTransition name="experimental-label">
				<Browser className="col-span-2" imageSrc="/aichor/home.png" />
			</ViewTransition>
		</>
	);
}

export default page;
