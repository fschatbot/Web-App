import { Component } from "react";
import { BsGithub, BsLaptop, BsSun, BsMoonStars } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { LoadImage, Link } from "../utils";
import "../styles/header.css";

class Header extends Component {
	state = {};

	render() {
		return (
			<header>
				<div className="Site-Info">
					<LoadImage
						src="https://eform.etixdubai.com/App_Themes/DefaultNew/images/profile.png"
						alt="me"
						className="Site-Logo"
						delay={1000}
					/>
					<h1 className="Site-Title">Alpha Wolf</h1>
				</div>
				<div className="Utils">
					<ul className="Social-Links">
						<li>
							<a href="#AboutMe">About me</a>
						</li>
						<li>
							<a href="#Projects">Projects</a>
						</li>
						<li>
							<a href="#Contact">Contact</a>
						</li>
					</ul>
					<span className="Divider" />
					<button id="theme-button" onClick={this.changeTheme}>
						<this.themeSVG />
					</button>
					<Link href="https://github.com/fschatbot/" className="github-page">
						<BsGithub size="20" />
					</Link>
				</div>
			</header>
		);
	}

	themeSVG() {
		let theme = localStorage.getItem("theme");
		if (theme === "-1") {
			return <BsLaptop size="20" />;
		} else if (theme === "0") {
			return <BsSun size="20" />;
		} else if (theme === "1") {
			return <BsMoonStars size="20" />;
		} else {
			return <BiErrorCircle size="20" />;
		}
	}

	changeTheme = () => {
		// Doing this makes the theme break if put to an unknown theme value
		let OldThemeStr = localStorage.getItem("theme");
		let HashMap = {
			"-1": -1,
			0: 0,
			1: 1,
		};
		let OldTheme = OldThemeStr in HashMap ? HashMap[OldThemeStr] : undefined;
		// Toggle between -1, 0, 1
		let theme = ((OldTheme + 2) % 3) - 1;
		localStorage.setItem("theme", theme);
		this.forceUpdate(this.executeTheme);
	};

	executeTheme() {
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
	}
}

export default Header;
