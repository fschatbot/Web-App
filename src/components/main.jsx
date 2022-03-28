import React, { useRef, useEffect, useState } from "react";

import About from "./about";
import Tips from "./Tips";
import Projects from "./projects";
import AmongUs from "./amongus";
import EasterUI from "./easter";
import Discord from "./discord";
import Contact from "./contact";

import { EasterEggContext } from "../utils";

export default function Main() {
	// This function was rewritten thanks to https://gabriellazcano.com/blog/react-hooks-give-you-superpowers/
	// This guy posted about extactly the same problem I was facing

	// Retriving the previous easter egg data and storing a default value if not present
	let EasterEggsJSON = localStorage.getItem("EasterEggs");
	if (EasterEggsJSON) {
		EasterEggsJSON = JSON.parse(EasterEggsJSON);
	} else {
		EasterEggsJSON = {
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
		localStorage.setItem("EasterEggs", JSON.stringify(EasterEggsJSON));
	}

	const [easterEgg, ChangeEasterEgg] = useState(EasterEggsJSON);
	const SetEasterEggs = (title) => (easterEgg[title] === false ? ChangeEasterEgg({ ...easterEgg, [title]: true }) : 0);

	// Code for checking wheter it has been a day from the first time the user opened the page
	if (!localStorage.getItem("FirstVisit")) {
		localStorage.setItem("FirstVisit", Date.now());
	} else {
		let FirstVisit = localStorage.getItem("FirstVisit");
		if (Date.now() - new Date(Number(FirstVisit)) > 24 * 60 * 60 * 1000) SetEasterEggs("Ah, back for more?");
	}
	// Code for checking if the user is using a mobile device using CSS
	window.matchMedia("(min-width: 768px)").onchange = () => SetEasterEggs("The Makeshift Phone");

	// Run when the easter egg is found
	let setRef = useRef(SetEasterEggs); // This is used to prevent warnings
	useEffect(() => {
		// Storing the data
		localStorage.setItem("EasterEggs", JSON.stringify(easterEgg));
		// Checking if all easter eggs have been found
		if (Object.values(easterEgg).filter((x) => x).length === Object.values(easterEgg).length - 1) {
			setRef.current("Easter Bunny");
		}
	}, [easterEgg, setRef]);

	return (
		<EasterEggContext.Provider value={{ GetEasterEggs: () => easterEgg, SetEasterEggs }}>
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
				<AmongUs />
				<Projects />
				<EasterUI />
				<Contact />
				<Discord />
			</main>
		</EasterEggContext.Provider>
	);
}
