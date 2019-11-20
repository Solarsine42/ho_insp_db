exports.up = function(knex, Promise) {
  return knex.schema.createTable("addresses", function(table) {
    table.increments();
    table.string("address").notNullable();
    table
      .integer("member_id")
      .references("id")
      .inTable("members")
      .notNullable()
      .onDelete("CASCADE");
    table
      .integer("inspection_id")
      .references("id")
      .inTable("inspections")
      .notNullable()
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("addresses");
};
