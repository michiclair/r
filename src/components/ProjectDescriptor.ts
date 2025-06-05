import TechnologyDescriptor from "./TechnologyDescriptor.ts";

export default abstract class ProjectDescriptor
{
	readonly #_technologies: readonly TechnologyDescriptor[];

	protected constructor(technologies: readonly TechnologyDescriptor[])
	{
		this.#_technologies = technologies;
	}

	public get technologies()
	{
		return this.#_technologies;
	}
}
