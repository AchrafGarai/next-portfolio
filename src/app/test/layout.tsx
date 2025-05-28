import Link from "next/link";
import type { ReactNode } from "react";

const posts = [
	{
		slug: "aichor",
		title: "AIchor",
	},
	{
		slug: "lofi-app",
		title: "Lofi App",
	},
];

function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="fixed left-0 top-0 p-4  flex flex-col gap-4">
				<Link href={"test/1"}>Image</Link>
				<Link href={"test/1"} scroll={true}>
					Back
				</Link>
			</div>
			<div className="max-w-6xl mx-auto">{children}</div>
		</>
	);
}

export default Layout;
