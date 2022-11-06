import React, { useContext, useRef, useEffect } from "react";
import { LoadImage, Link, EasterEggContext } from "../utils";
import Blobs from "./blobs";
import "../styles/projects.css";

const Projects = () => {
	let { SetEasterEggs } = useContext(EasterEggContext);
	let [projectCount, setProjectCount] = React.useState(5);
	const projects = [
		{
			title: "All in one discord bot made with python",
			description: `This bot is a all in one bot. It adds a lot of demanded commands to the server with much
			more information than any other bots. (The messages can be customized to show
			minimal/maximal information). It adds the ability to play music, cleanup messages, user
			info, image manipulation, server management, raid handler, invite tracker, giveaways, memes,
			quotes, nsfw and much more!! If we miss anything, we add it to the bot.`,
			image_src: "assets/DiscordBot.png",
			link: "https://discord.com/api/oauth2/authorize?client_id=809639183374614558&permissions=20835783&scope=bot",
			link_text: "Try the bot out yourself!",
			programs: ["py", { title: "Discord.py", hover: "Discord.py" }],
		},
		{
			title: "Advent Calendar",
			description: `Every year on december adventofcode releases a problem every month. I tasked myself to solve
			each of these problems. To track my progress and keep a record of my answers I created this
			project. Each of the answers are explained in their comments and code used are always simple
			but unique. This is a public repo meaning anyone, anytime can contribute to the repo and
			help increase it.`,
			image_src: "assets/AdventOfCode.jpg",
			link: "https://github.com/fschatbot/Advent-Calendar-Python",
			link_text: "Check the Repo For yourself!",
			programs: ["py"],
		},
		{
			title: "Anime List tracker using Tailwindcss",
			description: `Everytime people learn a new language that has to do something with websites, the first
			thing they make is a shopping cart list. However I wanted to go an extra mile. With this app
			you can add/edit/delete with notifications. Doesn't sound that intresting but hey atleast it
			doesn't remove you data when you refresh. I kept it open sourced in case anyone wants to
			have a peek!`,
			image_src: "assets/AnimeList.png",
			link: "https://github.com/fschatbot/anime_list",
			link_text: "Source Code",
			programs: ["html", "css", "js", "twc", "react"],
		},
		{
			title: "Chatty",
			description: `This is a simple chat app that I made for my school in 6 months after I learnt HTML. This
			was my first ever project too! The goal of this program was to summarise all the events in
			the school in one place. (Not Maintained Anymore)`,
			image_src: "assets/Bot.jpg",
			link: "https://fschatbot.github.io/Chatty/",
			link_text: "Try the app out yourself!",
			programs: ["html", "css", "js"],
		},
		{
			title: "Math Practice",
			description: `This is a simple multiplication pratice game that asks questions which you fail at!`,
			image_src: "https://i.pinimg.com/originals/cb/82/3f/cb823f8589d10deca92c6a45e934051e.jpg",
			link: "https://fschatbot.github.io/Math_Practice/",
			link_text: "Try the app out yourself!",
			programs: ["html", "css", "js"],
		},
		{
			title: "Reddit Clone",
			description: `This a simple clone of reddit. It is a single page application that allows you to browse
			reddit posts as if you were in the reddit. This site was made as an experiment to the limits
			of Tailwindcss.`,
			image_src: "assets/Reddit.png", // https://image.flaticon.com/icons/png/512/270/270815.png
			link: "https://fschatbot.github.io/reddit/",
			link_text: "Have a look yourself!",
			programs: ["html", "css", "js", "twc"],
		},
		{
			title: "Rick- *Cough* *Cough* Rainbow text art",
			description: new Array(25).fill("OPEN THE LINK").join("! "),
			image_src: "assets/rickroll.png",
			link: "https://codepen.io/Alpha_Gamez/full/MWEqrrg",
			link_text: "Trust me you won't regret this!",
			programs: ["html", "css"],
			link_callback: () => SetEasterEggs("Never Gonna Give you Up"),
		},
		{
			title: "Apple Utility Menu",
			description: `This is my take on recreating apple's utility menu that drops down on iPhone from above! I
			thought if they can do it then why can't I. So I went on a journey to make it a relaity!`,
			image_src: "assets/apple.jpeg",
			link: "https://github.com/fschatbot/Apple-Utils-Demo",
			link_text: "Check the Repo For yourself!",
			programs: ["react", "twc"],
		},
		{}, // This is empty for the <blobs /> component
		{
			title: "JSFetch",
			description: `At one point I thought to myself, what if I port the fetch API of JS to python. Javascript
			used to have a XHR library which worked similarily to pythons request library. However, I 
			like fetch library better so I made a simple wrapper for fetch API in python.`,
			image_src: "assets/JSFetch.png",
			link: "https://pypi.org/project/JSFetch/",
			link_text: "Checkout the PIP project!",
			programs: ["py"],
		},
		{
			title: "MLA7 Citation Generator",
			description: `In examinations you don't get that much time. There is a lot of steps you need to go in a 
			normal MLA7 Citation Generator before you get your ciation. So to combact this problem I 
			made a simple website that takes in a url and instanly spits out the citation. Sometimes, 
			the teachers give their own citation format which is really annoying as online citation 
			machines don't support custom format. So I just added a simple configuration for that aswell
			. The site also supports changing and adding data to the citation string to their liking!`,
			image_src: "https://fschatbot.github.io/MLA7/assets/favicon2.png",
			link: "https://fschatbot.github.io/MLA7/",
			link_text: "Checkout the application!",
			programs: ["html", "css", "js"],
		},
		{
			title: "Hangman Solver",
			description: `This simple web application helps you win any game of hangman. This application has a word 
			list of over 670,000 unique words. The guesser also provides you with multiple statatics 
			and recommended guesses to help you get more closer to your word!`,
			image_src: "https://fschatbot.github.io/Hangman-Helper/hangman.png",
			link: "https://fschatbot.github.io/Hangman-Helper/",
			link_text: "Checkout the application!",
			programs: ["html", "css", "js", "py"],
		},
		{
			title: "Color Share",
			description: `Have you ever wanted to share a really nice color that you found. Well now you can! This application
			allows you to share colors over the internet and provides you with multiple data about it. `,
			image_src: "assets/Color_Share.png",
			link: "https://fschatbot.github.io/Color-Share/",
			link_text: "Checkout the application!",
			programs: ["html", "css", "js"],
		},
		{
			title: "Auto YouTube",
			description: `Have you ever wondered what it would be like if a bot ran a successfull channel? Well look no
			further cause I created a bot that automatically uploads high-quality videos on the channel. The type of
			videos uploaded in question lyrical videos with music in background. It may look simple but making a bot
			that can accurately hear and understand the lyrics of the song down to timing as to when it was played is
			no easy feat. This project took around a month to complete and still time to time I like to make some adjustments`,
			image_src: "https://cdn-icons-png.flaticon.com/512/2504/2504965.png", // Channel Icon
			link: "https://www.youtube.com/@CookiesWithSongs?sub_confirmation=1",
			link_text: "View The Channel...",
			programs: ["py", { title: "Moviepy" }],
		},
		{
			title: "Burner Profile Generator",
			description: `Sometimes I go on websites and they ask for my mail id, name and what not. This is extremely
			annoying when I don't want to give my gamil ID to a another website. So I created a website that generates
			a fake Name, Number, Gmail and etc with a simple click of a button.`,
			image_src: "https://fschatbot.github.io/Burner-Account/LogoMaxRes.png",
			link: "https://fschatbot.github.io/Burner-Account/",
			link_text: "Generate one now!!",
			programs: ["react", "twc", "js"],
		},
		{
			title: "Git Graph",
			description: `Github provides statical information about each repository in its analytical tab but wouldn't
			it be nice if this information were present as beautiful and easy to understand charts in one simple page. A
			page that told you everything about the project from start to finish. Well this It was a like a dashboard, the beyond
			insane one.`,
			// image_src: "",
			// link: "https://fschatbot.github.io/Tic-Tac-Toe/",
			link_text: "Sadly this project is currently private :(",
			programs: ["react", "twc", "js", "node"],
		},
	];
	return (
		<div className="Projects" id="Projects">
			<h1 className="Title">
				<span>Projects</span>
			</h1>
			{projects.map((project, index) => {
				if (JSON.stringify(project) === JSON.stringify({}) && index < projectCount) return <Blobs />;
				else if (index < projectCount) return <Project key={index} {...project} />;
				return <></>;
			})}

			<button className={"showMore" + (projects.length <= projectCount ? " hidden" : "")} onClick={() => setProjectCount(projectCount + 5)}>
				Show More
			</button>
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
		node: {
			title: "NodeJS",
			color: "#68A063",
			hover: "Node JS",
		},
	};

	const boxRef = useRef();

	useEffect(() => {
		const box = boxRef.current;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						box.classList.add("animate");
					}
				});
			},
			{ threshold: 0 }
		);
		observer.observe(box);
		return () => observer.unobserve(box);
	}, [boxRef]);

	function hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` : "0 0 0";
	}

	return (
		<div className="Project" ref={boxRef}>
			<LoadImage src={image_src} className="Avatar" defaultUrl="https://cdn.dribbble.com/users/2256359/screenshots/15433092/media/311b79dd55ecde91f8096d9e49dc2577.jpg" />
			<div className="mx-5 md:mx-10 my-auto">
				<h2 className="Title">{title}</h2>
				<p className="Description">{description.replaceAll("\n", "")}</p>
				<ul className="Programs">
					<li>Made With:</li>
					{programs.map((program) => {
						let { title, color } = program in hashmap ? hashmap[program] : program;
						return (
							<li className="program" style={color ? { "--color": hexToRgb(color) } : {}} key={title}>
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
