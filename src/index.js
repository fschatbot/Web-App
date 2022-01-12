import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import Header from "./components/header";
import About from "./components/about";
import Tips from "./components/Tips";
import Projects from "./components/projects";
import AmongUs from "./components/amongus";
import EasterUI from "./components/easter";
import Footer from "./components/footer";

ReactDOM.render(
	<React.StrictMode>
		<Fragment>
			<Header />
			<main>
				<div className="WaveDivider">
					<About />
					<Tips />
					<div class="custom-shape-divider-bottom-1641994563">
						<svg
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none">
							<path
								d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
								class="shape-fill"></path>
						</svg>
					</div>
				</div>
				<AmongUs />
				<Projects />
				<EasterUI />
			</main>
			<Footer />
		</Fragment>
	</React.StrictMode>,
	document.getElementById("root")
);

console.log(
	"%cLanding Home Page Of【Alpha_Wolf_80】Made By【Alpha_Wolf_80】",
	"color:#2dc9ac;font-weight:900;"
);

// If no theme found then set a default or if the theme format is incorrect then set a default
let theme = localStorage.getItem("theme");
if (!theme || !["-1", "0", "1"].includes(theme)) localStorage.setItem("theme", -1);

let doc_class = document.documentElement.classList;
if (localStorage.getItem("theme") === "-1") {
	// Set Theme to User Preference
	let Utheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	if (Utheme === "dark") {
		doc_class.add("dark");
	} else {
		doc_class.remove("dark");
	}
} else if (localStorage.getItem("theme") === "0") {
	// Set Theme to Light
	doc_class.remove("dark");
} else if (localStorage.getItem("theme") === "1") {
	// Set Theme to Dark
	doc_class.add("dark");
}
