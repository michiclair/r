import React from "react";
import TechnologyTag from "./TechnologyTag.tsx";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";

export default function TechnologyTagList(props: ITechnologyTagListProperties)
{
	const technologies = props.technologies.map((t, i) => <TechnologyTag key={i} descriptor={t}></TechnologyTag>);
	return <ul className="TechnologyTagList">{technologies}</ul>;
}

export interface ITechnologyTagListProperties
{
	technologies: readonly TechnologyDescriptor[];
}
