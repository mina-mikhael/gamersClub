const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/api/hello", (req, res) => {
  res.send("Hello Mina from Express");
});

server.get("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    stack: err.stack || "No stack trace available",
  });
});

module.exports = server;
