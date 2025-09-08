import { SocialDescriptor } from "./SocialDescriptor.ts";
import { ClipboardSocialDescriptor } from "./ClipboardSocialDescriptor.ts";

export class RedirectSocialDescriptor extends SocialDescriptor
{
	static readonly #s_github: RedirectSocialDescriptor = new RedirectSocialDescriptor(
		"GitHub",
		"./assets/github_icon.svg",
		"https://github.com/michiclair");
	static readonly #s_linkedin: RedirectSocialDescriptor = new RedirectSocialDescriptor(
		"LinkedIn",
		"./assets/linkedin_icon.svg",
		"");
	static readonly #s_email: RedirectSocialDescriptor = new RedirectSocialDescriptor(
		"Email",
		"./assets/email_icon.svg",
		`mailto:${ClipboardSocialDescriptor.email.content}`);

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

	public static get email()
	{
		return this.#s_email;
	}
}
