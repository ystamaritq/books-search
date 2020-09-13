import React from "react";
import { Card, Avatar, Tooltip } from "antd";
import { EyeFilled, SaveFilled, DeleteFilled } from "@ant-design/icons";

import "./book-card.css";

const { Meta } = Card;

const BookCard = ({
	id,
	thumbnail,
	title,
	subtitle,
	description,
	authors,
	link,
	action,
	saved,
}) => (
	<Card
		title={title}
		actions={[
			<Tooltip title="View In Google Books">
				<a href={link} target="_blank" rel="noopener noreferrer">
					<EyeFilled key="view" style={{ color: "#001529", fontSize: 40 }} />
				</a>
			</Tooltip>,
			<span
				onClick={() =>
					action({ thumbnail, title, subtitle, description, authors, link, id })
				}
			>
				{!saved ? (
					<Tooltip title="Save Book">
						<SaveFilled key="save" style={{ color: "#001529", fontSize: 40 }} />
					</Tooltip>
				) : (
					<Tooltip title="Delete Book">
						<DeleteFilled
							key="delete"
							style={{ color: "#001529", fontSize: 40 }}
						/>
					</Tooltip>
				)}
			</span>,
		]}
	>
		<Meta
			avatar={<Avatar src={thumbnail} shape="square" />}
			title={subtitle}
			description={description}
		/>
		<p>Author: {authors && authors.join(", ")}</p>
	</Card>
);

export default BookCard;
