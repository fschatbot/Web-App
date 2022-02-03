import { Component } from "react";
import "../styles/contact.css";

class Contact extends Component {
	state = {};
	render() {
		// https://www.javatpoint.com/calculate-age-using-javascript
		// The Date string format is MM/DD/YYYY
		let age = new Date(Date.now() - new Date("02/08/2007")).getUTCFullYear() - 1970;
		return (
			<div className="Contact">
				<h1>Few Details that you might need</h1>
				<ul>
					<this.list_item title="Name" content="Himanshu Sultania" />
					<this.list_item title="Email" content="himanshu.minecraft@gmail.com" />
					<this.list_item title="Age" content={age + " years (8th of Feb 2007)"} />
					<this.list_item title="Github Username" content="FSChatBot" />
					<this.list_item title="Languages I know" content="HTML, CSS, JavaScript, JQuery, TailwindCSS, React, Python, Node.js, Git, CMD, Numpy, JSON, YAML" />
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
}

export default Contact;
