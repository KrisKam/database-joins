
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books").del()
    .then(function () {
      // Inserts seed entries
      return knex("books").insert([
        {title: "Bel Canto", authorLast: "Patchett", authorFirst: "Ann", pubDate: 2001, purchaseURL: "https://www.amazon.com/Bel-Canto-Novel-Ann-Patchett/dp/0060188731/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr="},
        {title: "Gilead", authorLast: "Robinson", authorFirst: "Marilynne", pubDate: 2004, purchaseURL: "https://www.amazon.com/Gilead-Novel-Marilynne-Robinson/dp/0374153892/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1538624640&sr=1-1"},
        {title: "Home", authorLast: "Robinson", authorFirst: "Marilynne", pubDate: 2008, purchaseURL: "https://www.amazon.com/Home-Novel-Marilynne-Robinson/dp/0374299102/ref=pd_sim_14_1?_encoding=UTF8&pd_rd_i=0374299102&pd_rd_r=c0f2cd02-c787-11e8-8e16-130f854170ed&pd_rd_w=RNPfV&pd_rd_wg=6fmfg&pf_rd_i=desktop-dp-sims&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=18bb0b78-4200-49b9-ac91-f141d61a1780&pf_rd_r=DBNAD3XY73RJCM3E6GRW&pf_rd_s=desktop-dp-sims&pf_rd_t=40701&psc=1&refRID=DBNAD3XY73RJCM3E6GRW"},
        {title: "My Name Is Read", authorLast: "Pamuk", authorFirst: "Orhan", pubDate: 2001, purchaseURL: "https://www.amazon.com/My-Name-Red-Orhan-Pamuk/dp/0307593924/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1538624747&sr=1-1"},
        {title: "The Last Samurai", authorLast: "DeWitt", authorFirst: "Helen", pubDate: 2000, purchaseURL: "https://www.amazon.com/Last-Samurai-Helen-DeWitt/dp/081122550X/ref=sr_1_1?s=books&ie=UTF8&qid=1538624865&sr=1-1&keywords=the+last+samurai"}
      ]);
    });
};
