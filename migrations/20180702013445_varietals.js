
exports.up = function(knex, Promise) {
    return knex.schema.createTable('varietals', table => {
        table.increments('id')
        table.string('varietal')
        table.text('tastingNotes')
        knex.raw('SELECT setval(\'varietals_id_seq\', (SELECT MAX(id) from "varietals"));')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('varietals')
};