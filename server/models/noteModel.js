const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
});

const noteModel = mongoose.model("notes", noteSchema);
module.exports = noteModel;
