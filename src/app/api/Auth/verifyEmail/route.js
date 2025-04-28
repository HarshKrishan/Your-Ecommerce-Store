// import { connectToDatabase } from "@/lib/mongodb";

import connectMongodb from "@/libs/connectMongodb";
import User from "@/models/User";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailer";


export async function POST(req, res) {

    try {
        await connectMongodb();

        const { token } = await req.json();
        console.log(token);
        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } });
        console.log("user in verifyEmail", user);
        if (!user) {
            return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
        }
        console.log(user);

        // Update user

        await User.findByIdAndUpdate(user._id,{
            isVerified: true,
            verifyToken: null,
            verifyTokenExpiry: null
        })


        return NextResponse.json({ message: "Email verified successfully" }, { status: 200 });

    } catch (error) {
        console.error(error);

        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
        
    }
}