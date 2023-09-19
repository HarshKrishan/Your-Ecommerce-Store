"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "@/store/slices/counterSlice";
import { addProduct } from "@/store/slices/cartSlice";
import initializeRazorpaySDK from "@/app/api/initialiseRazorpaySDK/route";
import Swal from "sweetalert2";
const Page = (params) => {
  // console.log(params)
  const id = params.params.productId;
  // console.log("id ",id)
  const [product, setProduct] = useState();

  useEffect(() => {
    const url = "https://dummyjson.com/products/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  const dispatch = useDispatch();

  const addToCart = (payload) => {
    dispatch(addProduct(payload));
    dispatch(increment());
  };

  const handleCheckout = async () => {
    console.log("handle checkout called");
    const res = await initializeRazorpaySDK();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch(
      "http://localhost:3000/api/razorpay",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: "example_ebook",
          amount: product.price,
        }),
      }
    ).then((t) => t.json());
    console.log("data", data);
    if (data.status === 200) {
      var options = {
        key: process.env.RAZORPAY_ID,
        amount: data.response.amount,
        currency: "INR",
        name: "Your Ecommerce Store",
        description: "Test Transaction",
        image: "/logo.png",
        order_id: data.response.id,
        handler: function (response) {
          Swal.fire({
            title: "Success!",
            text: "Payment Successful",
            icon: "success",
            confirmButtonText: "Ok",
          });
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
          address: "Your Ecommerce Store",
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
          Swal.fire({
            title: "Error!",
            text: "Payment Failed",
            icon: "error",
            confirmButtonText: "Ok",
          });
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
      alert("Something wrong happened..Try again later");
    }
  };
  return (
    <div className="flex justify-center w-2/3 h-screen">
      <div className="flex justify-between">
        <div>
          <Image
            src={product?.images[0]}
            alt={product?.title}
            width={600}
            height={500}
          />
        </div>
        <div className=" ml-5">
          
            <h1 className="font-bold text-xl">{product?.title}</h1>

          

          <p>{product?.description}</p>
          <p className="font-bold ">${product?.price}</p>
          <div className="flex gap-x-2">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleCheckout}
            >
              Buy Now
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-800 text-white font-bold p-2 rounded active:bg-blue-300"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
