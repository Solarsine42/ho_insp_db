exports.up = function(knex, Promise) {
  return knex.schema.createTable("members", function(table) {
    table.increments();
    table.integer("member_number").notNullable();
    table.string("policy_number").notNullable();
    table.string("contact_info").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("members");
};
