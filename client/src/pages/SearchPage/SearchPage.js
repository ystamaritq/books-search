import React from "react";
import RowCard from "./../../components/RowCard";
import BookSearchForm from "./../../components/BookSearchForm";

const SearchPage = () => {
	const onSearch = (values) => {
		console.log("Received values of form: ", values);
	};

	return (
		<>
			<RowCard>
				<h2>Book Search</h2>
				<BookSearchForm onSearch={onSearch} />
			</RowCard>
			<RowCard>
				<h2>Results</h2>
			</RowCard>
		</>
	);
};

export default SearchPage;
