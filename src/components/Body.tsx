import React from "react";
import "../styles/Body.css";
import ProjectCard from "./ProjectCard.tsx";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import ProjectDescriptor from "./ProjectDescriptor.ts";
import GithubProjectDescriptor from "./GithubProjectDescriptor.ts";
import ProfilePicture from "./ProfilePicture.tsx";
import ProjectCardList from "./ProjectCardList.tsx";
import StackCard from "./StackCard.tsx";
import TechnologyButton from "./TechnologyButton.tsx";
import TechnologyButtonList from "./TechnologyButtonList.tsx";
import SocialIcon from "./SocialIcon.tsx";
import SocialIconList from "./SocialIconList.tsx";
import { RedirectSocialDescriptor } from "./RedirectSocialDescriptor.ts";
import { ClipboardSocialDescriptor } from "./ClipboardSocialDescriptor.ts";

export default function Body()
{
	return <div className="Body">
		<section className="Body_presentation">
			<div>
				<h1>Name placeholder</h1>
				<p>
					Enthusiastic and dedicated developer with hands-on experience in
					personal projects and a strong passion for building robust, scalable solutions.
					Actively seeking my first professional opportunity to apply my
					skills and grow within a real-world development environment.
				</p>
				<SocialIconList socials={[
					RedirectSocialDescriptor.github,
					RedirectSocialDescriptor.linkedin,
					ClipboardSocialDescriptor.email,
					ClipboardSocialDescriptor.phone,
				]} />
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
				TechnologyDescriptor.tailwind,
				TechnologyDescriptor.typescript,
				TechnologyDescriptor.javascript,
				TechnologyDescriptor.css,
				TechnologyDescriptor.html,
			]} />
		</section>
		<section className="Body_projects">
			<h2>PROJECTS</h2>
			<ProjectCardList projects={[
				GithubProjectDescriptor.aulaServer,
				GithubProjectDescriptor.aulajs,
				GithubProjectDescriptor.enter,
				GithubProjectDescriptor.aliisRpcMaker,
			]} />
		</section>
		<section>
			<h2>CERTIFICATIONS</h2>
			<ul>
				<li>
					<a href="">
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
		<div style={{ marginBottom: "10em"}}></div>
	</div>
}
