export default class TechnologyDescriptor
{
	static readonly #s_csharp: TechnologyDescriptor = new TechnologyDescriptor(
		"C#",
		"https://dotnet.microsoft.com/languages/csharp",
		"./assets/csharp.png");
	static readonly #s_typescript: TechnologyDescriptor = new TechnologyDescriptor(
		"TypeScript",
		"https://www.typescriptlang.org/",
		"./assets/typescript.svg");

	static readonly #s_javascript: TechnologyDescriptor = new TechnologyDescriptor(
		"JavaScript",
		"https://developer.mozilla.org/docs/Web/JavaScript",
		"./assets/javascript.svg");

	static readonly #s_nodejs: TechnologyDescriptor = new TechnologyDescriptor(
		"Node.js",
		"https://nodejs.org/",
		"./assets/nodejs.png");

	static readonly #s_react: TechnologyDescriptor = new TechnologyDescriptor(
		"React",
		"https://react.dev/",
		"./assets/react.png");

	static readonly #s_docker: TechnologyDescriptor = new TechnologyDescriptor(
		"Docker",
		"https://www.docker.com/",
		"./assets/docker.png");

	static readonly #s_dotnet: TechnologyDescriptor = new TechnologyDescriptor(
		".NET",
		"https://dotnet.microsoft.com/",
		"./assets/dotnet.png");

	static readonly #s_sqlite: TechnologyDescriptor = new TechnologyDescriptor(
		"SQLite",
		"https://www.sqlite.org/",
		"./assets/sqlite.png");

	static readonly #s_efcore: TechnologyDescriptor = new TechnologyDescriptor(
		"Entity Framework Core",
		"https://learn.microsoft.com/ef/core/",
		"./assets/efcore.png");

	static readonly #s_aspnet: TechnologyDescriptor = new TechnologyDescriptor(
		"ASP.NET Core",
		"https://learn.microsoft.com/aspnet/core/",
		"./assets/aspnet.jpg");
	static readonly #s_html: TechnologyDescriptor = new TechnologyDescriptor(
		"HTML",
		"https://developer.mozilla.org/en-US/docs/Web/HTML",
		"./assets/html.svg");

	static readonly #s_css: TechnologyDescriptor = new TechnologyDescriptor(
		"CSS",
		"https://developer.mozilla.org/en-US/docs/Web/CSS",
		"./assets/css.svg");
	static readonly #s_electron: TechnologyDescriptor = new TechnologyDescriptor(
		"Electron",
		"https://www.electronjs.org/",
		"./assets/electron.webp");
	static readonly #s_tailwind: TechnologyDescriptor = new TechnologyDescriptor(
		"Tailwind CSS",
		"https://tailwindcss.com/",
		"./assets/tailwind.png");
	static readonly #s_jetBrainsRider: TechnologyDescriptor = new TechnologyDescriptor(
		"JetBrains Rider",
		"https://www.jetbrains.com/rider/",
		"./assets/jetbrainsrider.webp");
	static readonly #s_git: TechnologyDescriptor = new TechnologyDescriptor(
		"Git",
		"https://git-scm.com/doc",
		"./assets/git.png");
	static readonly #s_github: TechnologyDescriptor = new TechnologyDescriptor(
		"Github",
		"https://github.com/",
		"./assets/github_icon.svg");
	static readonly #s_githubActions: TechnologyDescriptor = new TechnologyDescriptor(
		"Github Actions",
		"https://github.com/",
		"./assets/github_icon.svg");
	static readonly #s_swagger: TechnologyDescriptor = new TechnologyDescriptor(
		"Swagger",
		"https://swagger.io/",
		"./assets/swagger.png");
	static readonly #s_scalar: TechnologyDescriptor = new TechnologyDescriptor(
		"Scalar",
		"https://github.com/ScalaR/ScalaR",
		"./assets/scalar.svg");
	static readonly #s_xUnit: TechnologyDescriptor = new TechnologyDescriptor(
		"XUnit",
		"https://github.com/xunit/",
		"./assets/xunit.png");
	static readonly #s_aws: TechnologyDescriptor = new TechnologyDescriptor(
		"AWS",
		"https://aws.amazon.com/",
		"./assets/aws.png");

	readonly #_name: string;
	readonly #_source: string;
	readonly #_imageSource: string;

	private constructor(name: string, source: string, imageSource: string)
	{
		this.#_name = name;
		this.#_source = source;
		this.#_imageSource = imageSource;
	}

	public static get csharp()
	{
		return this.#s_csharp;
	}

	public static get typescript()
	{
		return this.#s_typescript;
	}

	public static get javascript()
	{
		return this.#s_javascript;
	}

	public static get nodejs()
	{
		return this.#s_nodejs;
	}

	public static get react()
	{
		return this.#s_react;
	}

	public static get docker()
	{
		return this.#s_docker;
	}

	public static get dotnet()
	{
		return this.#s_dotnet;
	}

	public static get sqlite()
	{
		return this.#s_sqlite;
	}

	public static get efcore()
	{
		return this.#s_efcore;
	}

	public static get aspnet()
	{
		return this.#s_aspnet;
	}

	public static get html()
	{
		return this.#s_html;
	}

	public static get css()
	{
		return this.#s_css;
	}

	public static get electron()
	{
		return this.#s_electron;
	}

	public static get tailwind()
	{
		return this.#s_tailwind;
	}

	public static get jetBrainsRider()
	{
		return this.#s_jetBrainsRider;
	}

	public static get git()
	{
		return this.#s_git;
	}

	public static get github()
	{
		return this.#s_github;
	}

	public static get githubActions()
	{
		return this.#s_githubActions;
	}

	public static get swagger()
	{
		return this.#s_swagger;
	}

	public static get scalar()
	{
		return this.#s_scalar;
	}

	public static get xUnit()
	{
		return this.#s_xUnit;
	}

	public static get aws()
	{
		return this.#s_aws;
	}

	public get name()
	{
		return this.#_name;
	}

	public get source()
	{
		return this.#_source;
	}

	public get imageSource()
	{
		return this.#_imageSource;
	}
}
