import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined, BookOutlined } from "@ant-design/icons";

const SiteHeader = () => {
	const { Header } = Layout;
	return (
		<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
				<Menu.Item key="1" style={{ paddingRight: 70 }}>
					<Link to="/">Google Books</Link>
				</Menu.Item>
				<Menu.Item key="2" icon={<SearchOutlined />}>
					<Link to="/search">Search</Link>
				</Menu.Item>
				<Menu.Item key="3" icon={<BookOutlined />}>
					<Link to="/saved">Saved</Link>
				</Menu.Item>
			</Menu>
		</Header>
	);
};

export default SiteHeader;
