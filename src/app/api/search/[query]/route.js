
import { products } from "@/products";
import Fuse from "fuse.js";
import { NextResponse } from "next/server";
export async function GET(req, {params}){
    const { query } = params;

    console.log("query:", query);


    const fuse = new Fuse(products, {
        keys: ['title','description','category','tags']
    })


    const res = fuse.search(query)

    return NextResponse.json(res,{status:200});

}