import type { ReactNode } from "react";

export const SectionTitle = ({
	title,
	tag,
	subtitle,
	children,
	className,
}: {
	title: string;
	tag: string;
	subtitle: string;
	children?: ReactNode;
	className?: string;
}) => {
	return (
		<>
			<div
				className={`text-2xl font-medium text-left my-12 mx-auto  ${className}`}
			>
				<div className=" pb-6 border-b flex text-2xl ">
					<div className="grow flex  items-start gap-4">
						<span className=" text-muted-foreground">{subtitle}</span>
						<span className=" text-muted-foreground"> / </span>
						<span>{title}</span>
					</div>
					<div>{tag}</div>
				</div>
				{children}
			</div>
		</>
	);
};
