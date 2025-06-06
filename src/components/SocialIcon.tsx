import "../styles/SocialIcon.css";
import { SocialDescriptor } from "./SocialDescriptor.ts";
import { RedirectSocialDescriptor } from "./RedirectSocialDescriptor.ts";

export default function SocialIcon(props: ISocialIconProperties)
{
	if (props.social instanceof RedirectSocialDescriptor)
	{
		return <a className="SocialIcon" href={props.social.address}>
			<img src={props.social.iconSource} alt={props.social.name}/>
		</a>
	}
}

export interface ISocialIconProperties
{
	social: SocialDescriptor;
}
