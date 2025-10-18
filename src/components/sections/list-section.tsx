import { cn } from "@/lib/utils";
import Image from "next/image";
interface ListSectionProps {
	title: string;
	subtitle?: string;
	components: React.ReactNode[];
}

export default function ListSection({
	title,
	subtitle,
	components,
}: ListSectionProps) {
	return (
		<section className="relative flex flex-col items-center justify-center min-h-[300vh]">
			{/* Background image layer */}
			<div className="absolute top-0 left-0 w-full h-full ">
				<div className="w-full sticky top-0 h-screen z-0">
					<Image
						src="/grids/grid-c.svg"
						alt=""
						fill
						className="object-cover "
						priority
					/>
				</div>
			</div>

			{/* Sticky content block */}
			<div className="sticky top-0 flex flex-col gap-6 justify-center items-center min-h-screen max-w-[700px] text-center z-10">
				<h3 className=" text-3xl md:text-5xl lg:text-6xl font-heading uppercase">
					{title}
				</h3>
				<p>{subtitle}</p>
			</div>

			{/* Scrollable components below */}
			<div className="h-screen grow w-full max-w-4xl p-6 z-20">
				{components.map((component, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={`flex ${
							index % 2 === 0
								? "justify-start rotate-[8deg]"
								: "justify-end rotate-[-8deg]"
						}`}
					>
						<div className="max-w-xs min-h-[60vh]">{component}</div>
					</div>
				))}
			</div>
		</section>
	);
}
