import React from "react";
import "../styles/Body.css";
import ProjectCard from "./ProjectCard.tsx";
import TechnologyDescriptor from "./TechnologyDescriptor.ts";
import ProjectDescriptor from "./ProjectDescriptor.ts";
import GithubProjectDescriptor from "./GithubProjectDescriptor.ts";
import ProfilePicture from "./ProfilePicture.tsx";
import ProjectCardList from "./ProjectCardList.tsx";

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
			</div>
			<ProfilePicture source="https://avatars.githubusercontent.com/u/77251557"></ProfilePicture>
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
	</div>
}
