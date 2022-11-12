import React, { useEffect, useRef, useState, useContext } from "react";
import { LoadImage, EasterEggContext } from "../utils";
import "../styles/amoungus.css";

const generate_random_pos = (elem) => {
	// Calculate the next position
	const randX = Math.floor(Math.random() * elem.parentElement.clientWidth);
	const randY = Math.floor(Math.random() * elem.parentElement.clientHeight);

	const new_x = randX - elem.clientWidth < 0 ? 0 : randX - elem.clientWidth;
	const new_y = randY - elem.clientHeight < 0 ? 0 : randY - elem.clientHeight;

	// Calculate the time it should take to reach its new position
	const prevX = elem.style.getPropertyValue("--x");
	const prevY = elem.style.getPropertyValue("--y");
	const dis = Math.sqrt((new_x - prevX) ** 2 + (new_y - prevY) ** 2);
	// It will travel 100px per second
	const time = dis / 100;

	// Return the calculated vartiables
	return { x: new_x, y: new_y, time };
};

function AmongUs() {
	const { SetEasterEggs, GetEasterEggs } = useContext(EasterEggContext);
	// Code for playing music
	const [isMusicPlaying, setMusicState] = useState(false);
	let AudioRef = useRef(new Audio("assets/amoung-us-drip.mp3"));
	// A 10% chance of the amoung us being an imposter, it cannot be an imposter if the "sussy boi" achivement is not unlocked
	const [isImposter, setImposter] = useState(false);
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
	const toggleMusic = () => setMusicState(!isMusicPlaying);

	// Making the container itself
	const container = (
		<div id="player" className="amongusPlayer group" onClick={toggleMusic} role="button" aria-hidden>
			<LoadImage src={isImposter ? "assets/amoung-us-imposter.png" : "assets/amoung-us.png"} delay={0} className="playerImage" />
			<span className="SussyBoi">SUS!</span>
		</div>
	);

	// Code the movement of the container
	const moveContainer = () => {
		const elem = document.getElementById("player");
		const { x, y, time } = generate_random_pos(elem);
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
}

export default AmongUs;
