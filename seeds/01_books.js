
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books").del()
    .then(function () {
      // Inserts seed entries
      return knex("books").insert([
        {title: "Bel Canto", authorLast: "Patchett", authorFirst: "Ann", pubDate: "01-01-2001", purchaseURL: "https://www.amazon.com/Bel-Canto-Novel-Ann-Patchett/dp/0060188731/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr="},
        {title: "Gilead", authorLast: "Robinson", authorFirst: "Marilynne", pubDate: "01-01-2004", purchaseURL: "https://www.amazon.com/Gilead-Novel-Marilynne-Robinson/dp/0374153892/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1538624640&sr=1-1"},
        {title: "Home", authorLast: "Robinson", authorFirst: "Marilynne", pubDate: "01-01-2008", purchaseURL: "https://www.amazon.com/Home-Novel-Marilynne-Robinson/dp/0374299102/"},
        {title: "My Name Is Read", authorLast: "Pamuk", authorFirst: "Orhan", pubDate: "01-01-2001", purchaseURL: "https://www.amazon.com/My-Name-Red-Orhan-Pamuk/dp/0307593924/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1538624747&sr=1-1"},
        {title: "The Last Samurai", authorLast: "DeWitt", authorFirst: "Helen", pubDate: "01-01-2000", purchaseURL: "https://www.amazon.com/Last-Samurai-Helen-DeWitt/dp/081122550X/ref=sr_1_1?s=books&ie=UTF8&qid=1538624865&sr=1-1&keywords=the+last+samurai"}
      ]);
    });
};
