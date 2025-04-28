import { NextResponse } from "next/server";
import toast from "react-hot-toast";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {

    if (request.nextUrl.pathname == "/") return NextResponse.next();
    // const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/me`;
    // const res = await fetch(url,{
    //     method:"POST"
    // });
    
    // console.log("res_status: ",res.status)

    const token = request.cookies.get("token")?.value;
    

    if (!token) {
        return NextResponse.redirect(new URL("/login?redirected=true", request.url));
    }



    return NextResponse.next();

  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|electronics.jpg|clothing.jpg|homeandkitchen.jpg|beauty.jpg|sports.jpg|books.jpg|toysandgames.jpg|automative.jpeg|shopeaselogo.png|login|signup|auth|about|categories|contact|product_detail|products|search|cart).*)",
  ],
};
