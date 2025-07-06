import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import "../styles/TechnologyTag.css";

export default function TechnologyTag(props: ITechnologyTagProperties)
{
	return <div className="TechnologyTag">{props.descriptor.name}</div>;
}

export interface ITechnologyTagProperties
{
	descriptor: TechnologyDescriptor;
}
