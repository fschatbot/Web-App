import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

console.log("%cLanding Home Page Of【Alpha_Wolf_80】Made By【Alpha_Wolf_80】", "color:#2dc9ac;font-weight:900;");

// If no theme found then set a default or if the theme format is incorrect then set a default
const theme = localStorage.getItem("theme");
if (!theme || !["-1", "0", "1"].includes(theme)) localStorage.setItem("theme", -1);

const container = document.getElementById("root");

ReactDOM.createRoot(container).render(
	<React.StrictMode>
		<Header />
		<Main />
		<Footer />
	</React.StrictMode>
);
