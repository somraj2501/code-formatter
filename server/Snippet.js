const mongoose = require("mongoose");

const SnippetSchema = new mongoose.Schema({
  originalCode: String,
  formattedCode: String,
  detectedLanguage: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Snippet", SnippetSchema);
