import { Component, memo, useState, useEffect } from "react";
import "../styles/about.css";
import { LoadImage } from "../utils";
import Quotes from "./Quotes.json";

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
					{/* <br /> */}
					<RandomQuotes />
				</div>
			</div>
		);
	}
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
export default About;
