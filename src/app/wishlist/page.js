"use client"
import React from 'react'
import { useSelector} from "react-redux";
import WishList_product from '@/components/WishList_product';

const Page = () => {
    const product_list = useSelector((state) => state.wishList.wishList);
    // console.log("wishList", product_list.wishList)

  return (
    <div className=" bg-slate-100 h-screen overflow-y-scroll">

      { product_list.length === 0 ? <div className="text-center text-2xl mt-10">No items in Wish List</div> :
        product_list.map((product) => WishList_product({ product }))}
    </div>
  );
}

export default Page