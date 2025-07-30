"use client";
import React from "react";
import Image from "next/image";

import { useUIStore } from "@/lib/store";

function LogoGuides() {
	const showGrid = useUIStore((s) => s.showGrid);
	return (
		<Image
			className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 Z-0  ${showGrid ? "" : "hidden"}`}
			src={"/grid.png"}
			width={360}
			height={360}
			alt="Aichor "
		/>
	);
}

export default LogoGuides;
