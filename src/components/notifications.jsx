import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, EasterEggContext } from "../utils";
import "../styles/notification.css";
import { BiCookie } from "react-icons/bi";
import "animate.css/animate.css";

function CookieNotification() {
	let { SetEasterEggs, GetEasterEggs } = useContext(EasterEggContext);
	let forceDown = GetEasterEggs()["Ah yes, the negotiator"];
	const [stage, setStage] = useState(0);
	const [text, setText] = useState("This site requires cookies to function properly. Do you accept?");
	const [declineText, setDeclineText] = useState("Decline");
	const [acceptText, setAcceptText] = useState("Accept");
	let element = useRef();

	function checkScroll() {
		if (forceDown) {
			element.current.style.transform = "translateY(200%)";
		} else if (document.documentElement.scrollTop < 100) {
			// If the user is on the top of the page
			element.current.style.setProperty("--tw-translate-y", "0");
		} else {
			element.current.style.setProperty("--tw-translate-y", "200%");
		}
	}

	useEffect(() => {
		checkScroll();
		window.addEventListener("scroll", checkScroll);
		return () => window.removeEventListener("scroll", checkScroll);
	}, []);

	function showErr() {
		setText("An error occured, please try setting the cookies again");
		element.current.classList.add("animate__animated");
		element.current.classList.add("animate__shakeX");
		element.current.addEventListener("animationend", () => {
			element.current.classList.remove("animate__shakeX");
		});
		setTimeout(() => {
			forceDown = true;
			element.current.classList.add("animate__bounceOutDown");
			checkScroll();
		}, 5000);
	}

	function onDecline() {
		if (stage === 0) {
			setStage(2);
			setText("Are you sure you want to decline cookies?");
			setDeclineText("No, I changed my mind");
			setAcceptText("Yes, I'm sure");
		} else if (stage === 2) {
			setStage(4);
			showErr();
		}
	}

	function onAccept() {
		if (stage === 0) {
			setStage(1);
			showErr();
		} else if (stage === 2) {
			// Give the user his easter egg
			setStage(4);
			SetEasterEggs("Ah yes, the negotiator");
			setText("Ah, I see you're a negotiator. You may have one this battle, but its far from over!");
			setDeclineText("");
			setAcceptText("");
			setTimeout(() => {
				element.current.classList.add("animate__animated");
				element.current.classList.add("animate__bounceOutDown");
			}, 5000);
		}
	}

	return (
		<div className="CookieNotification" ref={element}>
			<div className="CookieText">
				<BiCookie className="Notification-Icon" />
				<span key={text.length}>{text}</span>
			</div>
			<div className="CookieOptions">
				<button onClick={onDecline} type="button">
					{declineText}
				</button>
				<button className="muted" onClick={onAccept} type="button">
					{acceptText}
				</button>
			</div>
		</div>
	);
}

function Notification() {
	useEffect(() => {
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
	}, []);

	return (
		<div className="Notification">
			<div className="NotificationTextContainer">
				{/* Heroicon name: outline/information-circle */}
				<svg xmlns="http://www.w3.org/2000/svg" className="Notification-Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				Did you know this website&apos;s code is open-sourced?
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
