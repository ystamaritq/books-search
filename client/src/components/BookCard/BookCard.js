import React from "react";
import { Card, Typography, Row } from "antd";

const { Title } = Typography;

const BookCard = ({ title, bookImg, subtitle, description }) => (
	<Card title={<Title level={2}>{title}</Title>}>
		<h3>{subtitle}</h3>
		<Row>
			<img src={bookImg} alt="Book Picture" />
			<p>{description}</p>
		</Row>
	</Card>
);

export default BookCard;
