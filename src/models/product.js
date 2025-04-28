// models/Product.js
// const mongoose = require("mongoose");
import mongoose from "mongoose";
const metaSchema = new mongoose.Schema(
  {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    barcode: String,
    qrCode: String,
  },
  { _id: false }
);
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category"},
    price: { type: Number, required: true },
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    tags: [String],
    sku: { type: String, unique: true },
    warrantyInformation: String,
    shippingInformation: String,
    availabilityStatus: String,
    numReviews: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    returnPolicy: String,
    minimumOrderQuantity: Number,
    meta: metaSchema,
    images: [String],
    thumbnail: String,
  },
  { timestamps: true }
);


let Product

try {
  Product = mongoose.model('Product')
} catch (error) {
  Product = mongoose.model('Product', productSchema)
}
// module.exports = Product;

export default Product
