import * as aichor from "./aichor";
import * as lofiapp from "./lofi-app";
import * as geoAI from "./geo-ai";
import * as hackages from "./hackages";
import dynamic from "next/dynamic";

type screen = {
	key: string;
	title: string;
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
	thumbnail: string;
	intro: string;
	screens: screen[];
};

export const UIProjectMap: ProjectMetadata[] = [
	{
		...aichor.metaData,
	},
	{
		...lofiapp.metaData,
	},
	{
		...geoAI.metaData,
	},
	{
		...hackages.metaData,
	},
];

export const UIprojectContentMap: Record<
	string,
	() => Promise<React.ComponentType>
> = {
	aichor: () => import("./aichor").then((m) => m.Content),
	lofiapp: () => import("./lofi-app").then((m) => m.Content),
	"geo-ai": () => import("./geo-ai").then((m) => m.Content),
	hackages: () => import("./hackages").then((m) => m.Content),
};
