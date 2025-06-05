import React from "react";
import "../styles/Header.css";
import ProfilePicture from "./ProfilePicture";

export default function Header()
{
	return <header className="Header">
		<div className="leftSide">
			<ProfilePicture
				uri={new URL("https://avatars.githubusercontent.com/u/77251557")}
				className="profilePicture"/>
		</div>
		<div className="rightSide">
		</div>
	</header>
}
