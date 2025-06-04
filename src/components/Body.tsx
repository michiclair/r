import React from "react";
import "../styles/Body.css";

export default function Body(args: BodyProperties)
{
	return <div className="Body">{args.children}</div>
}

export interface BodyProperties
{
	children?: React.ReactNode;
}
