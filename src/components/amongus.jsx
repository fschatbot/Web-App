import React, { useEffect, useRef, useState, useContext } from "react";
import { LoadImage, EasterEggContext } from "../utils";
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
	const time = dis / 100;

	// Return the calculated vartiables
	return { x, y, time };
};

const AmongUs = () => {
	let { SetEasterEggs, GetEasterEggs } = useContext(EasterEggContext);
	// Code for playing music
	let [isMusicPlaying, setMusicState] = useState(false);
	let AudioRef = useRef(new Audio("assets/amoung-us-drip.mp3"));
	// A 10% chance of the amoung us being an imposter, it cannot be an imposter if the "sussy boi" achivement is not unlocked
	let [isImposter, setImposter] = useState(false);
	// Giving advancement once the music ends
	AudioRef.current.addEventListener("ended", () => {
		setMusicState(false);
		SetEasterEggs("Sussy Boi");
		if (isImposter) SetEasterEggs("The Imposter Game");
	});

	useEffect(() => {
		setImposter(GetEasterEggs()["Sussy Boi"] ? Math.random() < 0.1 : false);
	}, [GetEasterEggs]);
	// The Line of code which toggles the music
	useEffect(() => {
		isMusicPlaying ? AudioRef.current.play() : AudioRef.current.pause();
	}, [isMusicPlaying, AudioRef]);
	let toggleMusic = () => setMusicState(!isMusicPlaying);

	// Making the container itself
	let container = (
		<div id="player" className="amongusPlayer group" onClick={toggleMusic} role="button" aria-hidden>
			<LoadImage src={isImposter ? "assets/amoung-us-imposter.png" : "assets/amoung-us.png"} delay={0} className="playerImage" />
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
