import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Projects from "./components/projects";
import About from "./components/about";

ReactDOM.render(
	<React.StrictMode>
		<Fragment>
			<Header />
			<About />
			<Projects />
			<Footer />
		</Fragment>
	</React.StrictMode>,
	document.getElementById("root")
);

console.log(
	"%cLanding Home Page Of【Alpha_Wolf_80】Made By【Alpha_Wolf_80】",
	"color:#2dc9ac;font-weight:900;"
);

// If no theme found then set a default
if (!localStorage.getItem("theme")) localStorage.setItem("theme", -1);

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
