import React from "react";
import "../styles/contact.css";
import { Link } from "../utils";

function Contact() {
	function ListItems({ title, content }) {
		return (
			<li>
				<span className="Contact-Title">{title}: </span>
				<span className="Contact-Content">{content}</span>
			</li>
		);
	}

	function KnownLanguages() {
		const languages = {
			HTML5: "E34F26",
			CSS3: "1572B6",
			JavaScript: "F7DF1E",
			JQuery: "0769AD",
			TailwindCSS: "06B6D4",
			React: "09D3AC",
			Python: "3776AB",
			"Node.js": "339933",
			Git: "F05032",
			Numpy: "013243",
			JSON: "black",
			YAML: "black",
			"Windows Terminal": "4D4D4D",
			"GNU Bash": "4EAA25",
			Googling: "4285F4",
		};
		return Object.keys(languages).map((language) => (
			<img
				src={`https://img.shields.io/badge/${language}-${languages[language]}?style=flat-square&logo=${language.toLocaleLowerCase()}&logoColor=white`}
				className="inline-block mr-1"
				alt={language}
				key={language}
			/>
		));
	}
	// https://www.javatpoint.com/calculate-age-using-javascript
	// The Date string format is MM/DD/YYYY
	const age = new Date(Date.now() - new Date("02/08/2007")).getUTCFullYear() - 1970;
	const workingTime = new Date(Date.now() - new Date("02/08/2019")).getUTCFullYear() - 1970;
	return (
		<div className="Contact" id="Contact">
			<h1 className="Title">Oh so you want to hire me???</h1>
			<h2 className="Subtitle">Looks like you might need few details, no worries I got you covered!</h2>
			<ul className="Information">
				<ListItems title="Name" content="Himanshu Sultania" />
				<ListItems title="Email" content={<Link href="mailto:himanshu.minecraft@gmail.com">himanshu.minecraft@gmail.com</Link>} />
				<ListItems title="Age" content={`${age} years`} />
				<ListItems title="Github Username" content={<Link href="https://github.com/fschatbot">fschatbot</Link>} />
				<ListItems title="Languages I know" content={<KnownLanguages />} />
				<ListItems title="Location" content="India, Asia Work" />
				<ListItems title="Work Preference" content="I like to work remotely and full time! I am a Full Stack Programmer" />
				<ListItems title="Programmer Type" content={`I have been working as a software developer for ${workingTime} years`} />
			</ul>
		</div>
	);
}

export default Contact;
