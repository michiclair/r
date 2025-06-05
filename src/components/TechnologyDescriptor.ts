export default class TechnologyDescriptor
{
	static readonly #s_csharp: TechnologyDescriptor = new TechnologyDescriptor(
		"C#",
		"https://dotnet.microsoft.com/en-us/languages/csharp");

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

	public get name()
	{
		return this.#_name;
	}

	public get source()
	{
		return this.#_source;
	}
}
