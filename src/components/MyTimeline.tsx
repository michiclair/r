import React from 'react';
// @ts-ignore
import { Chrono } from 'react-chrono';
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import "../styles/MyTimeline.css";
import GithubProjectDescriptor from "./GithubProjectDescriptor.ts";

export default function MyTimeline() {
	const theme = {
		primary: "var(--primary)",
		secondary: "var(--secondary)",
		cardTitleColor: "var(--primary)",
		cardSubtitleColor: "black",
	};

	const items = [
		{
			cardTitle: "AliisRPCMaker",
			cardSubtitle: "Desktop application built to simplify the creation of custom Discord Rich Presences.",
			date: new Date("2022-09-09T21:12:36Z"),
			url: `https://github.com/${GithubProjectDescriptor.aliisRpcMaker.ownerName}/${GithubProjectDescriptor.aliisRpcMaker.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<p>
					Designed and developed a cross-platform desktop application using Electron and TailwindCSS to allow users to
					generate and apply custom Discord Rich Presences without coding. The app streamlined the customization process and
					provided real-time preview and management features.
				</p>
				<ul>
					<li>Implemented persistent configuration storage and live Discord integration</li>
					<li>Enabled users to create, edit, and manage multiple RPC profiles</li>
				</ul>
			</div>
		},
		{
			cardTitle: "Aula – Roleplay Social Platform",
			cardSubtitle: "A social platform focused on creating and developing roleplay stories.",
			date: new Date("2025-05-26T20:34:57Z"),
			url: `https://github.com/${GithubProjectDescriptor.aulaServer.ownerName}/${GithubProjectDescriptor.aulaServer.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<p>
					Engineered a full-featured backend system for a narrative-driven social network, using .NET 9, ASP.NET Core,
					and Entity Framework Core. Aula enables collaborative storytelling through chat "rooms", real-time interactions,
					role-based access control, and ambient audio.
					Inspired by the interactive novel <a href="https://store.steampowered.com/app/1318800/ESC/" target="_blank">ESC</a>,
					the platform emphasizes imagination over visuals.
				</p>
				<ul>
					<li>Designed and deployed REST and WebSocket APIs to support both synchronous and real-time client communication</li>
					<li>Implemented modular configuration, user permission systems, and dynamic audio-based environments</li>
					<li>Developed CLI commands for server management</li>
					<li>Dockerized for production deployment and local development</li>
				</ul>
			</div>
		},
		{
			cardTitle: "aula.js – TypeScript Client Library for Aula",
			cardSubtitle: "Modular, framework-agnostic TypeScript client for the Aula platform. Enables seamless integration with REST and Gateway APIs.",
			date: new Date("2025-02-11T23:36:32Z"),
			url: `https://github.com/${GithubProjectDescriptor.aulajs.ownerName}/${GithubProjectDescriptor.aulajs.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<p>
					Developed a framework-agnostic, fully-typed TypeScript library to interact with the Aula
					platform. <code>aula.js</code> provides seamless integration with both the REST and real-time WebSocket APIs,
					enabling developers to build scalable, maintainable frontends and bots for narrative roleplay applications.
				</p>
				<ul>
					<li>Implemented a modular architecture supporting extensibility and framework independence</li>
					<li>Integrated REST and Gateway APIs with strongly-typed interfaces and event-based hooks</li>
					<li>Supports both browser and server-side usage with full ES module compatibility</li>
				</ul>
			</div>
		},
		{
			cardTitle: "ENTER – Immersive Web UI for Aula",
			cardSubtitle: "Interactive frontend built with React to simulate the narrative atmosphere of ESC.",
			date: new Date("2025-02-11T23:14:28Z"),
			url: `https://github.com/${GithubProjectDescriptor.enter.ownerName}/${GithubProjectDescriptor.enter.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<p>
					Created a fully interactive React-based interface for the Aula platform, replicating the aesthetic and user flow of the interactive novel <a href="https://store.steampowered.com/app/1318800/ESC/" target="_blank">ESC</a>. ENTER acts as the primary client for narrative interaction, integrating tightly with the <code>aula.js</code> library and Aula backend APIs.
				</p>
				<ul>
					<li>Designed as an interactive tribute to the visual style and atmosphere of the novel ESC</li>
					<li>Integrated Gateway API events via <code>aula.js</code> to enable real-time communication and room transitions</li>
				</ul>
			</div>
		},
		{
			cardTitle: "michi-typehelper – Type-Safe Runtime Validation for JavaScript",
			cardSubtitle: "Lightweight and dependency-free runtime type validation library with TypeScript inference and full environment support.",
			date: new Date("2025-07-11T22:36:33Z"),
			url: `https://github.com/${GithubProjectDescriptor.typeHelper.ownerName}/${GithubProjectDescriptor.typeHelper.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<p>
					Developed a highly modular and environment-agnostic library to perform runtime type validation in JavaScript,
					with first-class TypeScript integration and smart type inference.
					It enables safer code practices without adding external dependencies or compromising performance.
				</p>
				<ul>
					<li>Designed a rich API for runtime type checking and validation across environments (Node.js, Deno, browser)</li>
					<li>Implemented robust assertion utilities that throw context-aware <code>TypeError</code>s for defensive programming</li>
					<li>Enabled support for TypeScript-native types, enum validation, class constructors, and union types</li>
				</ul>
			</div>
		},
		{
			cardTitle: "michi-http-abstractions – Composable HTTP Library Inspired by .NET",
			cardSubtitle: "Composable HTTP client abstractions inspired by .NET, built for JavaScript and TypeScript. Designed for portability, and code clarity.",
			date: new Date("2025-07-12T19:19:20Z"),
			url: `https://github.com/${GithubProjectDescriptor.httpAbstractions.ownerName}/${GithubProjectDescriptor.httpAbstractions.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<p>
					Developed a framework-agnostic HTTP abstraction library based
					on .NET's <code>HttpClient</code> model, adapted for JavaScript/TypeScript.
					Enables building structured HTTP pipelines with clear separation of concerns and reusability.
				</p>
				<ul>
					<li>Implements abstractions like <code>HttpClient</code>, <code>HttpRequestMessage</code>, <code>HttpContent</code>, and <code>HttpMessageHandler</code></li>
					<li>Supports middleware-style chaining for logging, retries, and authentication</li>
					<li>Runs in Node.js, Deno, browsers, and edge runtimes without modification</li>
					<li>TypeScript-first design with clean, modular architecture</li>
				</ul>
			</div>
		}
	] satisfies TimelineItemModel[];

	return (
		<div className="MyTimeline">
			<Chrono
					//disableToolbar
					slideShow
					slideShowType={"slide_from_sides"}
					highlightCardsOnHover
					items={items}
					mode="VERTICAL"
					semanticTags={{
						cardTitle: 'h1',
						cardSubtitle: 'h2',
					}}
					classNames={{
						card: 'MyTimelineCard',
						controls: 'MyTimelineControls',
					}}/>
		</div>
	);
}
