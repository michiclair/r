import "../styles/SocialIcon.css";
import { SocialDescriptor } from "./SocialDescriptor.ts";
import { RedirectSocialDescriptor } from "./RedirectSocialDescriptor.ts";
import { ClipboardSocialDescriptor } from "./ClipboardSocialDescriptor.ts";
import { useEffect, useId } from "react";

export default function SocialIcon(props: ISocialIconProperties)
{
	if (props.social instanceof RedirectSocialDescriptor)
	{
		return <a className="SocialIcon" href={props.social.address}>
			<img src={props.social.iconSource} alt={props.social.name}/>
		</a>
	}
	else if (props.social instanceof ClipboardSocialDescriptor)
	{
		const elementId = useId();

		useEffect(() =>
		{
			const copyToClipboardCallback = () =>
				navigator.clipboard.writeText((props.social as ClipboardSocialDescriptor).content).then();

			const socialIconElement = document.getElementById(elementId)!;
			socialIconElement.addEventListener("click", copyToClipboardCallback);

			return () => socialIconElement.removeEventListener("click", copyToClipboardCallback);
		}, []);

		return <div id={elementId} className="SocialIcon">
			<img src={props.social.iconSource} alt={props.social.name}/>
		</div>
	}
}

export interface ISocialIconProperties
{
	social: SocialDescriptor;
}
