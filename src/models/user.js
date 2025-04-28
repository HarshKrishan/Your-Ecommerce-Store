// const mongoose = require("mongoose");
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: {type:String, required:true, unique:true},
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      postalCode: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  {
    timestamps: true,
  }
);

// const User = mongoose.model("User", userSchema);

let User

try {
  User = mongoose.model('User')
} catch (error) {
  User = mongoose.model('User', userSchema)
}
// module.exports = User;

export default User;