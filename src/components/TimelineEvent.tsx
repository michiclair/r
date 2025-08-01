import { TimelineEventDescriptor } from "./TimelineEventDescriptor.ts";
import { DateHelper } from "../shared/DateHelper.ts";
import "../styles/TimelineEvent.css";

export default function TimelineEvent(props: ITimelineEventProperties)
{
	const descriptor = props.descriptor;
	const startDateText = DateHelper.format(descriptor.startDate);
	const endDateText = descriptor.endDate ? DateHelper.format(descriptor.endDate) : undefined;
	let title = <>{descriptor.name} | {startDateText}{endDateText ? ` - ${endDateText}` : undefined}</>;
	title = descriptor.source
		? <h3><a href={descriptor.source} target="_blank" rel="noopener noreferrer">{title}</a></h3>
		: <h3>{title}</h3>;

	return <div className={"TimelineEvent"}>
		{title}
		<p>{descriptor.description}</p>
		<b>{descriptor.role}</b>
		<ul>
			<li><b>Solved:</b> {descriptor.solved}</li>
			<li><b>Impact:</b> {descriptor.impact}</li>
		</ul>
	</div>
}

export interface ITimelineEventProperties
{
	descriptor: TimelineEventDescriptor;
}
