import React from "react";
import "../styles/ProfilePicture.css";

export default function ProfilePicture(props: IProfilePictureProperties)
{
	return <img
		className={"ProfilePicture" + (props.className ? ` ${props.className}`:"")}
		src={props.source}
		alt="Profile Picture"
		style={{
			width: props.width,
			height: props.height,
		}}/>
}

export interface IProfilePictureProperties
{
	className?: string;
	source: string;
	width?: string;
	height?: string;
}
