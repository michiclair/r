export abstract class SocialDescriptor
{
	readonly #_name: string;
	readonly #_iconSource: string;

	protected constructor(name: string, iconSource: string)
	{
		this.#_name = name;
		this.#_iconSource = iconSource;
	}

	public get name()
	{
		return this.#_name;
	}

	public get iconSource()
	{
		return this.#_iconSource;
	}
}
