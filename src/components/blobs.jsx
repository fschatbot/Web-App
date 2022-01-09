import React, { Component } from "react";
import blobshape from "blobshape";
import dynamics from "dynamics.js";
import { randomint } from "../utils";

class Blobs extends Component {
	state = {};
	render() {
		return (
			<div className="Project my-8 text-center flex-col!important important:flex-col Project-Special">
				<h2 className="Title">Have a blob to help you on your journey!</h2>
				<div
					className="mx-auto w-60 h-60 transition-transform inline-block"
					onMouseEnter={this.startBlob}
					onMouseLeave={this.stopBlob}
					onClick={this.scaleBlob}
					id="blobSVG">
					<svg viewBox="0 0 100 100">
						<path d={blobshape({ size: 100, growth: 7, edges: 9 }).path} fill="#2dd4bf" id="blob" />
					</svg>
				</div>
				<p>
					Powered by{" "}
					<a href="https://github.com/lokesh-coder/blobshape" target="_blank" rel="noreferrer">
						blobshape
					</a>{" "}
					and{" "}
					<a href="https://github.com/michaelvillar/dynamics.js" target="_blank" rel="noreferrer">
						dynamics.js
					</a>
				</p>
			</div>
		);
	}

	componentDidMount() {
		if (this.state.interval) return;
		let interval = setInterval(() => {
			// BLOB
			const { path } = blobshape({
				size: 100,
				growth: 7,
				edges: 9,
			});
			animate(path);
		}, 1500);
		this.setState({ interval });
	}

	scaleBlob = () => {
		const blob = document.getElementById("blobSVG");
		blob.classList.add("scale-[1.25]");
		setTimeout(() => {
			blob.classList.remove("scale-[1.25]");
		}, 200);
	};
}

const animate = (path, id = "blob") => {
	const element = document.getElementById(id);
	if (!element) return;
	const config = {
		type: dynamics.spring,
		frequency: 200,
		friction: 100,
		duration: 1500,
	};
	dynamics.animate(element, { d: path }, config);
};

export default Blobs;
