import SocialIcon, { ISocialIconProperties } from "./SocialIcon.tsx";
import "../styles/SocialIconList.css";

export default function SocialIconList(props: ISocialIconListProperties)
{
	const socials = props.socials.map(s => <SocialIcon iconSource={s.iconSource} name={s.name} profileAddress={s.profileAddress}/>);
	return <div className="SocialIconList">{socials}</div>
}

export interface ISocialIconListProperties
{
	socials: readonly ISocialIconProperties[];
}
