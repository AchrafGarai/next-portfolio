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
				<div className="flex justify-between border bg-accent w-full h-full min-h-[520px] rounded-lg hover:border-sky-500">
					<div className="p-8 text-left">
						{heading && (
							<h3 className="text-4xl font-tanker font-semibold">{heading}</h3>
						)}
						{subHeading && (
							<p className="text-sm text-muted-foreground">{subHeading}</p>
						)}
					</div>
					{children}
					{href && (
						<Image
							src={href}
							width={700}
							height={700}
							alt=""
							className=" shadow-2xl"
						/>
					)}
				</div>
			</div>
		</>
	);
}

export default Artbaord;
