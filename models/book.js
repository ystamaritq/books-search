const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: { type: String, required: true },
	subtitle: { type: String, required: false },
	authors: { type: Array, required: true },
	description: { type: String, required: true },
	thumbnail: { type: String, required: true },
	link: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
