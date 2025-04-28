// import { connectToDatabase } from "@/lib/mongodb";
import connectMongodb from "@/libs/connectMongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import getDataFromToken from "@/utils/getDataFromToken";

export async function POST(req, res) {
    try {

        await connectMongodb();

        const userId = await getDataFromToken(req);
        // console.log(userId)
        if (!userId) {
          return NextResponse.json(
            { message: "Unauthorized" },
            { status: 401 }
          );
        }

        const user = await User.findById(userId).select("-password");
        
        if (!user) {
            return NextResponse.json({ message: "User doesn't exists" }, { status: 400 });
        }

        return NextResponse.json({ message: "User found", data:user }, { status: 200 });

        
    } catch (error) {
        // console.error(error);

        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
        
    }


}