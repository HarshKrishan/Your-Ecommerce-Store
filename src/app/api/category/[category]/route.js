import {products} from "@/products";
import { NextResponse } from "next/server";
export async function GET(req, {params}){
    const { category }  = params;
    // console.log(products)
    let finalProducts = products.filter((product)=>product.category==category || product.tags.includes(category));

    return NextResponse.json(finalProducts)
}