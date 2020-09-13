import React from "react";
import RowCard from "./../../components/RowCard";
import BookCard from "./../../components/BookCard";

const SavedPage = () => {
	return (
		<>
			<RowCard>
				<h2>Saved Books</h2>
				<BookCard
					title="Book Title Fetch"
					bookImg="https://via.placeholder.com/150"
					subtitle="Book subtitle example"
					description="This book is an example"
				/>
			</RowCard>
		</>
	);
};

export default SavedPage;
