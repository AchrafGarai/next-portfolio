import { cn } from "@/lib/utils";
import { Safari } from "../magicui/safari";

export const Browser = ({
	className,
	imageSrc,
}: { className?: string; imageSrc?: string }) => {
	return (
		<div className={cn(`flex flex-col gap-2 items-start w-full ${className}`)}>
			<span className=" text-xs text-muted-foreground">Aichor</span>
			<div
				className={
					" dark bg-zinc-900 shadow-2xl relative hover:shadow-lg transition-all border p-1 rounded-xl "
				}
			>
				<Safari
					url="magicui.design"
					className="size-full"
					imageSrc={imageSrc}
				/>
			</div>
		</div>
	);
};
