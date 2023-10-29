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

module.exports = mongoose.model("User", userSchema);
