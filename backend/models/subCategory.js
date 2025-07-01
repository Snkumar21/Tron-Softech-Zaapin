const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  subCategoryName: { type: String, required: true },
  image: { type: String }, // will store image filename
}, { timestamps: true });

module.exports = mongoose.model('SubCategory', subCategorySchema);