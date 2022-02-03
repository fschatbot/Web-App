import { Component } from "react";
import { Link } from "../utils";
import "../styles/notification.css";

class Notification extends Component {
	state = {};

	render() {
		return (
			<div className="Notification animate-fadein">
				{/* Heroicon name: outline/information-circle */}
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				Did you know that this project is open-sourced and you can see the code on{" "}
				<Link href="https://github.com/fschatbot/web-app/" props={{ className: "no-custom underline font-bold" }}>
					Here!
				</Link>
			</div>
		);
	}

	componentDidMount() {
		const NotificationElem = document.querySelector(".Notification");
		window.onscroll = () => {
			if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
				// If the user has scrolled down more than 40px
				NotificationElem.style.transform = "translateY(200%)";
			} else {
				// If the scroll is at the top
				NotificationElem.style.transform = "translateY(0)";
			}
		};
	}
}

export default Notification;
