import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import "../styles/TechnologyButton.css";
import { useEffect, useId } from "react";
import { RedirectSocialDescriptor } from "./RedirectSocialDescriptor.ts";

export default function TechnologyButton(props: ITechnologyButtonProperties)
{
	// We use an event listener instead of an <a> tag because react-chrono's timeline overrides the default behavior of <a> tags. (bug)
	const elementId = useId();

	useEffect(() =>
	{
		const redirectCallback = () =>
			window.open(props.technology.source);

		const socialIconElement = document.getElementById(elementId)!;
		socialIconElement.addEventListener("click", redirectCallback);

		return () => socialIconElement.removeEventListener("click", redirectCallback);
	}, []);

	return <button className="TechnologyButton Button" id={elementId}>
		<img src={props.technology.imageSource} alt={props.technology.name}/>
	</button>
}

export interface ITechnologyButtonProperties
{
	technology: TechnologyDescriptor;
}
