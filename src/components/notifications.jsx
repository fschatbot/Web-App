import { Component } from "react";
import { Link } from "../utils";
import "../styles/notification.css";

class Notification extends Component {
	state = {};

	render() {
		return (
			<div className="Notification">
				<div className="NotificationTextContainer">
					{/* Heroicon name: outline/information-circle */}
					<svg xmlns="http://www.w3.org/2000/svg" className="Notification-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					Did you know this website's code is open-sourced?
				</div>
				<Link href="https://github.com/fschatbot/web-app/" props={{ className: "NotificationRedirect no-custom" }}>
					Code
					{/* Heroicon name: outline/arrow-right */}
					<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</Link>
			</div>
		);
	}

	componentDidMount() {
		const NotificationElem = document.querySelector(".Notification");
		window.addEventListener("scroll", () => {
			if (document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300) {
				// If the user has scrolled down more than 3300px
				NotificationElem.style.transform = "translateY(0)";
			} else {
				// If the scroll is at the top
				NotificationElem.style.transform = "translateY(200%)";
			}
		});
	}
}

export default Notification;
