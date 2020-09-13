import React from "react";
import RowCard from "./../../components/RowCard";
import BookCard from "./../../components/BookCard";

const SavedPage = () => {
	return (
		<>
			<RowCard>
				<h2>Saved Books</h2>
				<BookCard />
			</RowCard>
		</>
	);
};

export default SavedPage;
