import React, { Component } from "react";
import { LoadImage, Link } from "../utils";
import Blobs from "./blobs";
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
					description="
					This bot is a all in one bot. It adds a lot of demanded commands to the server with much
					more information than any other bots. (The messages can be customized to show
					minimal/maximal information). It adds the ability to play music, cleanup messages, user
					info, image manipulation, server management, raid handler, invite tracker, giveaways, memes,
					quotes, nsfw and much more!! If we miss anything, we add it to the bot."
					image_src="assets/DiscordBot.png"
					link="https://discord.com/api/oauth2/authorize?client_id=809639183374614558&permissions=20835783&scope=bot"
					link_text="Try the bot out yourself!"
					programs={["py", { title: "Discord.py", hover: "Discord.py" }]}
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
					programs={["py"]}
				/>
				<this.Project
					title="Anime List tracker using Tailwindcss"
					description="
					Everytime people learn a new language that has to do something with websites, the first
					thing they make is a shopping cart list. However I wanted to go an extra mile. With this app
					you can add/edit/delete with notifications. Doesn't sound that intresting but hey atleast it
					doesn't remove you data when you refresh. I kept it open sourced in case anyone wants to
					have a peek!"
					image_src="assets/AnimeList.png"
					link="https://github.com/fschatbot/anime_list"
					link_text="Source Code"
					programs={["html", "css", "js", "twc", "react"]}
				/>
				<Blobs SetEasterEggs={this.props.SetEasterEggs} />
				<this.Project
					title="Chatty"
					description="
					This is a simple chat app that I made for my school in 6 months after I learnt HTML. This
					was my first ever project too! The goal of this program was to summarise all the events in
					the school in one place. (Not Maintained Anymore)"
					image_src="assets/Chatty.png"
					link="https://fschatbot.github.io/Chatty/"
					link_text="Try the app out yourself!"
					programs={["html", "css", "js"]}
				/>
				<this.Project
					title="Math Practice"
					description="This is a simple multiplication pratice game that asks questions which you fail at!"
					image_src="assets/MathPractice.png"
					link="https://fschatbot.github.io/Math_Practice/"
					link_text="Try the app out yourself!"
					programs={["html", "css", "js"]}
				/>
				{/* https://image.flaticon.com/icons/png/512/270/270815.png */}
				<this.Project
					title="Reddit Clone"
					description="
					This a simple clone of reddit. It is a single page application that allows you to browse
					reddit posts as if you were in the reddit. This site was made as an experiment to the limits
					of Tailwindcss."
					image_src="assets/Reddit.png"
					link="https://fschatbot.github.io/reddit/"
					link_text="Have a look yourself!"
					programs={["html", "css", "js", "twc"]}
				/>
				<this.Project
					title="Rick- *Cough* *Cough* Rainbow text art"
					description={new Array(25).fill("OPEN THE LINK").join("! ")}
					link="https://cdpn.io/Alpha_Gamez/debug/MWEqrrg/bZMQWKXpXwDA"
					link_text="Trust me you won't regret this!"
					programs={["html", "css"]}
				/>
				<this.Project
					title="Apple Utility Menu"
					description="
					This is my take on recreating apple's utility menu that drops down on iPhone from above! I
					thought if they can do it then why can't I. So I went on a journey to make it a relaity!"
					link="https://github.com/fschatbot/Advent-Calendar-Python"
					image_src="assets/apple.jpeg"
					link_text="Check the Repo For yourself!"
					programs={["react", "twc"]}
				/>
			</div>
		);
	}

	Project({ title, description, image_src, link, link_text, programs = [] }) {
		let hashmap = {
			html: {
				title: "HTML",
				color: "#e34f26",
				hover: "Hypertext Markup Language",
			},
			css: {
				title: "CSS",
				color: "#2980b9",
				hover: "Cascading Style Sheet",
			},
			js: {
				title: "JavaScript",
				color: "#f1e05a",
				hover: "JavaScript",
			},
			py: {
				title: "Python",
				color: "#3572A5",
				hover: "Python",
			},
			twc: {
				title: "TailwindCSS",
				color: "#2d3436",
				hover: "TailwindCSS",
			},
			react: {
				title: "React",
				color: "#61dafb",
				hover: "React",
			},
		};
		return (
			<div className="Project">
				<LoadImage src={image_src} className="Avatar" />
				<div className="mx-5 md:mx-10 my-auto">
					<h2 className="Title">{title}</h2>
					<p className="Description">{description}</p>
					<ul className="Programs">
						<li>Made With:</li>
						{programs.map((program) => {
							let { title, color } = program in hashmap ? hashmap[program] : program;
							return (
								<li className="program" style={color ? { "--color": color } : {}} key={title}>
									{title}
								</li>
							);
						})}
					</ul>
					<Link href={link}>{link_text}</Link>
				</div>
			</div>
		);
	}
}

export default Projects;
