import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import "../styles/StackCard.css";

export default function StackCard(props: IStackCardProperties)
{
	const technologies = props.technologies.map(t =>
		<a href={t.source}><img src={t.imageSource} alt={t.name}/></a>);

	return <div className="StackCard">
		<h3>{props.name}</h3>
		<div className="StackCard_technologies">{technologies}</div>
	</div>
}

export interface IStackCardProperties
{
	name: string;
	technologies: readonly TechnologyDescriptor[];
}
