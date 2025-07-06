import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import "../styles/TechnologyButton.css";

export default function TechnologyButton(props: ITechnologyButtonProperties)
{
	return <a className="TechnologyButton Button" href={props.technology.source} target="_blank" rel="noopener noreferrer">
		<img src={props.technology.imageSource} alt={props.technology.name}/>
	</a>
}

export interface ITechnologyButtonProperties
{
	technology: TechnologyDescriptor;
}
