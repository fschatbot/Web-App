import React, { Component } from "react";

import About from "./about";
import Tips from "./Tips";
import Projects from "./projects";
import AmongUs from "./amongus";
import EasterUI from "./easter";
import Discord from "./discord";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"Sussy Boi": false,
			"The Imposter Game": false,
			"Not So Sneaky Easter Egg": false,
			"Ah yes, the negotiator": false,
			"Ah, back for more?": false,
			"Never Gonna Give you Up": false,
			"The Makeshift Phone": false,
			"Slimy Friend": false,
			"Easter Bunny": false,
		};

		// Bind the functions to this class
		this.GetEasterEggs = this.GetEasterEggs.bind(this);
		this.SetEasterEggs = this.SetEasterEggs.bind(this);
	}

	GetEasterEggs = () => {
		return this.state;
	};

	SetEasterEggs = (title) => {
		this.setState({ [title]: true }, () => localStorage.setItem("EasterEggs", JSON.stringify(this.state)));
	};

	componentDidMount() {
		let EasterEggsJSON = localStorage.getItem("EasterEggs");
		if (EasterEggsJSON) {
			this.setState(JSON.parse(EasterEggsJSON));
		} else {
			localStorage.setItem("EasterEggs", JSON.stringify(this.state));
		}
	}

	render() {
		return (
			<main>
				<div className="WaveDivider">
					<About />
					<Tips />
					<div className="custom-shape-divider-bottom-1641994563">
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path
								d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
								className="shape-fill"></path>
						</svg>
					</div>
				</div>
				<AmongUs SetEasterEggs={this.SetEasterEggs} />
				<Projects SetEasterEggs={this.SetEasterEggs} />
				<EasterUI GetEasterEggs={this.GetEasterEggs} SetEasterEggs={this.SetEasterEggs} />
				<Discord />
			</main>
		);
	}
}

export default Main;
