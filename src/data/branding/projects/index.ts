import * as aichor from "./aichor";
import * as lofiapp from "./lofi-app";
import * as geoAI from "./geo-ai";
import type { ComponentType, SVGProps } from "react";

type Screen = {
	key: string;
	title: string;
};

export type ThemedImageType = {
	title: string;
	src: string;
	themed: boolean;
};

type MaterialProps = {
	thickness: number;
	roughness: number;
	transmission: number;
	ior: number;
	chromaticAberration: number;
	backside: boolean;
};
export type ProjectMetadata = {
	slug: string;
	title: string;
	slogan: string;
	color: string;
	material?: MaterialProps;
	tag: string;
	description: string;
	coverImage: string;
	intro: string;
	logos: ThemedImageType[];
};

export const BrandingProjectMap: ProjectMetadata[] = [
	{
		...aichor.metaData,
	},
	{
		...lofiapp.metaData,
	},
	{
		...geoAI.metaData,
	},
];

export const BrandingprojectContentMap: Record<
	string,
	() => Promise<React.ComponentType>
> = {
	aichor: () => import("./aichor").then((m) => m.Content),
	lofiapp: () => import("./lofi-app").then((m) => m.Content),
};
