import React, { useEffect, useState } from "react";
import { LoadImage } from "../utils";
import "../styles/amoungus.css";

const generate_random_pos = (elem) => {
	// Calculate the next position
	let randX = Math.floor(Math.random() * elem.parentElement.clientWidth);
	let randY = Math.floor(Math.random() * elem.parentElement.clientHeight);

	let x = randX - elem.clientWidth < 0 ? 0 : randX - elem.clientWidth;
	let y = randY - elem.clientHeight < 0 ? 0 : randY - elem.clientHeight;

	// Calculate the time it should take to reach its new position
	let prevX = elem.style.getPropertyValue("--x");
	let prevY = elem.style.getPropertyValue("--y");
	let dis = Math.sqrt((x - prevX) ** 2 + (y - prevY) ** 2);
	// It will travel 100px per second
	const time = Math.floor(dis / 100);

	// Return the calculated vartiables
	return { x, y, time };
};

const AmongUs = ({ SetEasterEggs }) => {
	// Code for playing music
	let [isMusicPlaying, setMusicState] = useState(false);
	let AudioControl = new Audio("assets/amoung-us-drip.mp3");
	// Giving advancement once the music ends
	AudioControl.addEventListener("ended", () => {
		toggleMusic(!isMusicPlaying);
		SetEasterEggs("Sussy Boi");
	});
	// The Line of code which toggles the music
	useEffect(() => AudioControl[isMusicPlaying ? "play" : "pause"](), [isMusicPlaying]);
	let toggleMusic = () => setMusicState(!isMusicPlaying);

	// Making the container itself
	let container = (
		<div id="player" className="amongusPlayer group" onClick={toggleMusic}>
			<LoadImage src="assets/amoung-us.png" delay={0} className="playerImage" />
			<span className="SussyBoi">SUS!</span>
		</div>
	);

	// Code the movement of the container
	let moveContainer = () => {
		let elem = document.getElementById("player");
		let { x, y, time } = generate_random_pos(elem);
		elem.style.setProperty("--x", `${x}px`);
		elem.style.setProperty("--y", `${y}px`);
		elem.style["transition-duration"] = `${time}s`;
	};
	// Add the event listener and start the movement

	useEffect(() => {
		moveContainer();
		document.getElementById("player").addEventListener("transitionend", moveContainer);
	}, []);

	return container;
};

export default AmongUs;
