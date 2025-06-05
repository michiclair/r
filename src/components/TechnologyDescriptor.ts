export default class TechnologyDescriptor
{
	static readonly #s_csharp: TechnologyDescriptor = new TechnologyDescriptor(
		"C#",
		"https://dotnet.microsoft.com/languages/csharp");
	static readonly #s_typescript: TechnologyDescriptor = new TechnologyDescriptor(
		"TypeScript",
		"https://www.typescriptlang.org/");

	static readonly #s_javascript: TechnologyDescriptor = new TechnologyDescriptor(
		"JavaScript",
		"https://developer.mozilla.org/docs/Web/JavaScript");

	static readonly #s_nodejs: TechnologyDescriptor = new TechnologyDescriptor(
		"Node.js",
		"https://nodejs.org/");

	static readonly #s_react: TechnologyDescriptor = new TechnologyDescriptor(
		"React",
		"https://react.dev/");

	static readonly #s_docker: TechnologyDescriptor = new TechnologyDescriptor(
		"Docker",
		"https://www.docker.com/");

	static readonly #s_dotnet: TechnologyDescriptor = new TechnologyDescriptor(
		".NET",
		"https://dotnet.microsoft.com/");

	static readonly #s_sqlite: TechnologyDescriptor = new TechnologyDescriptor(
		"SQLite",
		"https://www.sqlite.org/");

	static readonly #s_efcore: TechnologyDescriptor = new TechnologyDescriptor(
		"Entity Framework Core",
		"https://learn.microsoft.com/ef/core/");

	static readonly #s_aspnet: TechnologyDescriptor = new TechnologyDescriptor(
		"ASP.NET Core",
		"https://learn.microsoft.com/aspnet/core/");
	static readonly #s_html: TechnologyDescriptor = new TechnologyDescriptor(
		"HTML",
		"https://developer.mozilla.org/en-US/docs/Web/HTML");

	static readonly #s_css: TechnologyDescriptor = new TechnologyDescriptor(
		"CSS",
		"https://developer.mozilla.org/en-US/docs/Web/CSS");
	static readonly #s_electron: TechnologyDescriptor = new TechnologyDescriptor(
		"Electron",
		"https://www.electronjs.org/");
	static readonly #s_tailwind: TechnologyDescriptor = new TechnologyDescriptor(
		"Tailwind CSS",
		"https://tailwindcss.com/");

	readonly #_name: string;
	readonly #_source: string;

	private constructor(name: string, source: string)
	{
		this.#_name = name;
		this.#_source = source;
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

	public get name()
	{
		return this.#_name;
	}

	public get source()
	{
		return this.#_source;
	}

	public static get html() {
		return this.#s_html;
	}

	public static get css() {
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
}
