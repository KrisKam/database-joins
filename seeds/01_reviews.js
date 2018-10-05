
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("reviews").del()
    .then(function () {
      // Inserts seed entries
      return knex("reviews").insert([
        {books_id: 1, quote: "Glorious.", source: "New Yorker", positive: true},
        {books_id: 1, quote: "Blissfully Romantic….A strange, terrific, spellcasting story.", source: "San Francisco Chronicle", positive: true},
        {books_id: 2, quote: "So serenely beautiful and written in a prose so gravely measured and thoughtful, that one feels touched with grace just to read it.", source: "Washington Post", positive: true},
        {books_id: 2, quote: "Lyrical and meditative . . . potently contemplative.", source: "Time", positive: true},
        {books_id: 3, quote: "Remarkable . . . an even stronger accomplishment than Gilead.", source: "New York Review of Books", positive: true},
        {books_id: 4, quote: "An ambitious work on so many levels at once.", source: "Chicago Tribune", positive: true},
        {books_id: 5, quote: "A triumph―a genuinely new story, a genuinely new form.", source: "New Yorker", positive: true}
      ]);
    });
};
