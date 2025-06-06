import { SocialDescriptor } from "./SocialDescriptor.ts";

export class ClipboardSocialDescriptor extends SocialDescriptor
{
	static readonly #_email: ClipboardSocialDescriptor = new ClipboardSocialDescriptor(
		"Email",
		"/assets/email_icon.svg",
		"michironoaware@gmail.com");
	static readonly #_phone: ClipboardSocialDescriptor = new ClipboardSocialDescriptor(
		"Phone",
		"/assets/phone_icon.svg",
		"+54 9 351 623 6611");

	readonly #_content: string;

	public constructor(name: string, iconSource: string, content: string)
	{
		super(name, iconSource);
		this.#_content = content;
	}

	public get content()
	{
		return this.#_content;
	}

	public static get email()
	{
		return this.#_email;
	}

	public static get phone()
	{
		return this.#_phone;
	}
}
