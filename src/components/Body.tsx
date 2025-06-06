import React from "react";
import "../styles/Body.css";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import GithubProjectDescriptor from "./GithubProjectDescriptor.ts";
import ProfilePicture from "./ProfilePicture.tsx";
import ProjectCardList from "./ProjectCardList.tsx";
import TechnologyButtonList from "./TechnologyButtonList.tsx";
import SocialIconList from "./SocialIconList.tsx";
import { RedirectSocialDescriptor } from "./RedirectSocialDescriptor.ts";
import { ClipboardSocialDescriptor } from "./ClipboardSocialDescriptor.ts";

export default function Body()
{
	return <div className="Body">
		<section className="Body_presentation">
			<div>
				<h1>Espinach</h1>
				<p>
					Enthusiastic and dedicated developer with hands-on experience in
					personal projects and a strong passion for building robust, scalable solutions.
					Actively seeking my first professional opportunity to apply my
					skills and grow within a real-world development environment.
				</p>
				<p>Córdoba, Argentina.</p>
				<SocialIconList socials={[
					RedirectSocialDescriptor.github,
					RedirectSocialDescriptor.linkedin,
					ClipboardSocialDescriptor.email,
					ClipboardSocialDescriptor.phone,
				]}/>
			</div>
			<ProfilePicture source="https://avatars.githubusercontent.com/u/77251557"></ProfilePicture>
		</section>
		<section className="Body_technologies">
			<h2>TECHNOLOGIES</h2>
			<TechnologyButtonList technologies={[
				TechnologyDescriptor.dotnet,
				TechnologyDescriptor.aspnet,
				TechnologyDescriptor.csharp,
				TechnologyDescriptor.efcore,
				TechnologyDescriptor.docker,
				TechnologyDescriptor.nodejs,
				TechnologyDescriptor.react,
				TechnologyDescriptor.typescript,
				TechnologyDescriptor.javascript,
				TechnologyDescriptor.css,
				TechnologyDescriptor.html,
			]}/>
		</section>
		<section className="Body_projects">
			<h2>PROJECTS</h2>
			<ProjectCardList projects={[
				GithubProjectDescriptor.aulaServer,
				GithubProjectDescriptor.aulajs,
				GithubProjectDescriptor.enter,
				GithubProjectDescriptor.aliisRpcMaker,
			]}/>
		</section>
		<section>
			<h2>CERTIFICATIONS</h2>
			<ul>
				<li>
					<a href="https://www.freecodecamp.org/certification/celinereferenceexception/foundational-c-sharp-with-microsoft">
						Foundational C# with Microsoft
					</a>
				</li>
			</ul>
		</section>
		<section className="Body_languages">
			<h2>LANGUAGES</h2>
			<ul>
				<li>Spanish - Fluent</li>
				<li>English - Intermediate</li>
				<li>Latin - Intermediate</li>
			</ul>
		</section>
		<div style={{ marginBottom: "10em" }}></div>
	</div>
}
