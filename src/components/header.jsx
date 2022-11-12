import React, { useState, useCallback } from "react";
import { BsGithub, BsLaptop, BsSun, BsMoonStars } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { LoadImage, Link } from "../utils";
import "../styles/header.css";

function Header() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "-1");

	function changeTheme() {
		// Doing this makes the theme break if put to an unknown theme value
		const newTheme = ((Number(theme) + 2) % 3) - 1;
		localStorage.setItem("theme", newTheme);
		setTheme(newTheme.toString());
	}
	const themeChangeCallback = useCallback(changeTheme, [theme]);

	function executeTheme() {
		const doc_class = document.documentElement.classList;
		if (theme === "-1") {
			// Set Theme to User Preference
			const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			isDark ? doc_class.add("dark") : doc_class.remove("dark");
		} else if (theme === "0") {
			// Set Theme to Light
			doc_class.remove("dark");
		} else if (theme === "1") {
			// Set Theme to Dark
			doc_class.add("dark");
		}
	}

	function ThemeSVG() {
		executeTheme();
		if (theme === "-1") {
			return <BsLaptop size="20" />;
		} else if (theme === "0") {
			return <BsSun size="20" />;
		} else if (theme === "1") {
			return <BsMoonStars size="20" />;
		}
		return <BiErrorCircle size="20" />;
	}
	return (
		<header>
			<div className="Site-Info">
				{/* <LoadImage src="https://eform.etixdubai.com/App_Themes/DefaultNew/images/profile.png" alt="me" classes="Site-Logo" delay={1000} /> */}
				<LoadImage src="assets/Profile_Picture.png" alt="me" classes="Site-Logo" delay={1000} />
				<h1 className="Site-Title">Alpha Wolf</h1>
			</div>
			<div className="Utils">
				<ul className="Social-Links">
					<li>
						<a href="#AboutMe" className="no-underline">
							About me
						</a>
					</li>
					<li>
						<a href="#Projects" className="no-underline">
							Projects
						</a>
					</li>
					<li>
						<a href="#Contact" className="no-underline">
							Contact
						</a>
					</li>
				</ul>
				<span className="Divider" />
				<button id="theme-button" onClick={themeChangeCallback} type="button">
					<ThemeSVG />
				</button>
				<Link href="https://github.com/fschatbot/" props={{ className: "no-underline" }}>
					<BsGithub size="20" />
				</Link>
			</div>
		</header>
	);
}

export default Header;
