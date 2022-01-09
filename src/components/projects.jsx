import { Component } from "react";
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
				/>
				<Blobs />
				<this.Project
					title="Chatty"
					description="
					This is a simple chat app that I made for my school in 6 months after I learnt HTML. This
					was my first ever project too! The goal of this program was to summarise all the events in
					the school in one place. (Not Maintained Anymore)"
					image_src="assets/Chatty.png"
					link="https://fschatbot.github.io/Chatty/"
					link_text="Try the app out yourself!"
				/>
				<this.Project
					title="Math Practice"
					description="This is a simple multiplication pratice game that asks questions which you fail at!"
					image_src="assets/MathPractice.png"
					link="https://fschatbot.github.io/Math_Practice/"
					link_text="Try the app out yourself!"
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
				/>
				<this.Project
					title="Rick- *Cough* *Cough* Rainbow text art"
					description={new Array(25).fill("OPEN THE LINK").join("! ")}
					link="https://cdpn.io/Alpha_Gamez/debug/MWEqrrg/bZMQWKXpXwDA"
					link_text="Trust me you won't regret this!"
				/>
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
					<Link href={link}>{link_text}</Link>
				</div>
			</div>
		);
	}
}

export default Projects;
