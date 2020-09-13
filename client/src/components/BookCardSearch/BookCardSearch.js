import React from "react";
import { Card, Avatar } from "antd";
import { FolderViewOutlined, DeleteOutlined } from "@ant-design/icons";
import "./book-card-search.css";
const { Meta } = Card;

const BookCardSearch = ({ cover, title, description }) => (
	<Card
		actions={[
			<FolderViewOutlined key="view" />,
			<DeleteOutlined key="delete" />,
		]}
	>
		<Meta
			avatar={<Avatar src={cover} />}
			title={title}
			description={description}
		/>
	</Card>
);

export default BookCardSearch;
