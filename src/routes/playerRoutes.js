const express = require("express");
const { registerPlayer } = require("../controllers/playerController.js");

const playerRouter = express.Router();

playerRouter.post("/register", registerPlayer);

module.exports = playerRouter;
