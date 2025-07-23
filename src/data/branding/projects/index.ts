import * as aichor from "./aichor";
import * as lofiapp from "./lofi-app";
import * as geoAI from "./geo-ai";

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
	intro: string;
	screens: screen[];
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
};
