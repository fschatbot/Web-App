import React, { Component } from "react";
import "../styles/discord.css";
import { Link } from "../utils";

class Discord extends Component {
	state = { InviteURL: "https://discord.com/invite/Tas4unx8rg" };
	render() {
		return (
			<section className="Discord">
				<h1>Come Join My Server!!</h1>
				<Link href={this.state.InviteURL} props={{ className: "no-custom no-underline" }}>
					<img src="assets/discord.svg" alt="" />
					Join Now
				</Link>
			</section>
		);
	}
}

export default Discord;
