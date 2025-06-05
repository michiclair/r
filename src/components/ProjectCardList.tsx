import React from "react";
import ProjectCard, { IProjectCardProperties } from "./ProjectCard.tsx";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import ProjectDescriptor from "./ProjectDescriptor.ts";

export default function ProjectCardList(props: IProjectCardListProperties)
{
	const projectCards = props.projects.map((p, i) => <ProjectCard key={i} project={p}></ProjectCard>);
	return <ul className="ProjectCardList">{projectCards}</ul>;
}

export interface IProjectCardListProperties
{
	projects: readonly ProjectDescriptor[];
}
