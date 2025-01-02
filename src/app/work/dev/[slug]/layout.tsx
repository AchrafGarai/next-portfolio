import "@/styles/highlight.css";
import MdxLayout from "@/components/mdx-layout";
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto max-w-2xl pb-24 pt-16">
			<div className=" flex gap-3 items-center  mb-10">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div className=" flex flex-col ">
					<span>Achraf Garai</span>
					<span className="text-sm text-muted-foreground">
						Senior UI Specialist
					</span>
				</div>
			</div>
			<MdxLayout>{children}</MdxLayout>
		</div>
	);
}

export default Layout;
