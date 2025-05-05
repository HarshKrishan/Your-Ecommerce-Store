import {products} from "@/products";
import { NextResponse } from "next/server";
export async function GET(req){
    
    // console.log(products)
    let finalProducts = products;

    return NextResponse.json(finalProducts)
}

// import { products } from "@/products";
// import { NextResponse } from "next/server";
// import connectMongodb from "@/libs/connectMongodb";
// import Product from "@/models/product";
// import Category from "@/models/category";
// export async function GET(req) {
//   // console.log(products)
//   // let finalProducts = products;
//   try {
//     await connectMongodb();
//     const finalProducts = await Product.find().populate({
//       path: "category",
//     });

//     return NextResponse.json(finalProducts);
//   } catch (error) {
//     console.log("Something wrong happened!", error);
//     return NextResponse.json("Internal Server Error!", {
//       status: 500,
//     });
//   }
// }