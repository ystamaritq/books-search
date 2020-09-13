import React from "react";
import { Card } from "antd";
import "./row-card.css";

const RowCard = (props) => {
	return (
		<div className="row-card-border-less-wrapper">
			<Card>{props.children}</Card>
		</div>
	);
};

export default RowCard;
