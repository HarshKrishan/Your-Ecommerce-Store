import { products } from "@/products";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  const { sku } = params;
//   console.log("sku: ", sku);
  let finalProduct = products.filter((product)=> product.sku==sku);

  if(!finalProduct){
    return NextResponse.json("No product found with given sku",{status:400})
  }
  // console.log(finalProduct)
  return NextResponse.json(finalProduct);
}
