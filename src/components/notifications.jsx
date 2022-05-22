import { Component, useRef, useState, useEffect } from "react";
import { Link } from "../utils";
import "../styles/notification.css";
import { BiCookie } from "react-icons/bi";

function CookieNotification() {
	useEffect(() => {
		const NotificationElem = document.querySelector(".CookieNotification");
		window.addEventListener("scroll", () => {
			if (document.documentElement.scrollTop < 100) {
				// If the user is on the top of the page
				NotificationElem.style.transform = "translateY(0)";
			} else {
				NotificationElem.style.transform = "translateY(200%)";
			}
		});
	}, []);

	return (
		<div className="CookieNotification">
			<div>
				<BiCookie className="Notification-Icon" />
				This site requires cookies to function properly. Do you accept?
			</div>
			<div>
				<button>Decline</button>
				<button className="muted">Accept</button>
			</div>
		</div>
	);
}

function Notification() {
	useEffect(() => {
		const NotificationElem = document.querySelector(".Notification");
		console.log(NotificationElem);
		window.addEventListener("scroll", () => {
			if (document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300) {
				// If the user has scrolled down more than 3300px
				NotificationElem.style.transform = "translateY(0)";
			} else {
				// If the scroll is at the top
				NotificationElem.style.transform = "translateY(200%)";
			}
		});
	}, []);

	return (
		<div className="Notification">
			<div className="NotificationTextContainer">
				{/* Heroicon name: outline/information-circle */}
				<svg xmlns="http://www.w3.org/2000/svg" className="Notification-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				Did you know this website's code is open-sourced?
			</div>
			<Link href="https://github.com/fschatbot/web-app/" props={{ className: "NotificationRedirect no-custom no-underline" }}>
				Code
				{/* Heroicon name: outline/arrow-right */}
				<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</Link>
		</div>
	);
}

export { Notification, CookieNotification };
