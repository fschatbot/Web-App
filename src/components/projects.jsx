import React, { useContext, useRef, useEffect } from "react";
import { LoadImage, Link, EasterEggContext } from "../utils";
import Blobs from "./blobs";
import "../styles/projects.css";
import { gsap } from "gsap";
import "animate.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
	let { SetEasterEggs } = useContext(EasterEggContext);
	return (
		<div className="Projects">
			<h1 className="Title">
				<span>Personal Projects</span>
			</h1>
			<Project
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
			<Project
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
			<Project
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
			{/* <Blobs SetEasterEggs={SetEasterEggs} /> */}
			<Project
				title="Chatty"
				description="
				This is a simple chat app that I made for my school in 6 months after I learnt HTML. This
				was my first ever project too! The goal of this program was to summarise all the events in
				the school in one place. (Not Maintained Anymore)"
				image_src="assets/Bot.jpg"
				link="https://fschatbot.github.io/Chatty/"
				link_text="Try the app out yourself!"
				programs={["html", "css", "js"]}
			/>
			<Project
				title="Math Practice"
				description="This is a simple multiplication pratice game that asks questions which you fail at!"
				image_src="https://i.pinimg.com/originals/cb/82/3f/cb823f8589d10deca92c6a45e934051e.jpg"
				link="https://fschatbot.github.io/Math_Practice/"
				link_text="Try the app out yourself!"
				programs={["html", "css", "js"]}
			/>
			{/* https://image.flaticon.com/icons/png/512/270/270815.png */}
			<Project
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
			<Project
				title="Rick- *Cough* *Cough* Rainbow text art"
				description={new Array(25).fill("OPEN THE LINK").join("! ")}
				link="https://codepen.io/Alpha_Gamez/full/MWEqrrg"
				image_src="assets/rickroll.png"
				link_text="Trust me you won't regret this!"
				programs={["html", "css"]}
				link_callback={() => SetEasterEggs("Never Gonna Give you Up")}
			/>
			<Project
				title="Apple Utility Menu"
				description="
				This is my take on recreating apple's utility menu that drops down on iPhone from above! I
				thought if they can do it then why can't I. So I went on a journey to make it a relaity!"
				link="https://github.com/fschatbot/Advent-Calendar-Python"
				image_src="assets/apple.jpeg"
				link_text="Check the Repo For yourself!"
				programs={["react", "twc"]}
			/>
			<Project
				title="JSFetch"
				description="
				At one point I thought to myself, what if I port the fetch API of JS to python. Javascript
				used to have a XHR library which worked similarily to pythons request library. However, I 
				like fetch library better so I made a simple wrapper for fetch API in python."
				link="https://pypi.org/project/JSFetch/"
				link_text="Checkout the PIP project!"
				programs={["py"]}
			/>
			<Project
				title="MLA7 Citation Generator"
				description="
				In examinations you don't get that much time. There is a lot of steps you need to go in a 
				normal MLA7 Citation Generator before you get your ciation. So to combact this problem I 
				made a simple website that takes in a url and instanly spits out the citation. Sometimes, 
				the teachers give their own citation format which is really annoying as online citation 
				machines don't support custom format. So I just added a simple configuration for that aswell
				. The site also supports changing and adding data to the citation string to their liking!"
				link="https://fschatbot.github.io/MLA7/"
				link_text="Checkout the application!"
				programs={["html", "css", "js"]}
			/>
			<Project
				title="Hangman Solver"
				description="
				This simple web application helps you win any game of hangman. This application has a word 
				list of over 670,000 unique words. The guesser also provides you with multiple statatics 
				and recommended guesses to help you get more closer to your word!"
				link="https://fschatbot.github.io/MLA7/"
				link_text="Checkout the application!"
				programs={["html", "css", "js", "py"]}
			/>
			<Project
				title="Color Share"
				description="
				Have you ever wanted to share a really nice color that you found. Well now you can! This application allows you to share colors over the internet and provides you with multiple data about it. "
				link="https://fschatbot.github.io/MLA7/"
				link_text="Checkout the application!"
				programs={["html", "css", "js"]}
			/>
		</div>
	);
};

const Project = ({ title, description, image_src, link, link_text, programs = [], link_callback = () => 0 }) => {
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
	const boxRef = useRef();
	useEffect(() => {
		let animated = false;
		document.addEventListener("scroll", (event) => {
			// If the box is in the center of the screen then add the class active to it
			let { top, bottom } = boxRef.current.getBoundingClientRect();
			if (animated && top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
				boxRef.current.classList.add("scale-105");
			} else if (animated) {
				boxRef.current.classList.remove("scale-105");
			}

			// If the box comes into view then add the class active to it
			if (top < window.innerHeight && !animated) {
				boxRef.current.classList.add("animate__backInLeft");
			}
		});

		boxRef.current.addEventListener("animationend", () => {
			boxRef.current.classList.remove("animate__backInLeft");
			animated = true;
		});
	}, []);

	return (
		<div className="Project animate__animated" ref={boxRef} style={{ "--sif-duration": "500ms" }}>
			<LoadImage src={image_src} className="Avatar" />
			<div className="mx-5 md:mx-10 my-auto">
				<h2 className="Title">{title}</h2>
				<p className="Description">{description.replaceAll("\n", "")}</p>
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
				<Link href={link} props={{ onClick: link_callback }}>
					{link_text}
				</Link>
			</div>
		</div>
	);
};

export default Projects;
