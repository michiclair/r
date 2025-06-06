import { SocialDescriptor } from "./SocialDescriptor.ts";

export class RedirectSocialDescriptor extends SocialDescriptor
{
	static readonly #s_github: RedirectSocialDescriptor = new RedirectSocialDescriptor(
		"GitHub",
		"/assets/github_icon.svg",
		"https://github.com/michironoaware");
	static readonly #s_linkedin: RedirectSocialDescriptor = new RedirectSocialDescriptor(
		"LinkedIn",
		"/assets/linkedin_icon.svg",
		"");

	readonly #_address: string;

	public constructor(name: string, iconSource: string, address: string)
	{
		super(name, iconSource);
		this.#_address = address;
	}

	public static get github()
	{
		return this.#s_github;
	}

	public static get linkedin()
	{
		return this.#s_linkedin;
	}

	public get address()
	{
		return this.#_address;
	}
}
