import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

import Image from "next/image";
import Link from "next/link";

async function Page() {
	return (
		<>
			<Container>
				<Image
					src="/aichor/home.png"
					alt="Example Image"
					width={1920}
					height={1080}
					style={{ viewTransitionName: "aichor1" }}
				/>
			</Container>

			<Link href={"/work/ui/lofi-app#aichor1"}>Back</Link>
		</>
	);
}

export default Page;
