// import { connectToDatabase } from "@/lib/mongodb";
import connectMongodb from "@/libs/connectMongodb";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(req, res) {
    try {

        await connectMongodb();

        const { email, phone, chooseEmail, password } = await req.json();
        
        // console.log("email: ", email, "phone: ", phone, "chooseEmail: ", chooseEmail);
        // check if user exists
        let user = "";
        if(chooseEmail){
            user = await User.findOne({ email, isVerified: true });
        }else{
            user = await User.findOne({ phone, isVerified: true });
        }
        
        
        if (!user) {
            return NextResponse.json({ message: "User doesn't exists or not completed the verification" }, { status: 400 });
        }

        // Check password
        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
        }

        // Create token
        const tokenData = {
            id: user._id,
            email: user.email,
            name: user.name
        }
        
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '24h' });

        const response = NextResponse.json({ message: "Login successful"}, { status: 200 });

        response.cookies.set('token', token, {
            httpOnly: true    // only changeable from server, user can only see
        });


        return response;

    } catch (error) {
        console.error(error);

        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}