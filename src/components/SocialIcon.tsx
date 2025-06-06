import "../styles/SocialIcon.css";

export default function SocialIcon(props: ISocialIconProperties)
{
	return <a className="SocialIcon" href={props.profileAddress}>
		<img src={props.iconSource} alt={props.name}/>
	</a>
}

export interface ISocialIconProperties
{
	iconSource: string;
	name: string;
	profileAddress: string;
}
