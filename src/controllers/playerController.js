const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const Player = require("../models/Player.js");

const registerPlayer = asyncHandler(async (req, res) => {
  res.status(StatusCodes.OK).json({ message: "User registration endpoint" });
});

module.exports = { registerPlayer };
