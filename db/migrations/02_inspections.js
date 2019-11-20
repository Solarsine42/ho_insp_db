exports.up = function(knex, Promise) {
  return knex.schema.createTable("inspections", function(table) {
    table.increments();
    table.integer("inspector_id");
    table.string("special_instructions");
    table.string("contact_info").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("inspections");
};
