import {products} from "@/products";
import { NextResponse } from "next/server";
export async function GET(req){
    
    // console.log(products)
    let finalProducts = products;

    return NextResponse.json(finalProducts)
}