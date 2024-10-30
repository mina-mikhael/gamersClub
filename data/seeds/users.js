const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();

const adminPassword = process.env.ADMIN_PASSWORD;
const adminEmail = process.env.ADMIN_EMAIL;
const adminPhone = process.env.ADMIN_PHONE;

exports.seed = async function (knex) {
  // Deletes ALL existing entries in users table
  await knex("users").del();

  // Hash the password
  const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);

  // Inserts a new admin user
  await knex("users").insert([
    {
      username: "admin",
      first_name: "Admin",
      last_name: "User",
      email: adminEmail,
      phone: adminPhone,
      password: hashedPassword, // Store hashed password
      avatar: null,
      bio: "I'm not a man with to many faces, the mask I wear is one.",
      city: "Clearwater",
      state: "FL",
      country: "USA",
      availability: null,
      is_admin: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
