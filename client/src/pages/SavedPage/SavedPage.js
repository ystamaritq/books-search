import React, { useState, useEffect } from "react";
import RowCard from "./../../components/RowCard";
import BookCard from "../../components/BookCard";
import { notification } from "antd";

var axios = require("axios");

const SavedPage = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		loadSaved();
	}, []);

	const loadSaved = () => {
		var config = {
			method: "get",
			url: "/api/books",
			headers: {},
		};

		axios(config)
			.then(function (response) {
				setBooks(response.data);
			})
			.catch(function (error) {
				console.log(error);
				notification.error({
					message: `Failed to load saved books`,
					description:
						"There was an error while loading saved books from storage",
				});
			});
	};

	const onDelete = ({ title, id }) => {
		var config = {
			method: "delete",
			url: `/api/books/${id}`,
			headers: {},
		};

		axios(config)
			.then(function (response) {
				notification.success({
					message: `Successfully deleted ${title}`,
					description: `Successfully deleted ${title} from your saved books`,
				});
				loadSaved();
			})
			.catch(function (error) {
				console.log(error);
				notification.error({
					message: `Failed to delete book`,
					description: "There was an error while deleting book from storage",
				});
			});
	};

	return (
		<>
			<RowCard>
				<h2>Saved Books</h2>
				{books.map((book, index) => (
					<BookCard
						key={index}
						id={book._id}
						thumbnail={book.thumbnail}
						title={book.title}
						subtitle={book.subtitle}
						description={book.description}
						authors={book.authors}
						link={book.link}
						action={onDelete}
						saved={true}
					/>
				))}
			</RowCard>
		</>
	);
};

export default SavedPage;
