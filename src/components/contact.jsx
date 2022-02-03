import { Component } from "react";
import "../styles/contact.css";

class Contact extends Component {
	state = {};
	render() {
		return (
			<div className="Contact">
				<h1>Few Details that you might need</h1>
				<p>
					Mail: himanshu.minecraft@gmail.com
					<br />
					Location: India, Asia Work
					<br />
					Prefference: Remote, Full Time
					<br />
					Programmer Type: Full Stack Programmer
					<br />
					Languages Known: HTML, CSS, JavaScript, JQuery, TailwindCSS, React, Python, Node.js, Git, CMD, Numpy, JSON, YAML
					<br />
					Github Username: Fschatbot
					<br />
					Name: Himanshu Sultania
					<br />
					{/* https://www.javatpoint.com/calculate-age-using-javascript */}
					{/* The Date string format is MM/DD/YYYY */}
					Age: {new Date(Date.now() - new Date("02/08/2007")).getUTCFullYear() - 1970} years (8th of Feb 2007)
				</p>
			</div>
		);
	}
}

export default Contact;
