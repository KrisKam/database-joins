const express = require("express");
const app = express();
const port = process.env.PORT || 5555;
const queries = require("./queries");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  queries.getAllBooks()
    .then(booksInfo => res.json({books: booksInfo}))
})

app.get("/booksreviews", (req, res, next) => {
  queries.joinBooksReviews()
    .then(result => res.json({results: result}))
})

app.listen(port, () => console.log(`Listening on port ${port}`));

