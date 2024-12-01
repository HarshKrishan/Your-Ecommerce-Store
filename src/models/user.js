const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    userId:{
        type: String,
        required: true,
        trim: true,
        },
    wishList: {
        type: Array,
        required: true,
        trim: true,
    },
    transactions: {
        type: Array,
        required: true,
        trim: true,
    },
},{
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
module.exports = User;
