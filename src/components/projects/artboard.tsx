import Image from "next/image";
interface ArtboardProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	href?: string;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	href?: string;
	heading?: string;
	subHeading?: string;
}

function Artbaord({
	title,
	className,
	children,
	href,
	heading,
	subHeading,
}: Props) {
	return (
		<>
			<div className={`flex flex-col gap-2 items-start w-full  ${className}`}>
				<span className=" text-xs text-muted-foreground">{title}</span>
				<div className="flex flex-col justify-center items-center border bg-accent w-full min-h-[520px] rounded-xl hover:border-sky-500 overflow-hidden relative">
					{href && (
						<Image
							src={href}
							width={1920}
							height={1080}
							alt=""
							className=" w-full object-cover z-0"
						/>
					)}
					<div className="z-10">{children}</div>
					<Image
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 Z-0 "
						src={"/grid.png"}
						width={360}
						height={360}
						alt="Aichor "
					/>
				</div>
			</div>
		</>
	);
}

export default Artbaord;
