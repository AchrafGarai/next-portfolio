import { Browser } from "@/components/projects/browser";
import ExpandableGrid from "@/components/ui/lightbox2";
import ExpandableCard from "@/components/ui/lightbox2";
import Link from "next/link";
import React from "react";

function Page() {
	return (
		<div className="min-h-[200vh]">
			<Link href={"/test"}>BacK</Link>

			<div className="grid grid-cols-2 gap-24">
				<Browser className="col-span-2 " imageSrc="/lofi-app/home.png" />
				<Browser imageSrc="/lofi-app/home.png" />

				<Browser />
				<Browser />
				<Browser />
				<Browser />
				<Browser />
			</div>
			<ExpandableGrid />
		</div>
	);
}

export default Page;
