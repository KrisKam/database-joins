
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("reviews").del()
    .then(function () {
      // Inserts seed entries
      return knex(reviews).insert([
        {bookID: 1, quote: "Glorious.", source: "New Yorker", positive: true},
        {bookID: 1, quote: "Blissfully Romantic….A strange, terrific, spellcasting story.", source: "San Francisco Chronicle", positive: true},
        {bookID: 2, quote: "So serenely beautiful and written in a prose so gravely measured and thoughtful, that one feels touched with grace just to read it.", source: "Washington Post", positive: true},
        {bookID: 2, quote: "Lyrical and meditative . . . potently contemplative.", source: "Time", positive: true},
        {bookID: 3, quote: "Remarkable . . . an even stronger accomplishment than Gilead.", source: "New York Review of Books", positive: true},
        {bookID: 4, quote: "An ambitious work on so many levels at once.", source: "Chicago Tribune", positive: true},
        {bookID: 5, quote: "A triumph―a genuinely new story, a genuinely new form.", source: "New Yorker", positive: true}
      ]);
    });
};
