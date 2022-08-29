const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const categoriesSchema = new Schema({
  categoryTitle: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    required: true
  },
    createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Categories", categoriesSchema);