import React from "react";
import { Form, Input, Button } from "antd";
import { BookOutlined } from "@ant-design/icons";

const BookSearchForm = ({ onSearch }) => {
	return (
		<Form onFinish={onSearch}>
			<Form.Item
				name="book"
				rules={[{ required: true, message: "Please enter a book name!" }]}
			>
				<Input
					prefix={<BookOutlined className="site-form-item-icon" />}
					placeholder="Enter Book Title ..."
				/>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className="login-form-button">
					Search
				</Button>
			</Form.Item>
		</Form>
	);
};

export default BookSearchForm;
