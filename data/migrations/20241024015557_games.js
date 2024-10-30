exports.up = function (knex) {
  return knex.schema.createTable("games", function (table) {
    table.increments("id").primary();
    table.integer("third_party_id").defaultTo(null);
    table.string("name").notNullable();
    table.string("platform").notNullable();
    table.string("genre");
    table.string("release_date");
    table.string("developer");
    table.string("publisher");
    table.string("image");
    table.text("description");
    table.string("rating");
    table.string("trailer");
    table.string("url");
    table.text("tags");
    table.text("notes");

    table.timestamps(true, true); // adds created_at and updated_at
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("games");
};
