import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

function Page() {
	return (
		<>
			<div className=" max-w-2xl mx-auto my-10 ">
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
				<h1 className=" font-tanker text-8xl mb-9 ">Building a NextJS blog</h1>
				<p className="text-muted-foreground">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quaerat,
					veniam praesentium id sunt ratione, alias quidem velit ab libero odit
					totam placeat illo incidunt ut autem doloremque impedit ea.
				</p>
			</div>
		</>
	);
}

export default Page;
