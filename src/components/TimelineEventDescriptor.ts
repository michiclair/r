import GithubProjectDescriptor from "./GithubProjectDescriptor.ts";

export class TimelineEventDescriptor
{
	static readonly #_aliisRPCMaker = new TimelineEventDescriptor(
		"AliisRPCMaker",
		"Desktop application built to simplify the creation of custom Discord Rich Presences.",
		"Solved the complexity of configuring Discord Rich Presence by building a cross-platform desktop app that eliminated the need for coding.",
		"Empowered non-technical users to create, preview, and manage multiple Rich Presence profiles with persistent storage and real-time Discord integration.",
		new Date("2022-09-09T21:12:36Z"), null,
		"Creator & Developer",
		GithubProjectDescriptor.aliisRpcMaker.url
	);
	static readonly #_aulaServer = new TimelineEventDescriptor(
		"Aula – Roleplay Social Platform",
		"A social platform focused on creating and developing roleplay stories.",
		"Addressed the lack of structured collaborative storytelling tools by designing a scalable backend using .NET 9, ASP.NET Core, and Entity Framework Core.",
		"Enabled immersive, role-based collaborative storytelling with real-time chatrooms and audio environments; improved operational efficiency with a fully Dockerized deployment pipeline and CLI management tools.",
		new Date("2025-02-11T23:36:32Z"), null,
		"Creator & Developer",
		GithubProjectDescriptor.aulaServer.url
	);
	static readonly #_aulajs = new TimelineEventDescriptor(
		"aula.js – TypeScript Client Library for Aula",
		"Modular, framework-agnostic TypeScript client for the Aula platform.",
		"Solved developer integration friction by delivering a modular, fully-typed TypeScript library to interact with Aula’s REST and WebSocket APIs across browsers and servers.",
		"Accelerated third-party application and bot development for the Aula platform by providing a robust, maintainable SDK with extensibility and strict type safety.",
		new Date("2025-02-11T23:36:32Z"), null,
		"Creator & Maintainer",
		GithubProjectDescriptor.aulajs.url
	);
	static readonly #_enter = new TimelineEventDescriptor(
		"ENTER – Immersive Web UI for Aula",
		"Interactive frontend built with React to simulate the narrative atmosphere of ESC.",
		"Tackled the need for engaging narrative interfaces by building a React-based immersive UI inspired by interactive novels like ESC.",
		"Delivered a unique narrative experience that significantly boosted user engagement and session retention within the Aula ecosystem.",
		new Date("2025-02-11T23:14:28Z"), null,
		"Creator & Developer",
		GithubProjectDescriptor.enter.url
	);
	static readonly #_typeHelper = new TimelineEventDescriptor(
		"michi-typehelper",
		"Lightweight and dependency-free runtime type validation library with TypeScript inference.",
		"Solved the absence of lightweight runtime validation by creating a dependency-free library with TypeScript inference, compatible across Node.js, Deno, and browsers.",
		"Promoted safer coding practices and reduced runtime errors, offering developers robust type checks without compromising performance.",
		new Date("2025-07-11T22:36:33Z"), null,
		"Creator & Developer",
		GithubProjectDescriptor.typeHelper.url
	);
	static readonly #_httpAbstractions = new TimelineEventDescriptor(
		"michi-http-abstractions",
		"Composable HTTP client abstractions inspired by .NET, built for JavaScript and TypeScript.",
		"Solved repetitive and unstructured HTTP client code by designing a modular, middleware-driven HTTP abstraction inspired by .NET’s HttpClient model for JavaScript/TypeScript.",
		"Improved code maintainability and reusability in complex applications, enabling clean, portable HTTP request pipelines across multiple environments (Node.js, Deno, browsers, edge runtimes).",
		new Date("2025-07-12T19:19:20Z"), null,
		"Creator & Developer",
		GithubProjectDescriptor.httpAbstractions.url
	);
	static readonly #_docrypted = new TimelineEventDescriptor(
		"Docrypted",
		"A simple browser-based tool to write, encrypt, and decrypt text files fully offline with local processing.",
		"Solved the need for privacy-friendly text encryption by building a lightweight web app that processes all data locally in the browser, eliminating any server dependency.",
		"Empowered users to securely encrypt and decrypt sensitive text files with full client-side privacy, instant responsiveness, and no setup or installations, enhancing both security and accessibility through a clean, minimalist interface.",
		new Date("2025-07-18T00:00:00Z"), null,
		"Creator & Developer",
		GithubProjectDescriptor.docrypted.url
	);

	readonly #_name: string;
	readonly #_description: string;
	readonly #_solved: string;
	readonly #_impact: string;
	readonly #_startDate: Date;
	readonly #_endDate: Date | null;
	readonly #_role: string;
	readonly #_source: string | null;

	protected constructor(name: string, description: string, solved: string, impact: string, startDate: Date, endDate: Date | null, role: string, source: string | null)
	{
		this.#_name = name;
		this.#_description = description;
		this.#_solved = solved;
		this.#_impact = impact;
		this.#_startDate = startDate;
		this.#_endDate = endDate;
		this.#_role = role;
		this.#_source = source;
	}

	public static get aliisRPCMaker()
	{
		return this.#_aliisRPCMaker;
	}

	public static get aulaServer()
	{
		return this.#_aulaServer;
	}

	public static get aulajs()
	{
		return this.#_aulajs;
	}

	public static get enter()
	{
		return this.#_enter;
	}

	public static get typeHelper()
	{
		return this.#_typeHelper;
	}

	public static get httpAbstractions()
	{
		return this.#_httpAbstractions;
	}

	public static get docrypted()
	{
		return this.#_docrypted;
	}

	public get name()
	{
		return this.#_name;
	}

	public get description()
	{
		return this.#_description;
	}

	public get solved()
	{
		return this.#_solved;
	}

	public get impact()
	{
		return this.#_impact;
	}

	public get startDate()
	{
		return this.#_startDate;
	}

	public get endDate()
	{
		return this.#_endDate;
	}

	public get role()
	{
		return this.#_role;
	}

	public get source()
	{
		return this.#_source;
	}
}
