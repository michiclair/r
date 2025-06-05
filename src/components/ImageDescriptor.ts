export default class ImageDescriptor
{
	readonly #_source: string;
	readonly #_alternativeText: string;

	private constructor(source: string, alternativeText: string)
	{
		this.#_source = source;
		this.#_alternativeText = alternativeText;
	}

	public get source()
	{
		return this.#_source;
	}

	public get alternativeText()
	{
		return this.#_alternativeText;
	}
}
