import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;

const BookCard = ({ title, bookImg, subtitle, description }) => (
	<Card title={<Title level={2}>{title}</Title>}>
		<img src={bookImg} alt="Book Picture" />
		<h3>{subtitle}</h3>
		<p>{description}</p>
	</Card>
);

export default BookCard;
