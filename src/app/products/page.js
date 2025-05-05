"use client";
import Card from "@/components/Card";
import {
  CircleArrowLeft,
  CircleArrowRight,
  Filter,
  Heart,
  IndianRupee,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useWishlistStore from "@/store/wishlistStore";
import React, { useEffect, useState } from "react";
import { products } from "@/products";
import useCartStore from "@/store/cartStore";

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-gray-300">
    <button
      className="flex justify-between w-full py-4 text-left font-medium"
      onClick={onClick}
    >
      {title}
      <span>{isOpen ? "▲" : "▼"}</span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="py-4">{children}</div>
    </div>
  </div>
);

const WishListCard = ({ product, handleCardClick }) => {
  // const [selected, setSelected] = useState(false);

  const { addProduct, removeProduct, products } = useWishlistStore();
  const { addToCart } = useCartStore();
  const isInWishlist = products.some((curr) => curr.id == product.id);

  const handleHeartClick = () => {
    if (isInWishlist) {
      removeProduct(product.id);
      // setSelected(false);
    } else {
      addProduct(product);
      // setSelected(true);
    }
  };

  const handleCartClick = () => {
    addToCart(product);
  };

  return (
    <div
      className="rounded-md overflow-hidden bg-black hover:cursor-pointer relative group"
      key={product.id}
      onClick={() => handleCardClick(product.sku)}
    >
      <div className=" aspect-square overflow-hidden">
        <Image
          src={product.thumbnail}
          alt="logo"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          width={400}
          height={400}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl truncate">{product.title}</h3>
        <p className="font-light text-gray-200">{product.category}</p>
        <div className="font-bold mt-2 flex items-center">
          <span className="flex items-center">
            <IndianRupee className="h-4 w-4"></IndianRupee>
            {product.price}
          </span>
          {product.onSale && (
            <span className="text-gray-200 pl-2 line-through font-normal flex items-center">
              <IndianRupee className="h-4 w-4"></IndianRupee>
              {product.discountedPrice}
            </span>
          )}
        </div>
        <div className="flex text-black gap-2 mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCartClick();
            }}
            className=" w-full px-4 py-2 text-sm bg-slate-200 rounded flex justify-center items-center"
          >
            Add to Cart
          </button>
          <button
            href="#"
            className={`shrink-0 p-2 rounded border border-gray-50`}
            onClick={(e) => {
              e.stopPropagation();
              handleHeartClick();
            }}
          >
            <Heart
              className={`${isInWishlist ? "text-red-500" : "text-white"}`}
              fill={`${isInWishlist ? "red" : "black"}`}
            />
          </button>
        </div>
      </div>
      {/* <Link
        href={`/products/${product.slug}`}
        className="absolute inset-0 group"
      >
        <span className="sr-only">View Product</span>
      </Link> */}
    </div>
  );
};
const categoryInfo = {
  electronics: {
    name: "Electronics",
    description: "Discover the latest gadgets and tech innovations",
    subcategories: ["Audio", "Wearables", "Computers", "Smartphones"],
  },
  clothing: {
    name: "Clothing",
    description: "Stylish apparel for every occasion",
    subcategories: ["Tops", "Bottoms", "Accessories", "Footwear"],
  },
  "home-kitchen": {
    name: "Home & Kitchen",
    description: "Everything you need to make your house a home",
    subcategories: ["Appliances", "Furniture", "Decor", "Kitchenware"],
  },
  beauty: {
    name: "Beauty",
    description: "Premium beauty and personal care products",
    subcategories: ["Skincare", "Makeup", "Haircare", "Fragrance"],
  },
  sports: {
    name: "Sports",
    description: "Equipment and apparel for all your sporting needs",
    subcategories: ["Fitness", "Outdoor", "Footwear", "Accessories"],
  },
  books: {
    name: "Books",
    description: "Expand your mind with our collection of books",
    subcategories: ["Fiction", "Non-Fiction", "Educational", "Children"],
  },
};

