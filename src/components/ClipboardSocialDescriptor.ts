import { SocialDescriptor } from "./SocialDescriptor.ts";

export class ClipboardSocialDescriptor extends SocialDescriptor
{
	static readonly #_email: ClipboardSocialDescriptor = new ClipboardSocialDescriptor(
		"Email",
		"./assets/email_icon.svg",
		"michironoaware@gmail.com");

	readonly #_content: string;

	public constructor(name: string, iconSource: string, content: string)
	{
		super(name, iconSource);
		this.#_content = content;
	}

	public static get email()
	{
		return this.#_email;
	}

	public get content()
	{
		return this.#_content;
	}
}
