import Link from "next/link";
import React from "react";

function Page() {
	return (
		<div
			className=" min-h-[200vh] flex items-center justify-center flex-col gap-4
        "
		>
			<Navgigator />
		</div>
	);
}

export default Page;

function Navgigator() {
	return <Link href={"/test/1"}>Next</Link>;
}
