import { Component } from "react";
import { AiOutlineHeart } from "react-icons/ai";

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer>
				Made with <AiOutlineHeart className="inline-block" color="red" /> using React and Tailwind
			</footer>
		);
	}
}

export default Footer;
