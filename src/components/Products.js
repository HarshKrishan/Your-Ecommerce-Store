"use client"
import React, { useEffect, useState } from 'react'

import Card from './Card'
const Products = () => {
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json =>
          // console.log(json.products),
          setProducts(json.products)
        )
        // .then(json => 
        //     setProducts(json.products))
    }, [])

    // console.log(products)

  return (
    <div className="flex justify-center flex-col">
      <h1 className="font-bold text-3xl text-center my-10">Our Products</h1>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products