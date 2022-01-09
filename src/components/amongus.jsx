import React, { Component } from "react";
import { LoadImage } from "../utils";

class AmongUs extends Component {
	state = {};

	render() {
		return (
			<div
				id="player"
				className="hidden md:block cursor-pointer absolute group"
				onClick={this.toggleMusic}>
				<LoadImage src="assets/amoung-us.png" delay={0} className="w-8 animate-spin2" />
				<span className="SussyBoi relative block translate-x-10 -translate-y-8 font-bold text-red-600 bg-slate-300 px-2 rounded-md opacity-0 transition-opacity group-hover:opacity-100">
					SUS!
				</span>
			</div>
		);
	}

	componentDidMount() {
		var Moving = new RandomObjectMover(
			document.getElementById("player"),
			document.getElementsByTagName("main")[0]
		);
		let AudioControl = new Audio("assets/amoung-us-drip.mp3");
		let playing = false;
		this.setState({ Moving, AudioControl, playing });
	}

	toggleMusic = () => {
		this.state.playing ? this.state.AudioControl.pause() : this.state.AudioControl.play();
		this.setState({ playing: !this.state.playing });
	};
}

class RandomObjectMover {
	constructor(obj, container) {
		this.$object = obj;
		this.$container = container;
		this.container_is_window = container === window;
		this.pixels_per_second = 50;
		this.current_position = { x: 0, y: 0 };
		this.is_running = false;
		this.start();
	}

	setSpeed(pxPerSec) {
		this.pixels_per_second = pxPerSec;
	}

	_getContainerDimensions() {
		if (this.$container === window) {
			return { height: this.$container.innerHeight, width: this.$container.innerWidth };
		} else {
			return { height: this.$container.clientHeight, width: this.$container.clientWidth };
		}
	}

	_generateNewPosition() {
		// Get container dimensions minus div size
		var containerSize = this._getContainerDimensions();
		var availableHeight = containerSize.height - this.$object.clientHeight;
		var availableWidth = containerSize.width - this.$object.clientHeight;

		// Pick a random place in the space
		var y = Math.floor(Math.random() * availableHeight);
		var x = Math.floor(Math.random() * availableWidth);

		return { x: x, y: y };
	}

	_calcDelta(a, b) {
		var dx = a.x - b.x;
		var dy = a.y - b.y;
		var dist = Math.sqrt(dx * dx + dy * dy);
		return dist;
	}

	_moveOnce(a, b) {
		var next = this._generateNewPosition();

		// How far do we have to move?
		var delta = this._calcDelta(this.current_position, next);

		// Speed of this transition, rounded to 2DP
		var speed = Math.round((delta / this.pixels_per_second) * 100) / 100;

		//console.log(this.current_position, next, delta, speed);

		this.$object.style.transition = "transform " + speed + "s linear";
		this.$object.style.transform = "translate3d(" + next.x + "px, " + next.y + "px, 0)";

		// Save this new position ready for the next call.
		this.current_position = next;
	}

	start() {
		if (this.is_running) {
			return;
		}

		// Make sure our object has the right css set
		this.$object.willChange = "transform";
		this.$object.pointerEvents = "auto";

		this.boundEvent = this._moveOnce.bind(this);

		// Bind callback to keep things moving
		this.$object.addEventListener("transitionend", this.boundEvent);

		// Start it moving
		this._moveOnce();

		this.is_running = true;
	}
}

export default AmongUs;
