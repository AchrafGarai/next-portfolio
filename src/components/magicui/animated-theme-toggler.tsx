"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

type props = {
	className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const [isAnimating, setIsAnimating] = useState(false);
	const { theme, setTheme } = useTheme();
	const changeTheme = async () => {
		if (!buttonRef.current || isAnimating) return;
		setIsAnimating(true);

		const newTheme = theme === "dark" ? "light" : "dark";

		await document.startViewTransition(() => {
			flushSync(() => {
				setTheme(newTheme);
			});
		}).ready;

		const { top, left, width, height } =
			buttonRef.current.getBoundingClientRect();
		const y = top + height / 2;
		const x = left + width / 2;

		const right = window.innerWidth - left;
		const bottom = window.innerHeight - top;
		const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRad}px at ${x}px ${y}px)`,
				],
			},
			{
				duration: 500,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
			},
		).onfinish = () => setIsAnimating(false);
	};
	return (
		<Button
			ref={buttonRef}
			onClick={changeTheme}
			className={cn(className)}
			type="button"
			variant={"ghost"}
		>
			{isDarkMode ? <SunDim size={20} /> : <Moon size={20} />}
		</Button>
	);
};
