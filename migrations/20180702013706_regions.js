exports.up = function (knex, Promise) {
    return knex.schema.createTable('regions', table => {
        table.increments('id')
        table.string('varietal')
        table.string('country')
        table.string('region')
        table.string('appelation')
        table.decimal('lat')
        table.decimal('long')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('regions')
};