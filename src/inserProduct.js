// insertProducts.js

import mongoose from "mongoose";
import Product from './models/product.js';
import Review from './models/review.js';
import Category from './models/category.js';
import User from './models/user.js'; // Optional, if reviewer is a registered user


import { products } from "./products.js";
import connectMongodb from "./libs/connectMongodb.js";
const importData = async () => {

    await connectMongodb();
  try {
    // console.log(products);
    for (let item of products) {
      // Check or create category
      let category = await Category.findOne({ name: item.category });
      if (!category) {
        category = await Category.create({
          name: item.category,
          slug: item.category.toLowerCase(),
        });
      }

      // Create product
      const product = await Product.create({
        title: item.title,
        description: item.description,
        category: category._id,
        price: item.price,
        discountPercentage: item.discountPercentage,
        rating: item.rating,
        stock: item.stock,
        tags: item.tags,
        sku: item.sku,
        warrantyInformation: item.warrantyInformation,
        shippingInformation: item.shippingInformation,
        availabilityStatus: item.availabilityStatus,
        returnPolicy: item.returnPolicy,
        minimumOrderQuantity: item.minimumOrderQuantity,
        meta: item.meta,
        images: item.images,
        thumbnail: item.thumbnail,
        numReviews: item.reviews?.length || 0,
      });

      // Create reviews
      if (item.reviews && item.reviews.length > 0) {
        for (let review of item.reviews) {
          await Review.create({
            product: product._id,
            rating: review.rating,
            comment: review.comment,
            date: review.date,
            reviewerName: review.reviewerName,
            reviewerEmail: review.reviewerEmail,
          });
        }
      }
    }

    console.log("Data imported successfully!");
    process.exit();
  } catch (err) {
    console.error("Error importing data:", err);
    process.exit(1);
  }
};


importData();