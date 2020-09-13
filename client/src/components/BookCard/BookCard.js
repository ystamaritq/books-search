import React from "react";
import { Card, Avatar } from "antd";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const BookCard = ({ image, title, description }) => (
	<Card
		style={{ width: 300 }}
		cover={
			<img
				alt="example"
				src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
			/>
		}
		actions={[
			<SettingOutlined key="setting" />,
			<EditOutlined key="edit" />,
			<EllipsisOutlined key="ellipsis" />,
		]}
	>
		<Meta
			avatar={<Avatar src={image} />}
			title={title}
			description={description}
		/>
	</Card>
);

export default BookCard;
