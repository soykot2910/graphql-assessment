const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  name: String,
  authorId: String,
  bookId: String,
  publicationDate: String,
});

module.exports = mongoose.model("Publication", publicationSchema);
