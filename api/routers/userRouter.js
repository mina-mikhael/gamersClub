// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const {
  userExists,
  usernameValidate,
} = require("../middlewares/userMiddleware");

// POST /api/users - Create a new user
router.post("/", usernameValidate, async (req, res, next) => {
  try {
    const userId = await userModel.createUser(req.body);
    res.status(201).json({ message: "User created successfully", userId });
  } catch (err) {
    next(err); // Pass error to centralized error handler
  }
});

// PUT /api/users/:id - Update an existing user
router.put("/:id", userExists, async (req, res, next) => {
  try {
    await userModel.updateUser(req.params.id, req.body);
    res.json({ message: "User updated successfully" });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/users/:id - Delete a user
router.delete("/:id", userExists, async (req, res, next) => {
  try {
    await userModel.deleteUser(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
