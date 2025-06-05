import React from "react";
import "../styles/Body.css";

export default function Body(args: IBodyProperties)
{
	return <div className="Body">{args.children}</div>
}

export interface IBodyProperties
{
	children?: React.ReactNode;
}
