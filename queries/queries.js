
var knex = require('../connection')

module.exports = {
  getRegionById: function (id) {
    return knex('regions').where('id', id).returning('*')
  },
  getRegionByCountry: function (email) {
    return knex('regions').select().where('region', region).returning('*')
  },
  getAllVarietals: function () {
    return knex('varietals').returning('*')
  },
  getVarietalByVarietal: function(varietal){
    return knex('varietals').select().where('varietal', varietal).returning('*')
  },
  getAllRegions: function () {
    return knex('regions').returning('*')
  },
  create(varietal){
    return knex("varietals")
    .insert(varietal)
    .returning('*')
    .then(record => record[0]);
  },
  update(varietal, body){
    return knex("varietals")
          .update(body)
          .where("varietal", varietal)
          .returning("*")
  },
  deleteRegion(id){
    return knex("regions").delete().where("id", id);
  },
  deleteVarietal(varietal){
    return knex("regions").delete().where("varietal", varietal);
  },
  createRegion(region){
    return knex("regions")
    .insert(region)
    .returning('*')
    .then(record => record[0]);
  },
};