const PaginatedItems = ({ products, handleCardClick }) => {
  const [items, setItems] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  const maxLimit = products.length;

  const diff = 20;

  const [data, setData] = useState(products);

  // Dynamically generate pages array
  const totalPages = Math.ceil(data.length / diff);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(diff);
  useEffect(() => {
    if (data.length === 0) return;

    const startIndex = (currPage - 1) * diff;
    const endIndex = startIndex + diff;
    setStart(startIndex + 1);
    setEnd(endIndex);
    let temp = data.slice(startIndex, endIndex);

    setItems(temp);
  }, [currPage, data]);

  useEffect(() => {
    setData(products);
  }, [products]);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 ">
        {items.length > 0 &&
          items.map((product) => (
            <WishListCard product={product} handleCardClick={handleCardClick} />
          ))}
      </div>
      {items.length > 0 ? (
        <div>
          {/* <label>Page no.</label>
          <select
            onChange={(e) => {
              setCurrPage(Number(e.target.value));
            }}
          >
            {pages.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select> */}
          <div className="flex space-x-3 justify-center mt-5">
            <p>
              showing: {start} - {Math.min(end, maxLimit)} of {maxLimit}
            </p>
            <div>
              <button onClick={() => start > 1 && setCurrPage(currPage - 1)}>
                <CircleArrowLeft className="" />
              </button>
              <button
                onClick={() => end < maxLimit && setCurrPage(currPage + 1)}
              >
                <CircleArrowRight />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

const Page = (params) => {
  const category = params.params.category;
  // console.log("id ", id);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const router = useRouter();
  async function getProducts() {
    const url = "/api/products/";
    const res = await fetch(url);
    const data = await res.json();

    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  const [openItem, setOpenItem] = useState(null);

  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "0", max: "200" });
  const [showSaleOnly, setShowSaleOnly] = useState(false);

  const handleToggle = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((item) => item !== subcategory)
        : [...prev, subcategory]
    );
  };

  const handlePriceChange = (type, value) => {
    console.log("type:", type, "value: ", value);
    setPriceRange((prev) => ({ ...prev, [type]: value }));
  };

  const handleApplyFilters = () => {
    console.log("Selected Subcategories:", selectedSubcategories);
    console.log("Price Range:", priceRange);
    console.log("Show Sale Only:", showSaleOnly);
  };

  const handleCardClick = (sku) => {
    router.push("/products/" + sku);
  };

  return (
    <div className="bg-black text-white p-4">
      <div className="flex flex-col p-4">
        {show && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
            onClick={() => setShow(false)}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 w-4/5 h-full bg-black text-white p-4 transition-transform ease-in-out duration-300 z-50 ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <div className="flex flex-col justify-center items-center relative">
            <span
              onClick={() => setShow(!show)}
              className="fixed top-0 right-0 p-4"
            >
              X
            </span>
            <h1 className="text-xl font-bold mb-3">Filters</h1>
            <p className="text-center text-gray-400 font-light">
              Narrow down products by applying filters
            </p>
          </div>

          <div>
            <div className="space-y-4">
              {/* Subcategories Accordion */}
              <AccordionItem
                title="Subcategories"
                isOpen={openItem === "subcategories"}
                onClick={() => handleToggle("subcategories")}
              >
                <div className="space-y-2">
                  {["Electronics", "Clothing", "Home & kitchen", "Beauty"].map(
                    (subcategory) => (
                      <div
                        key={subcategory}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          id={subcategory}
                          checked={selectedSubcategories.includes(subcategory)}
                          onChange={() => handleSubcategoryChange(subcategory)}
                        />
                        <label htmlFor={subcategory}>{subcategory}</label>
                      </div>
                    )
                  )}
                </div>
              </AccordionItem>

              {/* Price Range Accordion */}
              <AccordionItem
                title="Price Range"
                isOpen={openItem === "price"}
                onClick={() => handleToggle("price")}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="min-price">Min Price</label>
                    <input
                      id="min-price"
                      type="number"
                      min="0"
                      value={priceRange.min}
                      onChange={(e) => handlePriceChange("min", e.target.value)}
                      className="w-full p-2 border rounded-md text-white bg-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="max-price">Max Price</label>
                    <input
                      id="max-price"
                      type="number"
                      min="0"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange("max", e.target.value)}
                      className="w-full p-2 border rounded-md text-white bg-black"
                    />
                  </div>
                </div>
              </AccordionItem>

              {/* Sale Accordion */}
              <AccordionItem
                title="Sale"
                isOpen={openItem === "sale"}
                onClick={() => handleToggle("sale")}
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="sale-only"
                    checked={showSaleOnly}
                    onChange={(e) => setShowSaleOnly(e.target.checked)}
                  />
                  <label htmlFor="sale-only">Show sale items only</label>
                </div>
              </AccordionItem>

              {/* Apply Filters Button */}
              <button
                onClick={handleApplyFilters}
                className="w-full py-2 bg-primary text-white rounded-md bg-slate-900"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        <button
          className="flex justify-center items-center py-2 border-[0.1vw] border-gray-100 mb-6 sm:hidden"
          onClick={() => setShow(true)}
        >
          <span>
            <Filter className="h-4 mr-2 " />
          </span>
          Filters
        </button>

        <div className="flex">
          <div className="hidden sm:block w-1/4 mr-6">
            <div className="space-y-2 mb-6 border-b-2 pb-2">
              <h2 className="font-bold text-lg">Categories</h2>
              {["Electronics", "Clothing", "Home & Kitchen", "Beauty"].map(
                (subcategory) => (
                  <div
                    key={subcategory}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      id={subcategory}
                      checked={selectedSubcategories.includes(subcategory)}
                      onChange={() => handleSubcategoryChange(subcategory)}
                    />
                    <label htmlFor={subcategory}>{subcategory}</label>
                  </div>
                )
              )}
            </div>
            <div className="mb-6 border-b-2 pb-2">
              <h2 className="font-bold text-lg">Pricing</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="min-price">Min Price</label>
                  <input
                    id="min-price"
                    type="number"
                    min="0"
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange("min", e.target.value)}
                    className="w-full p-2 border rounded-md text-white bg-black"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="max-price">Max Price</label>
                  <input
                    id="max-price"
                    type="number"
                    min="0"
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange("max", e.target.value)}
                    className="w-full p-2 border rounded-md text-white bg-black"
                  />
                </div>
              </div>
            </div>

            <div className="border-b-2 pb-2 mb-4">
              <h2 className="font-bold text-lg">Sale</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sale-only"
                  checked={showSaleOnly}
                  onChange={(e) => setShowSaleOnly(e.target.checked)}
                />
                <label htmlFor="sale-only">Show sale items only</label>
              </div>
            </div>

            <button
              onClick={handleApplyFilters}
              className="w-full py-2 bg-primary text-white rounded-md bg-slate-900"
            >
              Apply Filters
            </button>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-6">Products</h2>
            {/*<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 ">
              {products.map((product) => 
              
              { (
                <div
                  className="rounded-md overflow-hidden group bg-black hover:cursor-pointer"
                  key={card.id}
                  onClick={()=>handleCardClick(card.sku)}
                >
                  <div className=" aspect-square overflow-hidden">
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
                      <Link
                        href="#"
                        className=" shrink-0 p-2 rounded text-white border border-gray-50"
                      >
                        <Heart />
                      </Link>
                    </div>
                  </div>
                </div>
                
              ) 
              return <WishListCard product={product} handleCardClick={handleCardClick}/>;
              
              }

                
              )}
            </div>
            */}
            <PaginatedItems
              products={products}
              handleCardClick={handleCardClick}
            />
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Page;
