import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux';
import { decrement } from '@/store/slices/counterSlice';
import { removeProduct } from '@/store/slices/cartSlice';
const Cart_product = (props) => {
    const{product} = props
    const dispatch = useDispatch();
    const removeItem = (id) => {
        // console.log("removeitem",id);
        dispatch(removeProduct(id));
        dispatch(decrement());
    };
    
  return (
    <div className="flex flex-col justify-center  border-b-4 border-slate-50" key={product.id}>
      <div className="flex justify-around m-5 ">
        <Image
          className="mx-10"
          src={product.images[0]}
          alt={product.title}
          width={100}
          height={100}
        />
        <div className="flex flex-col  mx-10 content-start w-2/3">
          <h1 className="font-bold">{product.title}</h1>
          <p className="text-sm max-w-lg">{product.description}</p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-fit mt-2" 
           onClick={()=>removeItem(product.id)}>
            Remove
          </button>
        </div>
        <div className="">
          <p className="font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart_product