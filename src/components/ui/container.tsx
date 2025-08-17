import React, { type ReactNode } from "react";

export function Container({
	children,
	className,
}: { className?: string; children: ReactNode }) {
	return (
		<div
			className={`w-full mx-auto  max-w-(--breakpoint-xl) px-8 ${className}`}
		>
			{children}
		</div>
	);
}
