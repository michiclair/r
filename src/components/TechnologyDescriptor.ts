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
		"./assets/electron.png");
	static readonly #s_tailwind: TechnologyDescriptor = new TechnologyDescriptor(
		"Tailwind CSS",
		"https://tailwindcss.com/",
		"./assets/tailwind.png");

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
