import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BrandingNavigation from "../navigation/branding-navigation";
import ArtboardLink from "./artboard-link";
import {
	BrandingProjectMap,
	type ProjectMetadata,
} from "@/data/branding/projects";

function ProjectsNav() {
	return (
		<Tabs defaultValue="projects">
			<TabsList className=" m-4 mb-2 ">
				<TabsTrigger value="projects">Projects</TabsTrigger>
				<TabsTrigger value="artboards">Artboards</TabsTrigger>
			</TabsList>
			<TabsContent value="projects" className="border-t">
				<BrandingNavigation posts={BrandingProjectMap} />
			</TabsContent>
			<TabsContent value="artboards" className="border-t">
				<div className="p-4 text-sm flex flex-col gap-4 text-muted-foreground">
					<ArtboardLink to={"#logo"}>3D logo</ArtboardLink>
					<ArtboardLink to={"#visual"}>Visual</ArtboardLink>
					<ArtboardLink to={"#logo-showcase"}>Logo Showcase</ArtboardLink>
				</div>
			</TabsContent>
		</Tabs>
	);
}

export default ProjectsNav;
