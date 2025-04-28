import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 p-4 border-t border-gray-900">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className=" sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 p-4">
          <h3 className="text-lg font-bold mb-2 text-white">ShopEase</h3>
          <p className="font-light text-gray-200">
            Your one-stop shopping destination for quality products and
            excellent service.
          </p>
          <ul className="list-none flex space-x-2 mt-5">
            <li>
              <Link href="#" className="hover:text-white">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                <Twitter />
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 p-4">
          <h3 className="text-lg font-bold mb-2 text-white">Shop</h3>
          <ul className="list-none">
            <li className="mt-2">
              <Link href="/products" className="hover:text-white">
                All Products
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/categories" className="hover:text-white">
                Categories
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/products?sale=true" className="hover:text-white">
                Sale
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/products?new=true" className="hover:text-white">
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>
        <div className=" sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 p-4">
          <h3 className="text-lg font-bold mb-2 text-white">Account</h3>
          <ul className="list-none">
            <li className="mt-2">
              <Link href="/profile" className="hover:text-white">
                My Account
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/orders" className="hover:text-white">
                Orders
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/wishlist" className="hover:text-white">
                Wishlist
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className=" sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 p-4 ">
          <h3 className="text-lg font-bold mb-2 text-white">Newsletter</h3>
          <p className='font-light text-gray-200'>
            Subscribe to our newsletter to get updates on new products,
            promotions, and more.
          </p>
          <div className='flex justify-center items-center mt-2'>
            <input

              className='w-3/4 px-2 h-8 mr-2 rounded-md text-white bg-gray-700'
            />
            <Link href={"#"} className='py-1 px-3 bg-white text-black rounded-lg'>Subscribe</Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 border-t text-sm pt-8">
        <p>&copy; 2025 ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer