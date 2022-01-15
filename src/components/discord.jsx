import React, { Component } from "react";

class Discord extends Component {
	state = { InviteURL: "" };
	render() {
		return <div>{this.state.InviteURL}</div>;
	}
}

export default Discord;
