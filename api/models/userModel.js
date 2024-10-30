// models/userModel.js
const bcrypt = require("bcrypt");
const knex = require("../db/knex"); // Adjust to your knex configuration
const saltRounds = 10;

async function createUser(userData) {
  const { password, ...otherFields } = userData;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const [userId] = await knex("users").insert({
    ...otherFields,
    password: hashedPassword,
  });

  return userId;
}

async function getUserById(userId) {
  return knex("users").where({ id: userId }).first();
}

async function updateUser(userId, userData) {
  const { password, ...updateFields } = userData;

  if (password) {
    updateFields.password = await bcrypt.hash(password, saltRounds);
  }

  await knex("users").where({ id: userId }).update(updateFields);
  return true;
}

async function deleteUser(userId) {
  await knex("users").where({ id: userId }).del();
  return true;
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
