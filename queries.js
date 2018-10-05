const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);


getAllBooks = () => {
  return knex
    .select()
    .from("books")
    .orderBy("id", "desc")
};

joinBooksReviews = () => {
  return knex
    .from("books")
    .innerJoin("reviews", "books.id", "reviews.books_id")
}
 
module.exports = {

  getAllBooks,
  joinBooksReviews

}