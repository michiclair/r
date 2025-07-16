import "../styles/SocialIcon.css";
import { SocialDescriptor } from "./SocialDescriptor.ts";
import { RedirectSocialDescriptor } from "./RedirectSocialDescriptor.ts";
import { ClipboardSocialDescriptor } from "./ClipboardSocialDescriptor.ts";
import { useEffect, useId } from "react";
import "styles/Button.css";

export default function SocialIcon(props: ISocialIconProperties)
{
	if (props.social instanceof RedirectSocialDescriptor)
	{
		// We use an event listener instead of an <a> tag because react-chrono's timeline overrides the default behavior of <a> tags. (bug)
		const elementId = useId();

		useEffect(() =>
		{
			const redirectCallback = () =>
				window.open((props.social as RedirectSocialDescriptor).address);

			const socialIconElement = document.getElementById(elementId)!;
			socialIconElement.addEventListener("click", redirectCallback);

			return () => socialIconElement.removeEventListener("click", redirectCallback);
		}, []);

		return <button className="SocialIcon Button" id={elementId}>
			<img src={props.social.iconSource} alt={props.social.name}/>
		</button>
	} else if (props.social instanceof ClipboardSocialDescriptor)
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

		return <div id={elementId} className="SocialIcon Button ClipboardSocialIcon">
			<img src={props.social.iconSource} alt={props.social.name}/>
		</div>
	}
}

export interface ISocialIconProperties
{
	social: SocialDescriptor;
}
