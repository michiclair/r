import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import TechnologyButton from "./TechnologyButton.tsx";
import "../styles/TechnologyButtonList.css";

export default function TechnologyButtonList(props: ITechnologyButtonListProperties)
{
	const technologies = props.technologies.map(t => <TechnologyButton technology={t}/>);
	return <div className="TechnologyButtonList">{technologies}</div>
}

export interface ITechnologyButtonListProperties
{
	technologies: readonly TechnologyDescriptor[];
}
