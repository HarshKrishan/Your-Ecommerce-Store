"use client"
import Cart_product from '@/components/Cart_product';
import { setZero } from '@/store/slices/counterSlice';
import { emptyCart } from '@/store/slices/cartSlice';
import Link from 'next/link';
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch} from "react-redux";
import initializeRazorpaySDK from '../api/initialiseRazorpaySDK/route';
import Image from 'next/image';
import { ArrowRight, Minus, Plus, Trash2 } from 'lucide-react';
import useCartStore from '@/store/cartStore';
import toast from 'react-hot-toast';
const Page = () => {
    // const dispatch = useDispatch();
    // const product_list = useSelector((state) => state.cart);
    
    // const clearCart=()=>{
    //     dispatch(setZero());
    //     dispatch(emptyCart());
    // }
    // var total = 0;
    // product_list.map((product) => {
    //   total += product.price;
    // });


    const [promoApplied, setPromoApplied] =  useState(false);
    // const [subTotal, setSubTotal] = useState(0);
    // const [discount, setDiscount] = useState(0);
    // const [total, setTotal] = useState(0);
    // const shippingCharges = 10.00;
    // const [products, setProducts] = useState([
    //     {
    //       id: "1",
    //       title: "Wireless Headphones",
    //       category: "Electronics",
    //       thumbnail:
    //         "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
    //       onSale: true,
    //       discountedPrice: "99.99",
    //       price: "129.99",
    //       link: "categories/electronics",
    //     },
    //     {
    //       id: "2",
    //       title: "Smart Watch",
    //       category: "Electronics",
    //       thumbnail:
    //         "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/thumbnail.png",
    //       onSale: false,
    //       discountedPrice: "129.99",
    //       price: "199.99",
    //       link: "categories/electronics",
    //     }
    //   ]);

    const {products, addToCart, decreaseQuantity, removeFromCart} = useCartStore();
    
    // function calculateTotal(){
    //   let currTotal = 0;
    //   if (subTotal>100){
    //     currTotal-=shippingCharges;
    //   }
    //   if (promoApplied) {
    //     setDiscount(0.1 * subTotal);
    //     currTotal -= 0.1 * subTotal;
    //   }
      
    //   return currTotal + subTotal + shippingCharges;
    // }

    let subtotal = products.reduce((sum, item) => {
      const itemPrice = item.sale ? item.price : item.price;
      return sum + itemPrice * item.quantity;
    }, 0);

    subtotal = parseFloat(subtotal.toFixed(2));
    const discount = promoApplied ? subtotal * 0.1 : 0;
    const shipping = subtotal > 100 ? 0 : 10;
    let total = subtotal - discount + shipping;
    total = parseFloat(total.toFixed(2));



        const initializeRazorpaySDK = () => {
          return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => {
              resolve(true);
            };

            script.onerror = () => {
              resolve(false);
            };

            document.body.appendChild(script);
          });
        };

        const handleCheckout = async () => {
          const res = await initializeRazorpaySDK();
          if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
          }

          const data = await fetch("api/razorpay", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId: "example_ebook", amount: total }),
          }).then((t) => t.json());
          // console.log("payment data: ", data);
          if (data.status === 200) {
            var options = {
              key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
              amount: data.response.amount,
              currency: "INR",
              name: "ShopEase",
              description: "Test Transaction",
              image: "/shopEase_logo.png",
              order_id: data.response.id,
              handler: function (response) {
                console.log("payment response: ", response)
                // Swal.fire({
                //   title: "Success!",
                //   text: "Payment Successful",
                //   icon: "success",
                //   confirmButtonText: "Ok",
                // });
                toast.success("Payment Successful!");
                // clearCart();
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
              },
              prefill: {
                name: "Harsh",
                email: "Harsh@example.com",
                contact: "",
              },
              notes: {
                address: "ShopEase",
              },
              theme: {
                color: "#3399cc",
              },
            };
            // console.log("options",options)
            try {
              // console.log("try block")
              const paymentObject = new window.Razorpay(options);
              // console.log("paymentObject",paymentObject)
              paymentObject.on("payment.failed", function (response) {
                console.log("payment failed", response);
                // Swal.fire({
                //   title: "Error!",
                //   text: "Payment Failed",
                //   icon: "error",
                //   confirmButtonText: "Ok",
                // });
                toast.error("Payment Failed!");
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
              console.log("error", error);
            }
          } else {
            toast.error("Something wrong happened..Try again later");
          }
        };

  return (
    // <div className=" bg-slate-100 h-screen overflow-y-scroll">
    //   {product_list.map((product) => Cart_product({ product }))}
    //   {total === 0 ? (
    //     <h1 className="font-bold text-2xl text-center">Your cart is empty</h1>
    //   ) : (
    //     <div className="flex justify-end ">
    //       <h1 className="font-bold text-2xl mr-10 space-x-2">
    //         Total: ${total}
    //       </h1>
    //       <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handleCheckout}>Checkout</button>

    //     </div>
    //   )}

    // </div>

    <div className="bg-black text-white container px-4 py-8 md:px-6 md:py-12">
      <h1 className="font-bold text-3xl mb-6">Shopping Cart</h1>

      {products.length == 0 ? (
        <div className="flex justify-center items-center flex-col mx-auto space-y-5">
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
          <p className="text-gray-400 text-sm">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            href={"/products"}
            className="bg-blue-800 text-white px-4 py-2 rounded"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-3 md:col-span-2">
            {products.map((card) => (
              <div
                className="flex space-x-2 border-b-[0.5px] border-gray-500"
                key={card.id}
                // onClick={() => handleCardClick(card.sku)}
              >
                <div className=" aspect-square overflow-hidden relative">
                  <Image
                    src={card.thumbnail}
                    alt="logo"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="p-2 relative  w-full">
                  <h3 className="font-bold w-1/2">{card.title}</h3>
                  <p className="absolute right-2 top-2">
                    ${card.price * card.quantity}
                  </p>
                  <div className="font-bold mt-2 flex items-center ">
                    ${card.price}
                    {card.onSale && (
                      <span className="text-gray-200 pl-2 line-through font-normal">
                        ${card.discountedPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-5 border-[0.5px] border-gray-800 mt-2 items-center">
                      <button
                        className="h-8 w-8 hover:bg-gray-800 cursor-pointer flex justify-center items-center"
                        onClick={() => decreaseQuantity(card.id)}
                      >
                        <Minus className="h-4 w-4"></Minus>
                      </button>

                      <span className="w-3 text-center">{card.quantity}</span>

                      <button
                        className="h-8 w-8 hover:bg-gray-800 cursor-pointer flex justify-center items-center"
                        onClick={() => addToCart(card)}
                      >
                        <Plus className="h-4 w-4"></Plus>
                      </button>
                    </div>
                    <button className="flex justify-center items-center space-x-2 text-gray-400"
                      onClick={()=>removeFromCart(card.id)}
                    >
                      <Trash2 className="h-5 w-5" />{" "}
                      <span>
                        <p>Remove</p>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row space-y-2 sm:justify-between sm:items-center flex-1">
              <div className="flex flex-1">
                <input
                  type="text"
                  className="bg-black text-white p-2 flex-1 border-[0.5px] border-gray-800 space-x-2 rounded"
                  placeholder="Promo code"
                />
                <button className="px-4 py-2 border-[0.5px] border-gray-800 flex-2 rounded">
                  Apply
                </button>
              </div>
              <Link
                href={"/products"}
                className="text-white border-[0.5px] border-gray-800 py-2 px-4 text-center bg-gray-800 rounded-lg"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="border-[0.5px] border-gray-800 p-4 flex-1">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="flex justify-between mt-4">
              <h4>Subtotal</h4>
              <p>${subtotal}</p>
            </div>
            {promoApplied && (
              <div className="flex justify-between mt-4">
                <h4>Discount</h4>
                <p>${discount}</p>
              </div>
            )}
            {
              //subtotal condition for shipping
              <div className="flex justify-between my-4 border-b-[0.5px] border-gray-800 ">
                <h4>Shipping</h4>
                <p>${shipping}</p>
              </div>
            }

            <div className="flex justify-between my-4 ">
              <h4 className="font-bold">Total</h4>
              <p className="text-blue-800">${total}</p>
            </div>

            <button className=" py-2 text-center w-full bg-blue-600 rounded text-black flex justify-center items-center space-x-2"
              onClick={()=>handleCheckout()}
            >
              Checkout{" "}
              <span>
                <ArrowRight className="h-5 w-5"></ArrowRight>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page