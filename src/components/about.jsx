import { memo, useState, useEffect } from "react";
import "../styles/about.css";
import { LoadImage } from "../utils";
import Quotes from "./Quotes.json";
import Typewriter from "typewriter-effect";

function About() {
	return (
		<div className="AboutMe">
			<LoadImage src="https://github.com/fschatbot.png" alt="me" className="ProfilePicture" delay={1000} />
			<div>
				<h1 className="Name">
					I am <TypeName />
				</h1>
				<h3>I'm a software engineer. I enjoy coding, playing games and reading. Dreaming of the sky and a prosperous India. Below are few project that were made by me</h3>
				<RandomQuotes />
			</div>
		</div>
	);
}

function randomQuote() {
	// https://github.com/skolakoda/programming-quotes-api
	return Quotes[Math.floor(Math.random() * Quotes.length)];
}

let RandomQuotes = memo(({ interval = 10000 }) => {
	let [quote, updateQuote] = useState(randomQuote());
	// let [oldquote, updateOldQuote] = useState("");
	useEffect(() => {
		setInterval(() => {
			updateQuote(randomQuote());
		}, interval);
	}, [interval]);
	return (
		<blockquote key={quote.id} className="QuoteBlock">
			{quote.en} ― <span className="QuoteAuthor">{quote.author}</span>
		</blockquote>
	);
});

let TypeName = memo(() => {
	return (
		<Typewriter
			options={{
				strings: ["Himanshu Sultania", "Alpha Wolf", "FSChatBot"],
				pauseFor: 5000,
				autoStart: true,
				loop: true,
				wrapperClassName: "CallingName",
				cursorClassName: "CallingName",
			}}
		/>
	);
});

export default About;
