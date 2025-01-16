"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

interface ThemedImageProps {
	srcLight: string;
	srcDark: string;
	alt: string;
	width: number;
	height: number;
	className?: string;
}

const ThemedImage = ({
	srcLight,
	srcDark,
	alt,
	width,
	height,
	className,
}: ThemedImageProps) => {
	const { theme } = useTheme();

	const imageSrc = theme === "light" ? srcLight : srcDark;

	return (
		<Image
			src={imageSrc}
			alt={alt}
			width={width}
			height={height}
			className={className}
		/>
	);
};

export default ThemedImage;
