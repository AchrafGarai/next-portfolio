// components/ScrollLink.tsx
"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { useLenis } from "../smooth-scroll";
type Props = {
	to: string | HTMLElement; // e.g. '#features' or an element
	offset?: number; // e.g. -80 to account for a sticky header
	duration?: number; // seconds
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ScrollLink({
	to,
	offset = 0,
	duration = 1.2,
	children,
	...rest
}: Props) {
	const lenis = useLenis();

	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		// prevent native jump-to-hash
		e.preventDefault();

		// You can pass a selector string or an element
		lenis?.scrollTo(to, {
			offset,
			duration,
			// optional extras:
			// easing: (t) => 1 - Math.pow(1 - t, 4),
			// lock: true, // prevent user input during scroll
			// immediate: false,
		});
	};

	// ensure href is a valid hash if you passed a selector
	const href = typeof to === "string" ? to : "#";

	return (
		<a href={href} onClick={handleClick} {...rest}>
			{children}
		</a>
	);
}
