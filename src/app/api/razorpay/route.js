import { NextResponse } from "next/server";
const Razorpay = require("razorpay");
const shortid = require("shortid");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_KEY,
});

export async function POST(request) {
  let { amount } = await request.json();
  const payment_capture = 1;
  amount = parseInt(amount) * 100; 
  const currency = "INR";
  const options = {
    amount: amount.toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
    notes: {
      paymentFor: "Your Ecommerce Store",
      userId: "1234567890",
    },
  };

  const response = await razorpay.orders.create(options);
  // console.log(response);


  return NextResponse.json({message: "success", response,status: 200})
}

