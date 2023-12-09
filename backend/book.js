//Importing mongoose
const mongoose = require("mongoose");

//Here we are writing schemas
const bookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
});

module.exports = mongoose.model("book", bookSchema);
