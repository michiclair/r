import { TimelineEventDescriptor } from "./TimelineEventDescriptor.ts";
import { DateHelper } from "../shared/DateHelper.ts";

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
		<p><b>SOLVED:</b> {descriptor.solved}</p>
		<p><b>IMPACT:</b> {descriptor.impact}</p>
	</div>
}

export interface ITimelineEventProperties
{
	descriptor: TimelineEventDescriptor;
}
