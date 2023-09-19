"use client"
import Cart_product from '@/components/Cart_product';
import { setZero } from '@/store/slices/counterSlice';
import { emptyCart } from '@/store/slices/cartSlice';
import Link from 'next/link';
import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import initializeRazorpaySDK from '../api/initialiseRazorpaySDK/route';
import Swal from 'sweetalert2';
const Page = () => {
    const dispatch = useDispatch();
    const product_list = useSelector((state) => state.cart);
    
    const clearCart=()=>{
        dispatch(setZero());
        dispatch(emptyCart());
    }
    let total = 0;
    product_list.map((product) => {
      total += product.price;
    });

  //   const initializeRazorpaySDK = ()=>{

  //       return new Promise((resolve)=>{

  //       const script = document.createElement('script');
  //       script.src = "https://checkout.razorpay.com/v1/checkout.js";

  //       script.onload = ()=>{

  //           resolve(true); 
  //       };

  //       script.onerror = () =>{

  //           resolve(false); 
  //       };

  //       document.body.appendChild(script);
  //   })
  // }
    
    const handleCheckout = async () => { 
      
      const res = await initializeRazorpaySDK();
      if(!res){
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const data = await fetch(
        "api/razorpay",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: "example_ebook", amount: total }),
        }
      ).then((t) => t.json());
      
      if(data.status === 200){
        var options = {
          "key": process.env.RAZORPAY_ID, 
          "amount": data.response.amount, 
          "currency": "INR",
          "name": "Your Ecommerce Store",
          "description": "Test Transaction",
          "image": "/logo.png",
          "order_id": data.response.id, 
          "handler": function (response) {
            Swal.fire({
              title: 'Success!',
              text: 'Payment Successful',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            clearCart();
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
          },
          "prefill": {
            "name": "Harsh",
            "email": "Harsh@example.com",
            "contact": "",
          },
          "notes": {
            "address": "Your Ecommerce Store",
          },
          "theme": {
            "color": "#3399cc",
          },
        };
        // console.log("options",options)
        try {
          // console.log("try block")
          const paymentObject = new window.Razorpay(options);
          // console.log("paymentObject",paymentObject)
          paymentObject.on("payment.failed", function (response) {
            console.log("payment failed", response);
            Swal.fire({
              title: 'Error!',
              text: 'Payment Failed',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
            // alert(response.error.code);
            // alert(response.error.description);
            // alert(response.error.source);
            // alert(response.error.step);
            // alert(response.error.reason);
            // alert(response.error.metadata.order_id);
            // alert(response.error.metadata.payment_id);
          });
          // console.log("opening paymentobject")
          paymentObject.open();
        } catch (error) {
          console.log("error",error)
        }
        
        
      }else{
        alert("Something wrong happened..Try again later");
      }
      
    }
  return (
    <div className=" bg-slate-100 h-screen overflow-y-scroll">
      {product_list.map((product) => Cart_product({ product }))}
      {total === 0 ? (
        <h1 className="font-bold text-2xl text-center">Your cart is empty</h1>
      ) : (
        <div className="flex justify-end ">
          <h1 className="font-bold text-2xl mr-10 space-x-2">
            Total: ${total}
          </h1>
          <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handleCheckout}>Checkout</button>
         
        </div>
      )}
      
    </div>
  );
}

export default Page