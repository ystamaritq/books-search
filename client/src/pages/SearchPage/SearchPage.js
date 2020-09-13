import React, { useState } from "react";
import RowCard from "./../../components/RowCard";
import BookSearchForm from "./../../components/BookSearchForm";
import BookCard from "../../components/BookCard";
import axios from "axios";
import { notification } from "antd";

const SearchPage = () => {
	const [books, setBooks] = useState([]);

	const onSave = ({
		thumbnail,
		title,
		subtitle,
		description,
		authors,
		link,
	}) => {
		// FIXME
		notification.success({
			message: `Successfully saved ${title}`,
			description: "This will now show in your saved books",
		});
	};

	const onSearch = async (values) => {
		console.log("Received values of form: ", values);

		var config = {
			method: "get",
			url: `/api/books/search?search=${values.book}`,
			headers: {},
		};

		axios(config)
			.then(function (response) {
				console.log(response.data);
				setBooks(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			<RowCard>
				<h2>Book Search</h2>
				<BookSearchForm onSearch={onSearch} />
			</RowCard>
			<RowCard>
				<h2>Results</h2>
				{books.map((book, index) => (
					<BookCard
						key={index}
						thumbnail={book.thumbnail}
						title={book.title}
						subtitle={book.subtitle}
						description={book.description}
						authors={book.authors}
						link={book.link}
						action={onSave}
					/>
				))}
			</RowCard>
		</>
	);
};

export default SearchPage;
