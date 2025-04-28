// models/Review.js
// const mongoose = require("mongoose");
import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  rating: { type: Number, required: true },
  comment: String,
  date: {type:Date, default:Date.now},
  reviewerName: String,
  reviewerEmail: String
},{
    timestamps:true
});

let Review

try {
  Review = mongoose.model('Review')
} catch (error) {
  Review = mongoose.model('Review', reviewSchema)
}
// module.exports = Review;


export default Review
