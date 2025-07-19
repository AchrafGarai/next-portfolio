"use client";

import Image, { type ImageProps } from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemedImageProps extends Omit<ImageProps, "src"> {
	lightSrc: string;
	darkSrc?: string;
}

export default function ThemedImage({
	lightSrc,
	darkSrc,
	alt,
	...rest
}: ThemedImageProps) {
	const { theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Avoid hydration mismatch
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const currentTheme = theme === "system" ? systemTheme : theme;
	const selectedSrc = currentTheme === "dark" && darkSrc ? darkSrc : lightSrc;

	return <Image src={selectedSrc} alt={alt} {...rest} />;
}
