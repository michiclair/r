import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import "../styles/TechnologyButton.css";

export default function TechnologyButton(props: ITechnologyButtonProperties)
{
	// We use an event listener instead of an <a> tag because react-chrono's timeline overrides the default behavior of <a> tags. (bug)
	return <a className="TechnologyButton Button" href={props.technology.source} target="_blank" rel="noopener noreferrer">
		{props.technology.name}
		<img src={props.technology.imageSource} alt={props.technology.name}/>
	</a>
}

export interface ITechnologyButtonProperties
{
	technology: TechnologyDescriptor;
}
