exports.up = function (knex) {
  return knex.schema.createTable("user_games", function (table) {
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.integer("game_id").unsigned();

    table.primary(["user_id", "game_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_games");
};
