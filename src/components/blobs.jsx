import React, { useContext, useEffect, useState } from "react";
import blobshape from "blobshape";
import dynamics from "dynamics.js";
import { EasterEggContext } from "../utils";

// Convert the class component to functional component
function Blobs() {
	let [count, setCount] = useState(0);
	let { SetEasterEggs } = useContext(EasterEggContext);

	let scaleBlob = () => {
		const blob = document.getElementById("blobSVG");
		blob.classList.add("scale-[0.75]");
		setTimeout(() => blob.classList.remove("scale-[0.75]"), 200);

		// Slimy Friend Achievement
		// console.log(`Blob Obtained! (x${count + 1})`);
		setCount(count + 1);
		if (count === 15) SetEasterEggs("Slimy Friend");
	};

	useEffect(() => {
		setInterval(() => {
			// BLOB
			const { path } = blobshape({
				size: 100,
				growth: 7,
				edges: 9,
			});
			animate(path);
		}, 1500);
	}, []);

	return (
		<div className="Project my-8 text-center Project-Special p-4 md:p-5">
			<h2 className="Title">Have a blob to help you on your journey!</h2>
			<div className="mx-auto w-60 h-60 transition-transform inline-block" onClick={scaleBlob} id="blobSVG" role="button" aria-hidden>
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
