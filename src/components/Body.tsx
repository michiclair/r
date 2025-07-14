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
import TechnologyTextRef from "./TechnologyTextRef.tsx";
import MyTimeline from "./MyTimeline.tsx";

export default function Body()
{
	return <div className="Body LightMode BlueTheme">
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
					RedirectSocialDescriptor.email,
					ClipboardSocialDescriptor.email,
				]}/>
			</div>
			<ProfilePicture source="https://avatars.githubusercontent.com/u/77251557"></ProfilePicture>
		</section>
		<section className="Body_experience">
			<h2>Experience</h2>
			<p>
				I have practical experience with a modern backend-focused tech stack, including&nbsp;
				<TechnologyTextRef technology={TechnologyDescriptor.dotnet} />,&nbsp;
				<TechnologyTextRef technology={TechnologyDescriptor.aspnet} />,&nbsp;
				<TechnologyTextRef technology={TechnologyDescriptor.efcore} />,
				which I’ve used to build robust APIs and scalable backend services.
				I focus on writing clear, maintainable code and continuously improving my development practices through real project work.
			</p>
			<p>
				Although my primary interest is backend development,
				I’m also familiar with front-end technologies like&nbsp;
				<TechnologyTextRef technology={TechnologyDescriptor.react} />,&nbsp;
				<TechnologyTextRef technology={TechnologyDescriptor.typescript} />,&nbsp;
				<TechnologyTextRef technology={TechnologyDescriptor.javascript} />,&nbsp;
				<TechnologyTextRef technology={TechnologyDescriptor.html} />,
				and <TechnologyTextRef technology={TechnologyDescriptor.css} />,
				which helps me collaborate effectively in full-stack environments.
				I’ve used <TechnologyTextRef technology={TechnologyDescriptor.docker} /> to
				set up consistent development environments,
				and Node.js mainly for front-end tooling and build processes.
			</p>
			<p style={{ marginBottom: "1.5em" }}>
				Through my projects, I’ve developed a strong foundation in backend engineering
				and a solid understanding of full-stack development.
				I'm eager to join a professional team, deepen my expertise,
				and contribute clean, reliable code to real-world applications.
			</p>
			<MyTimeline></MyTimeline>
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
			<h2>Projects</h2>
			<ProjectCardList projects={[
				GithubProjectDescriptor.aulaServer,
				GithubProjectDescriptor.aulajs,
				GithubProjectDescriptor.enter,
				GithubProjectDescriptor.aliisRpcMaker,
				GithubProjectDescriptor.typeHelper,
				GithubProjectDescriptor.httpAbstractions,
			]}/>
		</section>
		<section>
			<h2>Certifications</h2>
			<ul>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.freecodecamp.org/certification/celinereferenceexception/foundational-c-sharp-with-microsoft">
						Foundational C# with Microsoft
					</a>
				</li>
			</ul>
		</section>
		<section className="Body_languages">
			<h2>Languages</h2>
			<ul>
				<li>Spanish - Fluent</li>
				<li>English - Intermediate (able to read, write, and communicate in technical contexts)</li>
				<li>Latin - Intermediate</li>
			</ul>
		</section>
		<div style={{ marginBottom: "10em" }}></div>
	</div>
}
