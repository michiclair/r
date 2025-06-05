import React from "react";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import ImageDescriptor from "./ImageDescriptor.ts";
import TechnologyTagList from "./TechnologyTagList.tsx";

export default function ProjectCard(props: IProjectCardProperties)
{
	return <div className="ProjectCard">
		{props.image ? <img src={props.image?.source} alt={props.image.alternativeText}/>:null}
		<div>
			<a>{props.name}</a>
			<p>{props.description}</p>
			<TechnologyTagList technologies={props.technologies}></TechnologyTagList>
		</div>
	</div>
}

export interface IProjectCardProperties
{
	name: string;
	description: string;
	technologies: readonly TechnologyDescriptor[];
	image?: ImageDescriptor;
	demoSource?: string;
	repositorySource?: string;
}
