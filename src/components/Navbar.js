"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/app/login/page";

const Navbar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handlesubmit = (e) => {
    if (e.key === "Enter" && query !== "") {
      const temp = query;
      setQuery("");
      router.push(`/search/${temp}`);
    }
  };

  const signOutUser = async() => {
    // const auth = getAuth();
    // signOut(auth).then(() => {
    //   // Sign-out successful.
    //   alert("user signed out successfully");
    // }).catch((error) => {
    //   alert("error signing out");
    //   // An error happened.
    // });
    await logout();
    // alert("done!");
  };

  const counter = useSelector((state) => state.counter.value);
  return (
    <>
      <div className="flex justify-center my-2 border-b-2 shadow-md py-2 mx-5">
        <div>
          {/* logo */}
          <Image
            className="mx-2 hover:cursor-pointer"
            src="/logo.png"
            width={30}
            height={30}
            alt="logo"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="hidden md:block">
          <ul className="flex">
            <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
              Electronics
              <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
                <ul className="p-2">
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/smartphones");
                    }}
                  >
                    SmartPhones
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/laptops");
                    }}
                  >
                    Laptops
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/lighting");
                    }}
                  >
                    Lighting
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/automotive");
                    }}
                  >
                    AutoMotive
                  </li>
                </ul>
              </div>
            </li>
            <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
              Mens
              <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
                <ul className="p-2">
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/mens-watches");
                    }}
                  >
                    Watches
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/mens-shoes");
                    }}
                  >
                    Shoes
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/mens-shirts");
                    }}
                  >
                    Shirts
                  </li>
                </ul>
              </div>
            </li>
            <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
              Womens
              <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
                <ul className="p-2">
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/womens-watches");
                    }}
                  >
                    Watches
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/womens-bags");
                    }}
                  >
                    Bags
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/womens-jewellery");
                    }}
                  >
                    Jewellery
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/womens-shoes");
                    }}
                  >
                    Shoes
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/womens-dresses");
                    }}
                  >
                    Dresses
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/tops");
                    }}
                  >
                    Tops
                  </li>
                </ul>
              </div>
            </li>

            <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
              Interiors
              <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
                <ul className="p-2">
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/home-decoration");
                    }}
                  >
                    Home Decoration
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/furniture");
                    }}
                  >
                    Furniture
                  </li>
                </ul>
              </div>
            </li>
            <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
              Personal Care
              <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
                <ul className="p-2">
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/fragrances");
                    }}
                  >
                    Fragrances
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/sunglasses");
                    }}
                  >
                    Sunglasses
                  </li>
                  <li
                    className="m-2 hover:font-medium"
                    onClick={() => {
                      router.push("/categories/skincare");
                    }}
                  >
                    Skin Care
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="mx-2 hover:cursor-pointer dropdown font-semibold"
              onClick={() => {
                router.push("/categories/groceries");
              }}
            >
              Groceries
            </li>
          </ul>
        </div>
        <div>
          {/* search bar */}
          <ul className="flex">
            <li className="mx-2 rounded-2xl bg-slate-50 border-2  min-w-content">
              <div className="flex ">
                <Image
                  width={28}
                  height={28}
                  className="pl-1"
                  src="https://img.icons8.com/fluency-systems-filled/48/search.png"
                  alt="search"
                  onClick={handlesubmit}
                />
                <input
                  className="border-none bg-slate-50 mx-1 focus:outline-none w-full "
                  type="text"
                  placeholder="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handlesubmit}
                />
              </div>
            </li>
            <li className="mx-2">
              <Image
                width="28"
                height="28"
                src="https://img.icons8.com/windows/32/like--v1.png"
                alt="fav"
                className="hover:cursor-pointer min-w-fit"
                onClick={() => {
                  router.push("/wishlist");
                }}
              />
            </li>
            <li className="mx-2">
              <Image
                width="28"
                height="28"
                src="https://img.icons8.com/fluency-systems-regular/48/shopping-cart--v1.png"
                alt="cart"
                className="hover:cursor-pointer min-w-min"
                onClick={() => {
                  router.push("/cart");
                }}
              />
            </li>
            <li>
              {counter === 0 ? null : (
                <span className="bg-red-500 rounded-full px-1  text-white">
                  {counter}
                </span>
              )}
            </li>
            <button className=" font-bold p-1" onClick={signOutUser}>
              LogOut
            </button>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mb-4 md:hidden">
        <ul className="flex">
          <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
            Electronics
            <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
              <ul className="p-2">
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/smartphones");
                  }}
                >
                  SmartPhones
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/laptops");
                  }}
                >
                  Laptops
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/lighting");
                  }}
                >
                  Lighting
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/automotive");
                  }}
                >
                  AutoMotive
                </li>
              </ul>
            </div>
          </li>
          <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
            Mens
            <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
              <ul className="p-2">
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/mens-watches");
                  }}
                >
                  Watches
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/mens-shoes");
                  }}
                >
                  Shoes
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/mens-shirts");
                  }}
                >
                  Shirts
                </li>
              </ul>
            </div>
          </li>
          <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
            Womens
            <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
              <ul className="p-2">
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/womens-watches");
                  }}
                >
                  Watches
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/womens-bags");
                  }}
                >
                  Bags
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/womens-jewellery");
                  }}
                >
                  Jewellery
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/womens-shoes");
                  }}
                >
                  Shoes
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/womens-dresses");
                  }}
                >
                  Dresses
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/tops");
                  }}
                >
                  Tops
                </li>
              </ul>
            </div>
          </li>
          <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
            Personal Care
            <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
              <ul className="p-2">
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/fragrances");
                  }}
                >
                  Fragrances
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/sunglasses");
                  }}
                >
                  Sunglasses
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/skincare");
                  }}
                >
                  Skin Care
                </li>
              </ul>
            </div>
          </li>
          <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
            Interiors
            <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
              <ul className="p-2">
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/home-decoration");
                  }}
                >
                  Home Decoration
                </li>
                <li
                  className="m-2 hover:font-medium"
                  onClick={() => {
                    router.push("/categories/furniture");
                  }}
                >
                  Furniture
                </li>
              </ul>
            </div>
          </li>

          <li
            className="mx-2 hover:cursor-pointer dropdown font-semibold"
            onClick={() => {
              router.push("/categories/groceries");
            }}
          >
            Groceries
          </li>
          <button className=" font-bold p-1" onClick={signOutUser}>
            LogOut
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
