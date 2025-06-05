import React from "react";
import "../styles/ProfilePicture.css";

export default function ProfilePicture(props: ProfilePictureProperties)
{
	return <img
		className={"ProfilePicture" + (props.className ? ` ${props.className}` : "")}
		src={props.uri.href}
		alt="Profile Picture"
		style={{
			width: props.width,
			height: props.height,
		}}/>
}

export interface ProfilePictureProperties
{
	className?: string;
	uri: URL;
	width?: string;
	height?: string;
}
