const userModel = require("../models/userModel");

async function userExists(req, res, next) {
  const { id } = req.params;
  const user = await userModel.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  req.user = user;
  next();
}

async function usernameValidate(req, res, next) {
  const { username } = req.body;
  const user = await userModel.getUserByUsername(username);

  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }

  next();
}

module.exports = {
  userExists,
  usernameValidate,
};
