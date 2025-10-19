import React from "react";
import "../styles/Body.css";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import { TimelineEventDescriptor } from "./TimelineEventDescriptor.ts";
import GithubProjectDescriptor from "./GithubProjectDescriptor.ts";
import ProfilePicture from "./ProfilePicture.tsx";
import ProjectCardList from "./ProjectCardList.tsx";
import TechnologyButtonList from "./TechnologyButtonList.tsx";
import SocialIconList from "./SocialIconList.tsx";
import { RedirectSocialDescriptor } from "./RedirectSocialDescriptor.ts";
import { ClipboardSocialDescriptor } from "./ClipboardSocialDescriptor.ts";
import TechnologyTextRef from "./TechnologyTextRef.tsx";
import MyTimeline from "./MyTimeline.tsx";
import Timeline from "./Timeline.tsx";

export default function Body()
{
	return <div className="Body LightMode BlueTheme">
		<section className="Body_presentation">
			<div>
				<h1>Espinach</h1>
				<p>
					Enthusiastic and dedicated developer with hands-on experience in
					projects and a strong passion for building robust, scalable solutions.
					Actively seeking professional opportunities to apply my
					skills and grow within a real-world development environment.
				</p>
				<p>Córdoba, Argentina.</p>
				<SocialIconList socials={[
					RedirectSocialDescriptor.github,
					RedirectSocialDescriptor.email,
					ClipboardSocialDescriptor.email,
				]}/>
			</div>
			{
				// My GitHub profile picture. Hidden.
				//<ProfilePicture source="https://avatars.githubusercontent.com/u/77251557"></ProfilePicture>
			}
		</section>
		<section className="Body_techSkills">
			<h2>Technical Skills</h2>
			<h3>Languages & Frameworks</h3>
			<TechnologyButtonList technologies={[
				TechnologyDescriptor.dotnet,
				TechnologyDescriptor.aspnet,
				TechnologyDescriptor.csharp,
				TechnologyDescriptor.efcore,
				TechnologyDescriptor.nodejs,
				TechnologyDescriptor.react,
				TechnologyDescriptor.typescript,
				TechnologyDescriptor.javascript,
				TechnologyDescriptor.css,
				TechnologyDescriptor.html,
				TechnologyDescriptor.tailwind,
				TechnologyDescriptor.electron,
			]}/>
			<h3>Tools & Platforms</h3>
			<TechnologyButtonList technologies={[
				TechnologyDescriptor.jetBrainsRider,
				TechnologyDescriptor.git,
				TechnologyDescriptor.github,
				TechnologyDescriptor.githubActions,
				TechnologyDescriptor.swagger,
				TechnologyDescriptor.scalar,
				TechnologyDescriptor.xUnit,
				TechnologyDescriptor.aws,
				TechnologyDescriptor.docker,
			]}/>
		</section>
		<section className="Body_experience">
			<h2>Experience</h2>
			<Timeline events={[
				TimelineEventDescriptor.aliisRPCMaker,
				TimelineEventDescriptor.aulaServer,
				TimelineEventDescriptor.aulajs,
				TimelineEventDescriptor.enter,
				TimelineEventDescriptor.docrypted,
				TimelineEventDescriptor.typeHelper,
				TimelineEventDescriptor.httpAbstractions,
			]}/>
		</section>
		<section>
			<h2>Certifications</h2>
			<ul>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.freecodecamp.org/certification/espinach/foundational-c-sharp-with-microsoft">
						Foundational C# with Microsoft
					</a>
				</li>
			</ul>
		</section>
		<section className="Body_languages">
			<h2>Languages</h2>
			<ul>
				<li>Spanish (fluent)</li>
				<li>English (able to read, write, and communicate in technical contexts)</li>
				<li>Latin (studied grammar)</li>
			</ul>
		</section>
		<div style={{ marginBottom: "10em" }}></div>
	</div>
}
