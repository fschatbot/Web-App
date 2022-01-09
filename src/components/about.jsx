import { Component, memo, useState, useEffect } from "react";
import "../styles/about.css";
import { LoadImage } from "../utils";

class About extends Component {
	state = {};
	render() {
		return (
			<div className="AboutMe">
				<LoadImage src="Profile_Picture.jpg" alt="me" className="ProfilePicture" delay={1000} />
				<div>
					<h1 className="Name">
						I am <span className="CallingName">Himanshu Sultania</span>
					</h1>
					<h2 className="NickName">My nickname is Alpha Wolf</h2>
					<h3>
						I'm a software engineer. I enjoy coding, playing games and reading. Dreaming of the sky
						and a prosperous India. Below are few project that were made by me
					</h3>
					<br />
					<RandomQuotes interval={10000} />
				</div>
			</div>
		);
	}

	componentDidMount() {
		setInterval(() => {
			this.forceUpdate();
		}, 5000);
	}
}

function randomQuote() {
	let quotes = [
		`"It's harder to read code than to write it." - Joel Spolsky`,
		`“Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.” - Muhammad Waseem`,
		`“No matter which field of work you want to go in, it is of great importance to learn at least one programming language.” - Ram Ray`,
		`“I can see into your heart. You have good intentions. You can’t go wrong when you start with good intentions.” - Linda Armstrong`,
		`“This shows that the ordinary person is wanting more for their lives. They want to be of help, they want to make things better.” - Linda Armstrong`,
		`“When I can’t find something, I try to remember what I put on top of it. Whatever I was looking for is usually under something else that came next.” - Linda Armstrong`,
		`“Good software, like wine, takes time.” - Joel Spolsky`,
		`“Software is a great combination between artistry and engineering.” - Bill Gates`,
		`“This is a software-powered world.” - Satya Nadella`,
		`“Nothing works better than just improving your product.” - Joel Spolsky`,
		`“Writing code is not production, it’s not always craftsmanship though it can be, it’s design.” - Joel Spolsky`,
		`“Software is the magic thing whose importance only goes up over time.” - Bill Gates`,
	];
	return quotes[Math.floor(Math.random() * quotes.length)];
}

let RandomQuotes = memo(({ interval = 5000 }) => {
	let [quote, updateQuote] = useState(randomQuote());
	useEffect(() => {
		setInterval(() => {
			updateQuote(randomQuote());
		}, interval);
	}, []);
	return (
		<blockquote className="font-semibold text-sm md:text-base italic text-gray-700 dark:text-zinc-500">
			{quote}
		</blockquote>
	);
});
export default About;
