
exports.up = function(knex) {
    return knex.schema.createTable('tasks', function (table) {
        table.increments();
        table.integer('group_id').unsigned().nullable();
        table.integer('order').nullable();
        table.string('name').notNullable();
        table.string('description').nullable();
        table.timestamp("created").defaultTo(knex.fn.now());
        table.timestamp("updated").defaultTo(knex.fn.now());

        table.foreign('group_id').references('groups.id');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
