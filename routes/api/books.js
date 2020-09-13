const router = require("express").Router();
const books = require("google-books-search");
const db = require("./../../models");

router.get("/search", (req, res) => {
	books.search(req.query.search, (error, results) => {
		if (!error) {
			res.json(results);
		} else {
			res.status(400).json(error);
		}
	});
});

router.get("/", (req, res) => {
	db.Book.find({})
		.then((books) => res.json(books))
		.catch((err) => res.status(422).json(err));
});

router.post("/", (req, res) => {
	db.Book.create(req.body)
		.then((workout) => res.json(workout))
		.catch((err) => res.status(422).json(err));
});

router.delete("/:id", (req, res) => {
	db.Book.findById({ _id: req.params.id })
		.then((dbModel) => dbModel.remove())
		.then((dbModel) => res.json(dbModel))
		.catch((err) => res.status(422).json(err));
});

module.exports = router;
