import React, { Component } from "react";

class Tips extends Component {
	state = {};
	render() {
		return (
			<div className="text-center text-sm font-medium	text-slate-700/70">
				<p>Site was made over one weekend on 09-01-2022 when I was 14</p>
				<p>
					<span className="font-bold text-slate-700">Tip:</span> Try{" "}
					<span className="hover:underline cursor-pointer decoration-slate-700">
						Hovering/Clicking
					</span>{" "}
					on any elements to find easter eggs
				</p>
			</div>
		);
	}
}

export default Tips;
