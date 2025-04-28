const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
  
},{
    timestamps:true
});

let Cart

try {
  Cart = mongoose.model('Cart')
} catch (error) {
  Cart = mongoose.model('Cart', cartSchema)
}
module.exports = Cart;
