import { Component } from "react";
import { LoadImage } from "./utils";

class App extends Component {
	state = {
		projects: [
			{
				name: "Chatty",
				description: "This is a Simple Chat Bot made for my school for easy navigation.",
				thumbnail: "https://wallpapercave.com/wp/wp6977255.jpg",
			},
			{
				name: "Math Practice",
				description:
					"This is a simple multiplication pratice game that asks questions which you fail at!",
				thumbnail: "https://wallpapercave.com/wp/ngtLe8S.jpg",
			},
			{
				name: "Reddit Clone",
				description: "This is a clone of reddit which was made to test my skills with tailwindcss.",
				thumbnail: "https://wallpapercave.com/wp/vUCPBtY.jpg",
			},
			{
				name: "Apple Util Menu",
				description: "This is a simple interactive apple menu!",
				thumbnail: "https://wallpapercave.com/dwp1x/wp1887983.jpg",
			},
			{
				name: "Miragin War",
				description: "This is a small wiki for the SWF game Miragin War.",
			},
			{
				name: "Anime List",
				description:
					"This is a list website which helps you keep track of the anime you are watching.",
			},
		],
	};
	render() {
		return (
			<div className="projects">
				{this.state.projects.map((project, index) => (
					<this.Project key={index} {...project} odd={index % 2 === 1} />
				))}
			</div>
		);
	}
	Project = ({ name, description, thumbnail, redirect = "" }) => {
		return (
			<div className="project">
				<LoadImage src={thumbnail} alt={name} className="project-Thumbnail" />
				<div>
					<h1 className="project-title">
						<a href={redirect}>{name}</a>
					</h1>
					<p className="project-description">{description}</p>
				</div>
			</div>
		);
	};
}

export default App;
