import { Component } from "react";
import { LoadImage } from "../utils";
import "../styles/projects.css";

class Projects extends Component {
	state = {};
	render() {
		return (
			<div className="Projects">
				<h1 className="Title">
					<span>Projects</span>
				</h1>
				<this.Project
					title="All in one discord bot made with python"
					description="This bot is a all in one bot. It adds a lot of demanded commands to the server with much
		more information than any other bots. (The messages can be customized to show
		minimal/maximal information). It adds the ability to play music, cleanup messages, user
		info, image manipulation, server management, raid handler, invite tracker, giveaways,
		memes, quotes, nsfw and much more!! If we miss anything, we add it to the bot."
					image_src="assets/DiscordBot.png"
					link="https://discord.com/api/oauth2/authorize?client_id=809639183374614558&permissions=20835783&scope=bot"
					link_text="Try the bot out yourself!"
				/>
				<this.Project
					title="Advent Calendar"
					description="
					Every year on december adventofcode releases a problem every month. I tasked myself to solve
					each of these problems. To track my progress and keep a record of my answers I created this
					project. Each of the answers are explained in their comments and code used are always simple
					but unique. This is a public repo meaning anyone, anytime can contribute to the repo and
					help increase it."
					image_src="assets/AdventOfCode.jpg"
					link="https://github.com/fschatbot/Advent-Calendar-Python"
					link_text="Check the Repo For yourself!"
				/>
			</div>
		);
	}

	DiscordBot() {
		return (
			<div className="Project">
				<LoadImage src="assets/DiscordBot.png" className="Avatar" />
				<div className="mx-10 my-auto">
					<h2 className="Title">All in one discord bot made with python</h2>
					<p className="Description">
						This bot is a all in one bot. It adds a lot of demanded commands to the server with much
						more information than any other bots. (The messages can be customized to show
						minimal/maximal information). It adds the ability to play music, cleanup messages, user
						info, image manipulation, server management, raid handler, invite tracker, giveaways,
						memes, quotes, nsfw and much more!! If we miss anything, we add it to the bot.
					</p>
					<a
						href="https://discord.com/api/oauth2/authorize?client_id=809639183374614558&permissions=20835783&scope=bot"
						target="_blank"
						rel="noreferrer">
						Try the bot out yourself!
					</a>
				</div>
			</div>
		);
	}

	AdventCalendar() {
		return (
			<div className="Project">
				<div className="mx-10 my-auto">
					<h2 className="Title">Advent Calendar</h2>
					<p className="Description">
						This is a calendar for the advent calendar. It shows the days of the advent calendar and
						the events that are happening on that day.
					</p>
					<a
						href="
						https://github.com/fschatbot/Advent-Calendar-Python"
						target="_blank"
						rel="noreferrer">
						Check the Repo For yourself
					</a>
				</div>
				<LoadImage src="assets/AdventOfCode.jpg" className="Avatar" />
			</div>
		);
	}

	Project({ title, description, image_src, link, link_text }) {
		return (
			<div className="Project">
				<LoadImage src={image_src} className="Avatar" />
				<div className="mx-10 my-auto">
					<h2 className="Title">{title}</h2>
					<p className="Description">{description}</p>
					<a href={link} target="_blank" rel="noreferrer">
						{link_text}
					</a>
				</div>
			</div>
		);
	}
}

export default Projects;
