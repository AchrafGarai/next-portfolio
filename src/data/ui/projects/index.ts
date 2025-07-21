import * as aichor from "./aichor";
import * as lofiapp from "./lofi-app";
import * as geoAI from "./geo-ai";
import * as hackages from "./hackages";

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
type ProjectEntry = {
	metadata: ProjectMetadata;
	content: () => React.JSX.Element;
};

export const projectMap: Record<string, ProjectEntry> = {
	aichor: {
		metadata: aichor.metaData,
		content: aichor.Content,
	},
	lofiapp: {
		metadata: lofiapp.metaData,
		content: lofiapp.Content,
	},
	geoai: {
		metadata: geoAI.metaData,
		content: geoAI.Content,
	},
	hackages: {
		metadata: hackages.metaData,
		content: hackages.Content,
	},
};
