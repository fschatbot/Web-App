import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/navbar";
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
