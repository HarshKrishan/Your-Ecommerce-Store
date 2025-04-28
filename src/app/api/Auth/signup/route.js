// import { connectToDatabase } from "@/lib/mongodb";
import connectMongodb from "@/libs/connectMongodb";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailer";
export async function POST(req, res) {


  try {
    await connectMongodb();

    const { fullname, email,phone, password } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { phone }],
    });
    if (existingUser)
      // return res.status(400).json({ message: "User already exists" });
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    const salt = await bcryptjs.genSalt(10);
    // Hash password
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new user
    const newUser = new User({ name:fullname, email,phone, password: hashedPassword });
    await newUser.save();

    console.log("User created successfully: ", newUser);

    // Send verification email
    await sendEmail({
      email: email,
      emailType: "VERIFY",
      userId: newUser._id,
    });

    // res
    //   .status(201)
    //   .json({ message: "User created successfully", user: newUser });

    return NextResponse.json({ message: "User registered successfully", user: newUser }, { status: 201 });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: "Internal Server Error" });

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
