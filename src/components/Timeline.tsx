import { TimelineEventDescriptor } from "./TimelineEventDescriptor.ts";
import TimelineEvent from "./TimelineEvent.tsx";

export default function Timeline(props: ITimelineProperties)
{
	return <div className={"Timeline"}>
		{props.events.map(d => <TimelineEvent descriptor={d} />)}
	</div>
}

export interface ITimelineProperties
{
	events: readonly TimelineEventDescriptor[];
}
