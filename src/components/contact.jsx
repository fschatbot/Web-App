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
		<>
			<KnownLanguagesScroll />
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
		</>
	);
}

function KnownLanguagesScroll() {
	/*
	const languageMap = {
		HTML5: "E34F26",
		CSS3: "1572B6",
		JavaScript: "F7DF1E",
		JQuery: "0769AD",
		TailwindCSS: "06B6D4",
		React: "09D3AC",
		Python: "3776AB",
		"Node.js": "339933",
		Git: "F05032",
		Numpy: "0393c6",
		JSON: "e2e8f0",
		"Windows Terminal": "e2e8f0",
		"GNU Bash": "4EAA25",
		Google: "4285F4",
	};
	*/

	// Default color: #e2e8f0
	const languageMap = {
		languages: {
			HTML5: "E34F26",
			CSS3: "1572B6",
			JavaScript: "F7DF1E",
			Python: "3776AB",
			"Node.js": "339933",
			JSON: "e2e8f0",
		},
		frameworks: {
			React: "09D3AC",
			TailwindCSS: "06B6D4",
			JQuery: "0769AD",
			Numpy: "0393c6",
			Flask: "e2e8f0",
		},
		tools: {
			Git: "F05032",
			"Windows Terminal": "e2e8f0",
			"GNU Bash": "4EAA25",
			Google: "4285F4",
		},
		// design: {
		// 	Figma: "F24E1E",
		// },
	};

	const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
		return (
			<div
				className="loop-slider"
				style={{
					"--duration": `${duration}ms`,
					"--direction": reverse ? "reverse" : "normal",
				}}>
				<div className="inner">
					{children}
					{children}
					{children}
					{children}
				</div>
			</div>
		);
	};

	const Tag = ({ language }) => (
		<div className="tag" style={{ "--color": `#${languageMap[language]}` }}>
			<img height="32" width="32" src={`https://cdn.simpleicons.org/${language.replace(" ", "").replace(".", "dot")}/${languageMap[language]}`} alt={language} />
			{language}
		</div>
	);

	const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

	return (
		<>
			<h1 className="Title text-center">Languages I know</h1>
			<div className="tag-list">
				{Object.entries(languageMap).map(([key, category], i) => {
					return (
						<InfiniteLoopSlider duration={15000 + random(-5000, 5000)} reverse={i % 2} key={key}>
							{Object.keys(category).map((language) => (
								<Tag language={language} key={language} />
							))}
						</InfiniteLoopSlider>
					);
				})}
				<div className="fade" />
			</div>
		</>
	);
}

export default Contact;
