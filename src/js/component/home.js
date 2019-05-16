import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			isClicked: null
		};
	}
	render() {
		let redClass = "";
		this.state.isClicked === "red"
			? (redClass = "red-light bright")
			: (redClass = "red-light");
        let yellowClass = "";
		this.state.isClicked === "red"
			? (yellowClass = "yellow-light bright")
			: (yellowClass = "yellow-light");
        let greenClass = "";
		this.state.isClicked === "red"
			? (greenClass = "green-light bright")
			: (greenClass = "green-light");

		return (
			<div className="traffic-container">
				<div className="stem" />
				<div className="lights-container">
					<div
						onClick={() => this.setState({ isClicked: "red" })}
						className={redClass}
					/>
					<div
						onClick={() => this.setState({ isClicked: "yellow" })}
						className={yellowClass}
					/>
					<div
						onClick={() => this.setState({ isClicked: "green" })}
						className={greenClass}
					/>
				</div>
			</div>
		);
	}
}
