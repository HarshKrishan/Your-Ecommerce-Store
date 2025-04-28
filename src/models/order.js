// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orderItems: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number,
    },
  ],
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
  },
  paymentMethod: String,
  paymentStatus: { type: String, default: "pending" }, // 'paid', 'failed'
  isDelivered: { type: Boolean, default: false },
  deliveredAt: Date,
  totalPrice: Number,
},{
    timestamps:true
});

let Order

try {
  Order = mongoose.model('Order')
} catch (error) {
  Order = mongoose.model('Order', orderSchema)
}
module.exports = Order;
