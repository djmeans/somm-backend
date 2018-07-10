
exports.up = function(knex, Promise) {
    return knex.schema.createTable('varietals', table => {
        table.increments('id')
        table.string('varietal')
        table.text('tastingNotes')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('varietals')
};