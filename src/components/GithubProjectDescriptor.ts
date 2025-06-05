import ProjectDescriptor from "./ProjectDescriptor.ts";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";

export default class GithubProjectDescriptor extends ProjectDescriptor
{
	readonly #_ownerName: string;
	readonly #_repositoryName: string;

	public constructor(technologies: readonly TechnologyDescriptor[], ownerName: string, repositoryName: string)
	{
		super(technologies);
		this.#_ownerName = ownerName;
		this.#_repositoryName = repositoryName;
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
