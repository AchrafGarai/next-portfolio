import React from "react";
import Artbaord from "@/components/projects/artboard";
import BrandingGalley from "@/components/sections/branding-callery";
import CurvedLoop from "@/components/magicui/circle-text";
import { Container } from "@/components/ui/container";
import ListSection from "@/components/sections/list-section";
import Image from "next/image";
function Page() {
	return (
		<>
			<div className=" min-h-screen">
				<CurvedLoop
					curveAmount={-300}
					interactive={false}
					marqueeText="Welcome to React Bits ✦"
					className="font-tanker tracking-wide "
				/>
				<Container>
					<div className=" max-w-xl mt-[-300px] mr-0">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
						commodi repellendus doloribus autem recusandae omnis officiis
						architecto, quam, reprehenderit molestias repudiandae maxime et
						dolorem excepturi necessitatibus voluptates? Sequi, natus eos.
					</div>
				</Container>
				<ListSection
					title="Every pixel is built with user’s feedback in mind"
					subtitle="Every feature in AIchor is shaped by real feedback, helping us build a tool people actually enjoy using every day."
					components={[
						<Image
							className="w-full h-[450px] object-cover"
							src={"/branding/aichor/mockup-1.jpg"}
							alt={""}
							width={1200}
							height={1200}
							key={"1"}
						/>,
					]}
				/>
			</div>
		</>
	);
}

export default Page;
