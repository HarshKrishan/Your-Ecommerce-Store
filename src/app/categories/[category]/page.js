"use client";
import Card from "@/components/Card";
 
import React, { useEffect, useState } from "react";

const Page =  (params) => {
  
    const category = params.params.category;
    // console.log("id ", id);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const url = "https://dummyjson.com/products/category/" + category;
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
            // console.log(json)
            // setTimeout(() => {
            //     setProducts(json.products)
            // }, 3000)});
            setProducts(json.products)});
    }, []);
   
  return (
    <div>
      <div className="flex justify-center flex-col">
        <h1 className="font-bold text-3xl text-center my-10">
          {category.toUpperCase()}
        </h1>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
