exports.up = function (knex) {
  return knex.schema.createTable("friendships", function (table) {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("friend_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.boolean("is_confirmed").defaultTo(false); // Indicates if the friendship is accepted
    table.timestamps(true, true);

    // Composite unique constraint to prevent duplicate friendships
    table.unique(["user_id", "friend_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("friendships");
};
