import User from "@/models/user";
import connectMongodb from "@/libs/connectMongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
    console.log("entering addUser route");
    await connectMongodb();
    const { userId, wishList, transactions } = await req.json();
    try {
        await User.create({userId, wishList, transactions});
        return NextResponse.json(
          { message: "User added successfully" },
          { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
          { message: "Error occcured while adding user..."+error },
          { status: 500 }
        );
    }
}