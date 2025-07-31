"use client";

import Image, { type ImageProps } from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useUIStore } from "@/lib/store";
import { Lens } from "../magicui/lens";

interface LensImageProps extends ImageProps {}

export default function LensImage({ src, alt, ...rest }: LensImageProps) {
	const toggleLens = useUIStore((s) => s.lensActive);
	return (
		<>
			<div className={toggleLens ? "block" : "hidden"}>
				<Lens zoomFactor={2}>
					<Image src={src} alt={alt} {...rest} />
				</Lens>
			</div>
			<div className={toggleLens ? "hidden" : "block"}>
				<Image src={src} alt={alt} {...rest} />
			</div>
		</>
	);
}
