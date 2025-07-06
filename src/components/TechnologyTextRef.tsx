import React from "react";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";

export default function TechnologyTextRef(props: ITechnologyTextRefProps )
{
	return <a className="TechnologyTextRef" href={props.technology.source} target="_blank" rel="noopener noreferrer">
		{props.technology.name}
	</a>
}

export interface ITechnologyTextRefProps 
{
	technology: TechnologyDescriptor;
}
