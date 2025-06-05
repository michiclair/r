import React from "react";
import ProjectCard, { IProjectCardProperties } from "./ProjectCard.tsx";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import ProjectDescriptor from "./ProjectDescriptor.ts";
import "../styles/ProjectCardList.css";

export default function ProjectCardList(props: IProjectCardListProperties)
{
	const projectCards = props.projects.map((p, i) => <ProjectCard key={i} project={p}></ProjectCard>);
	return <div className="ProjectCardList">{projectCards}</div>;
}

export interface IProjectCardListProperties
{
	projects: readonly ProjectDescriptor[];
}
