const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number,
  price: Number
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  variants: [variantSchema],
  price: Number,
  discount: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
