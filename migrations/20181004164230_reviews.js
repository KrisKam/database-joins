
exports.up = function(knex, Promise) {
  return knex.schema.createTable("reviews", (review) => {
    review.increments("reviewID").primary();
    review.foreign("books_id").references("books.id");
    review.string("quote", 400);
    review.string("source");
    review.boolean("positive");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("reviews");
};
