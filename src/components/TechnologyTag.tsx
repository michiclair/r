import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import "../styles/TechnologyTag.css";

export default function TechnologyTag(props: ITechnologyTagProperties)
{
	return <a className="TechnologyTag" href={props.descriptor.source}>{props.descriptor.name}</a>;
}

export interface ITechnologyTagProperties
{
	descriptor: TechnologyDescriptor;
}
