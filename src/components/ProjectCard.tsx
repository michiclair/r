import React, { useEffect, useState } from "react";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import ImageDescriptor from "./ImageDescriptor.ts";
import TechnologyTagList from "./TechnologyTagList.tsx";
import ProjectDescriptor from "./ProjectDescriptor.ts";
import GithubProjectDescriptor from "./GithubProjectDescriptor.ts";
import { octokit } from "../shared/octokit.ts";
import "../styles/ProjectCard.css";

export default function ProjectCard(props: IProjectCardProperties)
{
	const [name, setName] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [address, setAddress] = useState<string | undefined>();

	useEffect(() =>
	{
		if (props.project instanceof GithubProjectDescriptor)
		{
			octokit.rest.repos.get({
				owner: props.project.ownerName,
				repo: props.project.repositoryName
			}).then(response =>
			{
				if (response.status < 200 || response.status > 299)
				{
					setName("?");
					setDescription("It appears to be a problem while communicating with GitHub.");
					return;
				}

				setAddress(response.url);
				setName(response.data.name);
				setDescription(response.data.description ?? "...");
			});
		}
	}, []);

	return <div className="ProjectCard">
		<div>
			{address ? <a className="ProjectCard_name" href={address}>{name}</a> : <h1 className="ProjectCard_name">{name}</h1>}
			<p className="ProjectCard_description">{description}</p>
		</div>
		<TechnologyTagList technologies={props.project.technologies}></TechnologyTagList>
	</div>
}

export interface IProjectCardProperties
{
	project: ProjectDescriptor;
}
