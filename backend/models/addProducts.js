const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subCategory: { type: String },
  productType: { type: String },
  productName: { type: String, required: true },
  productCode: { type: String },
  strikePrice: { type: Number },
  displayPrice: { type: Number },
  availableOutlet: { type: [String] },
  productSequence: { type: String },
  productDescription: { type: String },
  offer: { type: String },
  recommended: { type: String },
  link: { type: String },
  image: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);