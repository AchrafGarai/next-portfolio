"use client";
import { useEffect, useState } from "react";

export function useCssVar(name: string, fallback = "#000") {
	const [val, setVal] = useState(fallback);

	useEffect(() => {
		const root = document.documentElement;

		const update = () => {
			const value = getComputedStyle(root).getPropertyValue(name).trim();
			if (value) setVal(value);
		};

		update();

		// listen for theme class change (.dark / .light)
		const observer = new MutationObserver(update);
		observer.observe(root, { attributes: true, attributeFilter: ["class"] });

		return () => observer.disconnect();
	}, [name]);

	return val;
}
