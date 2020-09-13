import React from "react";
import { PageHeader } from "antd";
import RowCard from "./../RowCard";

const SiteBanner = () => {
	return (
		<RowCard>
			<PageHeader style={{ textAlign: "center" }}>
				<h1>(React) Google Books Search</h1>
				<h3>Search for and Save Books of Interest</h3>
			</PageHeader>
		</RowCard>
	);
};

export default SiteBanner;
