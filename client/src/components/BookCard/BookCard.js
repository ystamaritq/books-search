import React from "react";
import { Card, Avatar } from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import "./book-card.css";
const { Meta } = Card;

const BookCard = ({ cover, title, description }) => (
	<Card
		actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />]}
	>
		<Meta
			avatar={<Avatar src={cover} />}
			title={title}
			description={description}
		/>
	</Card>
);

export default BookCard;
