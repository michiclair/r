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
				<strong>Creator & Sole Developer</strong>
				<ul>
					<li>Solved the complexity of configuring Discord Rich Presence by building a cross-platform
						desktop app that eliminated the need for coding.</li>
					<li>Impact: Empowered non-technical users to create, preview, and manage multiple Rich Presence
						profiles with persistent storage and real-time Discord integration, improving accessibility and ease of use.</li>
				</ul>
			</div>
		},
		{
			cardTitle: "Aula – Roleplay Social Platform",
			cardSubtitle: "A social platform focused on creating and developing roleplay stories.",
			date: new Date("2025-02-11T23:36:32Z"),
			url: `https://github.com/${GithubProjectDescriptor.aulaServer.ownerName}/${GithubProjectDescriptor.aulaServer.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<strong>Creator & Sole Developer</strong>
				<ul>
					<li>Addressed the lack of structured collaborative storytelling
						tools by designing a scalable backend using .NET 9, ASP.NET Core, and Entity Framework Core.</li>
					<li>Impact: Enabled immersive, role-based collaborative storytelling with real-time chatrooms and audio
						environments; improved operational efficiency with a fully Dockerized deployment pipeline and CLI management tools.</li>
				</ul>
			</div>
		},
		{
			cardTitle: "aula.js – TypeScript Client Library for Aula",
			cardSubtitle: "Modular, framework-agnostic TypeScript client for the Aula platform. Enables seamless integration with REST and Gateway APIs.",
			date: new Date("2025-02-11T23:36:32Z"),
			url: `https://github.com/${GithubProjectDescriptor.aulajs.ownerName}/${GithubProjectDescriptor.aulajs.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<strong>Creator & Maintainer</strong>
				<ul>
					<li>Solved developer integration friction by delivering a modular,
						fully-typed TypeScript library to interact with Aula’s REST and WebSocket APIs across browsers and servers.</li>
					<li>Impact: Accelerated third-party application and bot development
						for the Aula platform by providing a robust, maintainable SDK with extensibility and strict type safety.</li>
				</ul>
			</div>
		},
		{
			cardTitle: "ENTER – Immersive Web UI for Aula",
			cardSubtitle: "Interactive frontend built with React to simulate the narrative atmosphere of ESC.",
			date: new Date("2025-02-11T23:14:28Z"),
			url: `https://github.com/${GithubProjectDescriptor.enter.ownerName}/${GithubProjectDescriptor.enter.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<strong>Creator & Sole Developer</strong>
				<ul>
					<li>Tackled the need for engaging narrative interfaces by building a React-based immersive UI inspired by interactive novels like ESC.</li>
					<li>Impact: Delivered a unique narrative experience that significantly boosted user engagement and session retention within the Aula ecosystem.</li>
					<li>Designed as an interactive tribute to the visual style and atmosphere of the novel ESC</li>
				</ul>
			</div>
		},
		{
			cardTitle: "michi-typehelper – Type-Safe Runtime Validation for JavaScript",
			cardSubtitle: "Lightweight and dependency-free runtime type validation library with TypeScript inference and full environment support.",
			date: new Date("2025-07-11T22:36:33Z"),
			url: `https://github.com/${GithubProjectDescriptor.typeHelper.ownerName}/${GithubProjectDescriptor.typeHelper.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<strong>Creator & Maintainer</strong>
				<ul>
					<li>Solved the absence of lightweight runtime validation by creating a dependency-free
						library with TypeScript inference, compatible across Node.js, Deno, and browsers.</li>
					<li>Impact: Promoted safer coding practices and reduced runtime errors,
						offering developers robust type checks without compromising performance.</li>
				</ul>
			</div>
		},
		{
			cardTitle: "michi-http-abstractions – Composable HTTP Library Inspired by .NET",
			cardSubtitle: "Composable HTTP client abstractions inspired by .NET, built for JavaScript and TypeScript. Designed for portability, and code clarity.",
			date: new Date("2025-07-12T19:19:20Z"),
			url: `https://github.com/${GithubProjectDescriptor.httpAbstractions.ownerName}/${GithubProjectDescriptor.httpAbstractions.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<strong>Creator & Maintainer</strong>
				<ul>
					<li>Solved repetitive and unstructured HTTP client code by designing a modular,
						middleware-driven HTTP abstraction inspired by .NET’s HttpClient model for JavaScript/TypeScript.</li>
					<li>Impact: Improved code maintainability and reusability in complex applications, enabling clean,
						portable HTTP request pipelines across multiple environments (Node.js, Deno, browsers, edge runtimes).</li>
				</ul>
			</div>
		},
		{
			cardTitle: "Docrypted – Local Encryption & Decryption Web Tool",
			cardSubtitle: "A simple browser-based tool to write, encrypt, and decrypt text files fully offline with local processing.",
			date: new Date("2025-07-18T00:00:00Z"),
			url: `https://github.com/${GithubProjectDescriptor.docrypted.ownerName}/${GithubProjectDescriptor.docrypted.repositoryName}`,
			timelineContent: <div className="MyTimelineCardContent">
				<strong>Creator & Sole Developer</strong>
				<ul>
					<li>Solved the need for privacy-friendly text encryption by building a lightweight web app that processes all
						data locally in the browser, eliminating any server dependency.</li>
					<li>Impact: Empowered users to securely encrypt and decrypt sensitive text files with full client-side
						privacy, instant responsiveness, and no setup or installations, enhancing both security and
						accessibility through a clean, minimalist interface.</li>
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
					theme={theme}
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
