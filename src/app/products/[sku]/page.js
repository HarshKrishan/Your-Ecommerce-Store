"use client";
import Rating from "@/components/Rating";
import { IndianRupee, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const page = ({ params }) => {
  const sku = params.sku;

  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [currImageIndex, setCurrImageIndex] = useState(0);
  async function getProductDetails() {
    const res = await fetch("/api/products/" + sku);
    const data = await res.json();

    // console.log(data);
    setProduct(data[0]);
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    // console.log("images: ",product.images);

    if (product && product.images && Array.isArray(product.images)) {
      setImages(product.images);
      console.log("image: ", product.images[0]);
    }
  }, [product]);
  // console.log(product.images);

  if (!product) {
    return (
      <div className="flex justify-center items-center flex-col my-5">
        <h1 className="text-white text-2xl">Product Not Found</h1>
        <p className="text-gray-400 text-center my-4">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href={"/categories"}
          className="py-2 px-4 bg-white text-black rounded-lg"
        >
          Browse Products
        </Link>
      </div>
    );
  }
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 bg-black text-white">
      <div className="max-w-4xl md:mx-auto md:max-w-6xl">
        <div className="grid sm:grid-cols-2">
          <div>
            <div className="h-96">
              {images.length > 0 && (
                <Image
                  src={images[currImageIndex]}
                  height={400}
                  width={400}
                  alt="image"
                  className="h-full max-h-3/4 w-full object-contain transition-transform hover:scale-105 "
                />
              )}
            </div>
            <div className="flex space-x-4 w-3/4 my-4 h-24 ">
              {images.length > 0 &&
                images.map((image, id) => (
                  <Image
                    key={id}
                    src={image}
                    height={50}
                    width={50}
                    alt="image"
                    className={`h-full max-h-3/4 w-full max-w-1/4 aspect-square overflow-hidden object-contain transition-transform cursor-pointer hover:scale-105 ${
                      currImageIndex == id && "border-[0.5px] border-blue-300"
                    }`}
                    onClick={() => setCurrImageIndex(id)}
                  />
                ))}
            </div>
          </div>

          <div>
            <h1 className="mt-5 font-bold text-xl md:text-3xl">
              {product.title}
            </h1>
            <div className="flex md:my-4 my-2">
              <Rating rating={product.rating} />
            </div>
            <div className="border-b-[0.5px]">
              {product && (
                <h3 className="font-bold flex">
                  <span className="flex items-center">
                    <IndianRupee className="h-4 w-4"></IndianRupee>
                    {(
                      (product.price * product.discountPercentage) /
                      100
                    ).toFixed(2)}{" "}
                  </span>

                  <span className="font-normal line-through text-gray-200 ml-2 flex items-center">
                    <IndianRupee className="h-4 w-4"></IndianRupee>
                    {product.price}
                  </span>
                </h3>
              )}
            </div>
            <div className="my-3">
              <p>{product.description}</p>
              <p
                className={`${
                  product.availabilityStatus == "In Stock"
                    ? "text-green-400"
                    : "text-red-400"
                } my-1`}
              >
                {product.availabilityStatus}
              </p>
            </div>
            <div>{/* counter, add to cart and heart icon */}</div>
            <div className="border-[0.5px] border-gray-700 px-5 py-2">
              <ul>
                {product.shippingInformation && (
                  <li className="list-disc">{product.shippingInformation}</li>
                )}
                {product.warrantyInformation && (
                  <li className="list-disc">{product.warrantyInformation}</li>
                )}
                {product.returnPolicy && (
                  <li className="list-disc">{product.returnPolicy}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {product.reviews && (
            <h2 className="font-bold text-xl">
              Reviews ({product.reviews.length})
            </h2>
          )}
          <div className="flex flex-col space-y-2">
            {product.reviews &&
              product.reviews.map((review, id) => (
                <div key={id} className="border-b-[0.5px] border-gray-800">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{review.reviewerName}</h2>
                    <h4 className="text-gray-400">
                      {review.date.split("T")[0]}
                    </h4>
                  </div>
                  <Rating rating={review.rating} />
                  <p className="text-gray-400 text-lg">{review.comment}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
