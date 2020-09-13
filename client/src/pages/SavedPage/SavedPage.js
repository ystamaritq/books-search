import React from "react";
import RowCard from "./../../components/RowCard";
import BookCard from "./../../components/BookCard";

const SavedPage = () => {
	return (
		<>
			<RowCard>
				<h2>Saved Books</h2>
				<BookCard
					cover="https://via.placeholder.com/150"
					title="Book Title Fetch"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				/>
			</RowCard>
		</>
	);
};

export default SavedPage;
