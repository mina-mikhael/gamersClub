exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("username").notNullable().unique();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable().unique();
    table.string("phone");
    table.string("password").notNullable(); // Store hashed passwords
    table.string("avatar");
    table.text("bio");
    table.string("city");
    table.string("state");
    table.string("country");
    table.text("availability");
    table.boolean("is_admin").defaultTo(false);
    table.timestamps(true, true); // adds created_at and updated_at
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
