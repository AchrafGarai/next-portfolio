import Image from "next/image";
interface ArtboardProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	href?: string;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	href?: string;
}

function Artbaord({ title, className, children, href }: Props) {
	return (
		<>
			<div className={`flex flex-col gap-2 items-start w-full  ${className}`}>
				<span className=" text-xs text-muted-foreground">{title}</span>
				<div className="flex items-center justify-center border bg-accent w-full h-full min-h-[520px] rounded-lg hover:border-sky-500">
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
