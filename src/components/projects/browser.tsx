import { cn } from "@/lib/utils";
import { Safari } from "../magicui/safari";

export const Browser = ({
	className,
	imageSrc,
	title,
}: { className?: string; title?: string; imageSrc?: string }) => {
	return (
		<div className={cn(`flex flex-col gap-2 items-start w-full ${className}`)}>
			<span className=" text-xs text-muted-foreground">{title}</span>
			<div
				className={
					" dark bg-zinc-900 shadow-2xl relative hover:shadow-lg transition-all border p-0.5 rounded-xl "
				}
			>
				<Safari
					url={title}
					className="size-full"
					imageSrc={imageSrc}
				/>
			</div>
		</div>
	);
};
