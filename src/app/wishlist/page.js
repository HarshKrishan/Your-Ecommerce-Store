"use client"
import React, { useState } from 'react'
import { useSelector} from "react-redux";
import WishList_product from '@/components/WishList_product';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Trash2 } from 'lucide-react';
import useWishlistStore from '@/store/wishlistStore';
const Page = () => {
    const product_list = useSelector((state) => state.wishList.wishList);

    const router = useRouter();
    // console.log("wishList", product_list.wishList)
  //   const [products, setProducts] = useState([
  //   {
  //     id: "1",
  //     title: "Wireless Headphones",
  //     category: "Electronics",
  //     thumbnail:
  //       "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
  //     onSale: true,
  //     discountedPrice: "99.99",
  //     price: "129.99",
  //     link: "categories/electronics",
  //   },
  //   {
  //     id: "2",
  //     title: "Smart Watch",
  //     category: "Electronics",
  //     thumbnail:
  //       "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/thumbnail.png",
  //     onSale: false,
  //     discountedPrice: "129.99",
  //     price: "199.99",
  //     link: "categories/electronics",
  //   },
  //   {
  //     id: "3",
  //     title: "Premium Backpack",
  //     category: "Fashion",
  //     thumbnail:
  //       "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/thumbnail.png",
  //     onSale: true,
  //     discountedPrice: "59.99",
  //     price: "79.99",
  //     link: "categories/electronics",
  //   },
  //   {
  //     id: "4",
  //     title: "iPhone 13 Pro",
  //     category: "Electronics",
  //     thumbnail:
  //       "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png",
  //     onSale: true,
  //     discountedPrice: "1050.99",
  //     price: "1099.99",
  //     link: "categories/electronics",
  //   },
  //   {
  //     id: "5",
  //     title: "Wireless Headphones",
  //     category: "Electronics",
  //     thumbnail:
  //       "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
  //     onSale: true,
  //     discountedPrice: "99.99",
  //     price: "129.99",
  //     link: "categories/electronics",
  //   },
  //   {
  //     id: "6",
  //     title: "Smart Watch",
  //     category: "Electronics",
  //     thumbnail:
  //       "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/thumbnail.png",
  //     onSale: false,
  //     discountedPrice: "129.99",
  //     price: "199.99",
  //     link: "categories/electronics",
  //   },
  //   {
  //     id: "7",
  //     title: "Premium Backpack",
  //     category: "Fashion",
  //     thumbnail:
  //       "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/thumbnail.png",
  //     onSale: true,
  //     discountedPrice: "59.99",
  //     price: "79.99",
  //     link: "categories/electronics",
  //   },
  //   {
  //     id: "8",
  //     title: "iPhone 13 Pro",
  //     category: "Electronics",
  //     thumbnail:
  //       "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png",
  //     onSale: true,
  //     discountedPrice: "1050.99",
  //     price: "1099.99",
  //     link: "categories/electronics",
  //   },
  // ]);

  const {products, removeProduct} = useWishlistStore();

  const handleCardClick = (sku) => {
    router.push("/products/" + sku);
  };

  const handleDelete = (id) =>{
    // const newProducts = products.filter((product)=> product.id!=id);

    // setProducts(newProducts);

    removeProduct(id);
  }

  return (
    // <div className=" bg-slate-100 h-screen overflow-y-scroll">

    //   { product_list.length === 0 ? <div className="text-center text-2xl mt-10">No items in Wish List</div> :
    //     product_list.map((product) => WishList_product({ product }))}
    // </div>
    <div className="bg-black text-white container px-4 py-8 md:px-6 md:py-12">
      <h1 className="font-bold text-3xl">My Wishlist</h1>
      {products.length == 0 ? 
      <div className='flex justify-center items-center flex-col mx-auto space-y-5'>
          <h2 className='text-xl font-semibold'>Your wishlist is empty</h2>
          <p className='text-gray-400 text-sm'>Save items you love to your wishlist and find them here anytime.</p>
          <Link href={"/products"} className='bg-blue-800 text-white px-4 py-2 rounded'>Browse Products</Link>
      </div>
      :
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 ">
        {products.map((card) => (
          <div
            className="rounded-md overflow-hidden bg-black hover:cursor-pointer relative"
            key={card.id}
            // onClick={() => handleCardClick(card.sku)}
          >
            <div className=" aspect-square overflow-hidden relative">
              <div
                className="absolute right-2 top-2 bg-gray-600 p-2 rounded-full z-10 backdrop-blur-sm hover:text-red-500"
                onClick={() => handleDelete(card.id)}
              >
                <Trash2 className="w-5 h-5" />
              </div>

              <Image
                src={card.thumbnail}
                alt="logo"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                width={400}
                height={400}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl truncate">{card.title}</h3>
              <p className="font-light text-gray-200">{card.category}</p>
              <div className="font-bold mt-2 flex items-center">
                ${card.price}
                {card.onSale && (
                  <span className="text-gray-200 pl-2 line-through font-normal">
                    ${card.discountedPrice}
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
              </div>

              <Link
                href={`/products/${card.slug}`}
                className="absolute inset-0 group"
              >
                <span className="sr-only">View Product</span>
              </Link>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default Page