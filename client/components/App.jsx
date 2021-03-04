import React, { Component } from "react";
import Row from "./Row";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount(props) {
		console.log("App component mounted!");
	}

	render() {
		console.log("App is rendered");
		const rowArray = [];
		for (let i = 0; i < 7; i++) {
			rowArray.push(<Row key={i} id={i} />);
		}
		// const { rows } = this.state;
		// const handleClick = this.state.handleClick;

		// const rowElements = rows.map((icon, i) => {
		// 	<Row key={i} />;
		// });

		return (
			<div>
				<div id="Boardbox">{rowArray}</div>
			</div>
		);
	}
}
export default App;
