import { NextResponse } from "next/server";


export async function POST(req, res) {
    try {
        const response = NextResponse.json({ message: "Logout successful"}, { status: 200 });

        response.cookies.set('token', '', {
            httpOnly: true,
            expires: new Date(0)
        });

        return response;
    } catch (error) {
        console.error(error);

        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });    
        
    }
}