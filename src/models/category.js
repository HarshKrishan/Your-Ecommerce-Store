// const mongoose = require('mongoose');
import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: String
},{
  timestamps:true
});

let Category

try {
  Category = mongoose.model('Category')
} catch (error) {
  Category = mongoose.model('Category', categorySchema)
}
// module.exports = Category;

export default Category
