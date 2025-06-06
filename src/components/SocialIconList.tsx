import SocialIcon from "./SocialIcon.tsx";
import "../styles/SocialIconList.css";
import { SocialDescriptor } from "./SocialDescriptor.ts";

export default function SocialIconList(props: ISocialIconListProperties)
{
	const socials = props.socials.map(s => <SocialIcon social={s}/>);
	return <div className="SocialIconList">{socials}</div>
}

export interface ISocialIconListProperties
{
	socials: readonly SocialDescriptor[];
}
