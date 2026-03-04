const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name"],
      maxlength: [40, "Name should not be more than 40 characters"],
      minlength: [2, "Name should be at least 2 characters"],
    },

    surename: {
      type: String,
      required: [true, "Please provide the name"],
      maxlength: [40, "Sureame should not be more than 40 characters"],
      minlength: [2, "Surename should be at least 2 characters"],
    },

    hobby: {
      type: String,
      maxlength: [200, "Hobby should not be more than 200 characters"],
      minlength: [20, "Hobby should be at least 20 characters"],
    },

    projectName: {
      type: String,
      required: [true, "Please provide the project name"],
      maxlength: [40, "Project name should not be more than 40 characters"],
      minlength: [2, "Project name should be at least 2 characters"],
    },
  },
  { timestamps: true },
);

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
