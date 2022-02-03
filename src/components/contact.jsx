import { Component } from "react";
import "../styles/contact.css";
import { Link } from "../utils";

class Contact extends Component {
	state = {};
	render() {
		// https://www.javatpoint.com/calculate-age-using-javascript
		// The Date string format is MM/DD/YYYY
		let age = new Date(Date.now() - new Date("02/08/2007")).getUTCFullYear() - 1970;
		return (
			<div className="Contact">
				<h1 className="Title">Oh so you want to hire me???</h1>
				<h2 className="Subtitle">Looks like you might need few details, no worries I got you covered!</h2>
				<ul className="Information">
					<this.list_item title="Name" content="Himanshu Sultania" />
					<this.list_item title="Email" content={<Link href="mailto:himanshu.minecraft@gmail.com">himanshu.minecraft@gmail.com</Link>} />
					<this.list_item title="Age" content={age + " years (8th of Feb 2007)"} />
					<this.list_item title="Github Username" content={<Link href="https://github.com/fschatbot">fschatbot</Link>} />
					<this.list_item title="Languages I know" content={<this.render_languages />} />
					<this.list_item title="Location" content="India, Asia Work" />
					<this.list_item title="Work Preference" content="I like to work remotely and full time! I am a Full Stack Programmer" />
					<this.list_item title="Programmer Type" content="I have been working as a software developer for 2 years" />
				</ul>
			</div>
		);
	}

	list_item({ title, content }) {
		return (
			<li>
				<span className="Contact-Title">{title}: </span>
				<span className="Contact-Content">{content}</span>
			</li>
		);
	}

	render_languages() {
		let languages = {
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
		};
		return Object.keys(languages).map((language) => (
			<img
				src={`https://img.shields.io/badge/${language}-${languages[language]}?style=flat-square&logo=${language.toLocaleLowerCase()}&logoColor=white`}
				className="inline-block mr-1"
				alt={language}
			/>
		));
	}
}

export default Contact;
