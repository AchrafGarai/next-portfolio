import type { ThemedImageType } from "@/data/branding/projects";
import React from "react";
import Artbaord from "./artboard";
import ThemedImage from "./themed-image";
import Image from "next/image";

function LogoGrid({
	projectName,
	logos,
}: { logos: ThemedImageType[]; projectName: string }) {
	return logos.map(({ title, src, themed }, index) => {
		return (
			<Artbaord
				title={title}
				key={title}
				className={index === 0 ? "col-span-2" : ""}
			>
				{themed ? (
					<ThemedImage
						lightSrc={`/branding/${projectName}/${src}-light.svg`}
						darkSrc={`/branding/${projectName}/${src}.svg`}
						height={360}
						width={360}
						alt={title}
					/>
				) : (
					<Image
						src={`/branding/${projectName}/${src}.svg`}
						alt={title}
						height={360}
						width={360}
					/>
				)}
			</Artbaord>
		);
	});
}

export default LogoGrid;
