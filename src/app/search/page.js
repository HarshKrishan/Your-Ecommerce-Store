"use client";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const Page = (params) => {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  console.log("query" , query);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "/api/search/" + query;
    console.log("url ", url)
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setProducts(json);
      });
  }, []);

  if(products.length==0 || !query){
    return (
      <>
        <div className="bg-black text-white container px-4 py-8 md:px-6 md:py-12">
          <h1 className="font-bold text-3xl">Search Results</h1>
          <p className="text-gray-400 font-sm mt-2 mb-8">
            {products.length} results for {query}
          </p>

          <div className="text-center py-12">
            <h2 className="text-xl text-white font-bold mb-4">
              No products found
            </h2>
            <p className="text-gray-400 mb-6 ">
              We couldn't find any products matching your search. Try using
              different keywords or browse our categories.
            </p>
            <Link
              href={"/categories"}
              className="bg-blue-500 text-black py-2 px-4 my-5 rounded-md"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    // <div>
    //   <div className="flex justify-center flex-col">
    //     <h1 className="font-bold text-3xl text-center my-10">
    //       {query.toUpperCase()}
    //     </h1>
    //     <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
    //       {products.map((product) => (
    //         <Card key={product.item.id} product={product.item} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="bg-black text-white container px-4 py-8 md:px-6 md:py-12">
        <h1 className="font-bold text-3xl">Search Results</h1>
        <p className="text-gray-400 font-sm mt-2 mb-8">
          {products.length} results for {query}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 ">
          {products.map((product) => (
            <Cards key={product.item.id} product={product.item} />
          ))}
        </div>
      </div>
    </>
  );
};


const Cards = ({product}) =>{
  return <>
    <div
      className="rounded-md overflow-hidden group bg-black"
      key={product.id}
    >
      <div className=" aspect-square overflow-hidden">
        <Image
          src={product.thumbnail}
          alt="logo"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          width={400}
          height={400}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl truncate">{product.text}</h3>
        <p className="font-light text-gray-200">{product.category}</p>
        <div className="font-bold mt-2 flex items-center">
          {product.price}
          {product.onSale && (
            <span className="text-gray-200 pl-2 line-through font-normal">
              {product.discountedPrice}
            </span>
          )}
        </div>
        <div className="flex text-black gap-2 mt-4">
          <Link
            href="#"
            className=" w-full px-4 py-2 text-sm bg-slate-200 rounded flex justify-center items-center"
          >
            Add to Cart
          </Link>
          <Link
            href="#"
            className=" shrink-0 p-2 rounded text-white border border-gray-50"
          >
            <Heart />
          </Link>
        </div>
      </div>
    </div>
  </>
}


export default Page;
