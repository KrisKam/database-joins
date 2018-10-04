
exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", (book) => {
    book.increments("id");
    book.string("title");
    book.string("authorLast");
    book.string("authorFirst");
    book.date("pubDate");
    book.string("purchaseURL");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books");
};
