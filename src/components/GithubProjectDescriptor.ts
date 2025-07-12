import ProjectDescriptor from "./ProjectDescriptor.ts";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";

export default class GithubProjectDescriptor extends ProjectDescriptor
{
	static readonly #s_aulajs: GithubProjectDescriptor = new GithubProjectDescriptor(
		[
			TechnologyDescriptor.javascript,
			TechnologyDescriptor.typescript,
			TechnologyDescriptor.nodejs,
		],
		"michironoaware",
		"aula.js");
	static readonly #s_aulaServer: GithubProjectDescriptor = new GithubProjectDescriptor(
		[
			TechnologyDescriptor.dotnet,
			TechnologyDescriptor.aspnet,
			TechnologyDescriptor.csharp,
			TechnologyDescriptor.efcore,
			TechnologyDescriptor.docker,
		],
		"michironoaware",
		"Aula-Server");
	static readonly #s_enter: GithubProjectDescriptor = new GithubProjectDescriptor(
		[
			TechnologyDescriptor.javascript,
			TechnologyDescriptor.typescript,
			TechnologyDescriptor.nodejs,
			TechnologyDescriptor.html,
			TechnologyDescriptor.css,
			TechnologyDescriptor.react,
		],
		"michironoaware",
		"ENTER");
	static readonly #s_aliisRpcMaker: GithubProjectDescriptor = new GithubProjectDescriptor(
		[
			TechnologyDescriptor.javascript,
			TechnologyDescriptor.typescript,
			TechnologyDescriptor.nodejs,
			TechnologyDescriptor.html,
			TechnologyDescriptor.css,
			TechnologyDescriptor.tailwind,
			TechnologyDescriptor.electron
		],
		"michironoaware",
		"AliisRPCMaker");
	static readonly #s_typeHelper: GithubProjectDescriptor = new GithubProjectDescriptor(
		[
			TechnologyDescriptor.javascript,
			TechnologyDescriptor.typescript,
			TechnologyDescriptor.nodejs,
		],
		"michironoaware",
		"michi-typehelper");
	static readonly #s_httpAbstractions: GithubProjectDescriptor = new GithubProjectDescriptor(
		[
			TechnologyDescriptor.javascript,
			TechnologyDescriptor.typescript,
			TechnologyDescriptor.nodejs,
		],
		"michironoaware",
		"michi-http-abstractions");

	readonly #_ownerName: string;
	readonly #_repositoryName: string;

	private constructor(technologies: readonly TechnologyDescriptor[], ownerName: string, repositoryName: string)
	{
		super(technologies);
		this.#_ownerName = ownerName;
		this.#_repositoryName = repositoryName;
	}

	public static get aulajs()
	{
		return this.#s_aulajs;
	}

	public static get aulaServer()
	{
		return this.#s_aulaServer;
	}

	public static get enter()
	{
		return this.#s_enter;
	}

	public static get aliisRpcMaker()
	{
		return this.#s_aliisRpcMaker;
	}

	public static get typeHelper()
	{
		return this.#s_typeHelper;
	}

	public static get httpAbstractions()
	{
		return this.#s_httpAbstractions;
	}

	public get ownerName()
	{
		return this.#_ownerName;
	}

	public get repositoryName()
	{
		return this.#_repositoryName;
	}
}
