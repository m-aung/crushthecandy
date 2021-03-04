import React from "react";
import Container from "./Container.jsx";

const Row = (props) => {
	const { id } = props;
	const rowArray = [];
	for (let i = 0; i < 7; i++) {
		rowArray.push(<Container key={i + id} id={i + id} />);
	}
	return <div> {rowArray} </div>;
};

export default Row;
