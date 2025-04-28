const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

let Wishlist;

try {
  Wishlist = mongoose.model("Wishlist");
} catch (error) {
  Wishlist = mongoose.model("Wishlist", wishlistSchema);
}
module.exports = Wishlist;
