
exports.up = function(knex) {
  return knex.schema.createTable('groups', function (table) {
      table.increments();
      table.string('name').notNullable();
      table.timestamp("created").defaultTo(knex.fn.now());
      table.timestamp("updated").defaultTo(knex.fn.now());

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('groups');
};
