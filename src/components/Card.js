import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { increment } from '@/store/slices/counterSlice';
import { addProduct } from '@/store/slices/cartSlice';
import { addToWishList, removeFromWishList } from '@/store/slices/wishListSlice';
import { useRouter } from 'next/navigation';
const Card = (props) => {
    const [selected, setSelected] = useState(false);
    const router = useRouter()
    const { product } = props;
    const dispatch = useDispatch();
    
    const addToCart = (payload) => {
        dispatch(addProduct(payload));
        dispatch(increment());
    }

    const likeProduct = (payload) => {
      dispatch(addToWishList(payload));
    }

    const dislikeProduct = (payload) => {
      dispatch(removeFromWishList(payload));
    }
    const handleClick = (product) => {
        // console.log(product);
        router.push(`/product_detail/${product.id}`);
    }
    // console.log(product.images)
  return (
    <div
      key={product.id}
      className="border-2 rounded-md shadow-md p-2 flex justify-center flex-col hover:shadow-xl hover:shadow-slate-300 hover:cursor-pointer relative m-2"
    >
      {selected ? (
        <div>
          <Image
            width="28"
            height="28"
            src="https://img.icons8.com/color/32/filled-like.png"
            alt="fav"
            className="hover:cursor-pointer min-w-fit absolute top-5 right-5"
            onClick={() => {
              setSelected(!selected);
              dislikeProduct(product.id);
            }}
          />
        </div>
      ) : (
        <div>
          <Image
            width="28"
            height="28"
            src="https://img.icons8.com/windows/32/like--v1.png"
            alt="fav"
            className="hover:cursor-pointer min-w-fit  absolute top-5 right-5"
            onClick={() => {
              setSelected(!selected);
              likeProduct(product);
            }}
          />
        </div>
      )}

      <div className="" onClick={() => handleClick(product)}>
        <Image
          className="mx-auto hover:scale-110 transform transition duration-500 ease-in-out my-10"
          src={product.images[0]}
          alt={product.title}
          width={150}
          height={190}
        />

        <h1 className="font-bold text-xl">{product.title}</h1>
        <p className="text-sm font-sans">
          {product.description.substring(0, 150) + "..."}
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <p className="text-xl font-bold  absolute bottom-0 m-2">${product.price}</p>
        <button
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold p-2 rounded active:bg-blue-300 absolute bottom-0 right-0 m-2"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card