
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('varietals').del()
    .then(function () {
      // Inserts seed entries
      return knex('varietals').insert([
        {
          varietal: "chardonnay",
          tastingNotes: "The Chardonnay grape itself is very neutral, with many of the flavors commonly associated with the grape being derived from such influences as terroir and oak. It is vinified in many different styles, from the lean, crisply mineral wines of Chablis, France, to New World wines with oak, and tropical fruit flavors. In cool climates, Chardonnay tends to be medium to light body with noticeable acidity and flavors of green plum, apple, and pear. In warmer locations, the flavors become more citrus, peach, and melon, while in very warm locations, more fig and tropical fruit notes such as banana and mango come out. Wines that have gone through malolactic fermentation tend to have softer acidity and fruit flavors with buttery mouthfeel and hazelnut notes.",
        }
      ]).then(knex.raw('SELECT setval(\'varietals_id_seq\', (SELECT MAX(id) from "varietals"));'));
    });
};
