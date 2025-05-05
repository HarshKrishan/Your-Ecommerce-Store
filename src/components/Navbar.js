"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { setSignedIn } from "@/store/slices/userSlice";
import { auth } from "@/app/api/Auth/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  Heart,
  LogOut,
  Menu,
  Search,
  SearchIcon,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
const Navbar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const path = usePathname();
  // console.log("user in navbar: ", user);
  const handlesubmit = (e) => {
    if (e.key === "Enter" && query !== "") {
      const temp = query;
      setQuery("");
      router.push(`/search?q=${temp}`);
    }
  };

  const signOutUser = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(setSignedIn(false));
        alert("signout successful, user was: " + user.name);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  // console.log("path: ", path)
  const counter = useSelector((state) => state.counter.value);
  // return (
  //   <>
  //     <div className="flex justify-center my-2 border-b-2 shadow-md py-2 mx-5">
  //       <div>
  //         {/* logo */}
  //         <Image
  //           className="mx-2 hover:cursor-pointer"
  //           src="/logo.png"
  //           width={30}
  //           height={30}
  //           alt="logo"
  //           onClick={() => router.push("/")}
  //         />
  //       </div>

  //       <div className="hidden md:block">
  //         <ul className="flex">
  //           <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
  //             Electronics
  //             <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
  //               <ul className="p-2">
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/smartphones");
  //                   }}
  //                 >
  //                   SmartPhones
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/laptops");
  //                   }}
  //                 >
  //                   Laptops
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/lighting");
  //                   }}
  //                 >
  //                   Lighting
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/automotive");
  //                   }}
  //                 >
  //                   AutoMotive
  //                 </li>
  //               </ul>
  //             </div>
  //           </li>
  //           <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
  //             Mens
  //             <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
  //               <ul className="p-2">
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/mens-watches");
  //                   }}
  //                 >
  //                   Watches
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/mens-shoes");
  //                   }}
  //                 >
  //                   Shoes
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/mens-shirts");
  //                   }}
  //                 >
  //                   Shirts
  //                 </li>
  //               </ul>
  //             </div>
  //           </li>
  //           <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
  //             Womens
  //             <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
  //               <ul className="p-2">
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/womens-watches");
  //                   }}
  //                 >
  //                   Watches
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/womens-bags");
  //                   }}
  //                 >
  //                   Bags
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/womens-jewellery");
  //                   }}
  //                 >
  //                   Jewellery
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/womens-shoes");
  //                   }}
  //                 >
  //                   Shoes
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/womens-dresses");
  //                   }}
  //                 >
  //                   Dresses
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/tops");
  //                   }}
  //                 >
  //                   Tops
  //                 </li>
  //               </ul>
  //             </div>
  //           </li>

  //           <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
  //             Interiors
  //             <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
  //               <ul className="p-2">
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/home-decoration");
  //                   }}
  //                 >
  //                   Home Decoration
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/furniture");
  //                   }}
  //                 >
  //                   Furniture
  //                 </li>
  //               </ul>
  //             </div>
  //           </li>
  //           <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
  //             Personal Care
  //             <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
  //               <ul className="p-2">
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/fragrances");
  //                   }}
  //                 >
  //                   Fragrances
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/sunglasses");
  //                   }}
  //                 >
  //                   Sunglasses
  //                 </li>
  //                 <li
  //                   className="m-2 hover:font-medium"
  //                   onClick={() => {
  //                     router.push("/categories/skincare");
  //                   }}
  //                 >
  //                   Skin Care
  //                 </li>
  //               </ul>
  //             </div>
  //           </li>
  //           <li
  //             className="mx-2 hover:cursor-pointer dropdown font-semibold"
  //             onClick={() => {
  //               router.push("/categories/groceries");
  //             }}
  //           >
  //             Groceries
  //           </li>
  //         </ul>
  //       </div>
  //       <div>
  //         {/* search bar */}
  //         <ul className="flex">
  //           <li className="mx-2 rounded-2xl bg-slate-50 border-2  min-w-content">
  //             <div className="flex ">
  //               <Image
  //                 width={28}
  //                 height={28}
  //                 className="pl-1"
  //                 src="https://img.icons8.com/fluency-systems-filled/48/search.png"
  //                 alt="search"
  //                 onClick={handlesubmit}
  //               />
  //               <input
  //                 className="border-none bg-slate-50 mx-1 focus:outline-none w-full "
  //                 type="text"
  //                 placeholder="search"
  //                 value={query}
  //                 onChange={(e) => setQuery(e.target.value)}
  //                 onKeyDown={handlesubmit}
  //               />
  //             </div>
  //           </li>
  //           <li className="mx-2">
  //             <Image
  //               width="28"
  //               height="28"
  //               src="https://img.icons8.com/windows/32/like--v1.png"
  //               alt="fav"
  //               className="hover:cursor-pointer min-w-fit"
  //               onClick={() => {
  //                 router.push("/wishlist");
  //               }}
  //             />
  //           </li>
  //           <li className="mx-2">
  //             <Image
  //               width="28"
  //               height="28"
  //               src="https://img.icons8.com/fluency-systems-regular/48/shopping-cart--v1.png"
  //               alt="cart"
  //               className="hover:cursor-pointer min-w-min"
  //               onClick={() => {
  //                 router.push("/cart");
  //               }}
  //             />
  //           </li>
  //           <li>
  //             {counter === 0 ? null : (
  //               <span className="bg-red-500 rounded-full px-1  text-white">
  //                 {counter}
  //               </span>
  //             )}
  //           </li>
  //           {user.isSignedIn ? (
  //             <button className=" font-bold p-1" onClick={signOutUser}>
  //               LogOut
  //             </button>
  //           ) : (
  //             <button className=" font-bold p-1" onClick={()=>{
  //               router.push("/login")
  //             }}>
  //               LogIn
  //             </button>
  //           )}
  //         </ul>
  //       </div>
  //     </div>
  //     <div className="flex justify-center mb-4 md:hidden ">
  //       <ul className="flex flex-wrap">
  //         <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
  //           Electronics
  //           <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
  //             <ul className="p-2">
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/smartphones");
  //                 }}
  //               >
  //                 SmartPhones
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/laptops");
  //                 }}
  //               >
  //                 Laptops
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/lighting");
  //                 }}
  //               >
  //                 Lighting
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/automotive");
  //                 }}
  //               >
  //                 AutoMotive
  //               </li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
  //           Mens
  //           <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
  //             <ul className="p-2">
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/mens-watches");
  //                 }}
  //               >
  //                 Watches
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/mens-shoes");
  //                 }}
  //               >
  //                 Shoes
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/mens-shirts");
  //                 }}
  //               >
  //                 Shirts
  //               </li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
  //           Womens
  //           <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
  //             <ul className="p-2">
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/womens-watches");
  //                 }}
  //               >
  //                 Watches
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/womens-bags");
  //                 }}
  //               >
  //                 Bags
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/womens-jewellery");
  //                 }}
  //               >
  //                 Jewellery
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/womens-shoes");
  //                 }}
  //               >
  //                 Shoes
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/womens-dresses");
  //                 }}
  //               >
  //                 Dresses
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/tops");
  //                 }}
  //               >
  //                 Tops
  //               </li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
  //           Personal Care
  //           <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
  //             <ul className="p-2">
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/fragrances");
  //                 }}
  //               >
  //                 Fragrances
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/sunglasses");
  //                 }}
  //               >
  //                 Sunglasses
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/skincare");
  //                 }}
  //               >
  //                 Skin Care
  //               </li>
  //             </ul>
  //           </div>
  //         </li>
  //         <li className="mx-2 hover:cursor-pointer dropdown font-semibold">
  //           Interiors
  //           <div className="hidden dropdown-menu absolute z-10 bg-white font-light">
  //             <ul className="p-2">
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/home-decoration");
  //                 }}
  //               >
  //                 Home Decoration
  //               </li>
  //               <li
  //                 className="m-2 hover:font-medium"
  //                 onClick={() => {
  //                   router.push("/categories/furniture");
  //                 }}
  //               >
  //                 Furniture
  //               </li>
  //             </ul>
  //           </div>
  //         </li>

  //         <li
  //           className="mx-2 hover:cursor-pointer dropdown font-semibold"
  //           onClick={() => {
  //             router.push("/categories/groceries");
  //           }}
  //         >
  //           Groceries
  //         </li>
  //       </ul>
  //     </div>
  //   </>
  // );

  const [user, setUser] = useState();

  const getUserDetails = async () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/me`;
    const res = await fetch(url, {
      method: "POST",
    });

    const data = await res.json();
    console.log("data: ", data);
    if (res.ok) {
      setUser(data.data);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, [path]);

  const logOutUser = async () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/Auth/logout`;
    const res = await fetch(url, {
      method: "POST",
    });

    if (res.ok) {
      toast.success("Logging out...");
      router.push("/login");
    }
  };

  
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    // <div className="bg-black text-white  flex justify-between py-5 px-4">
    //   <div className="flex lg:space-x-4 justify-start items-center flex-1">
    //     <Menu className="md:hidden cursor-pointer h-4" />
    //     <div className="absolute z-20 h-screen bg-black inset-0 backdrop-blur-lg bg-black/10 ">
    //       <div className="w-3/4 relative bg-black h-screen inset-0 p-4">
    //         <div className="absolute  right-2 top-2">X</div>
    //         <ul className="space-y-3">
    //           <li className="text-white">Home</li>
    //           <li>Products</li>
    //           <li>Categories</li>
    //           <li>About</li>
    //           <li>Contact</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <h1 className="font-bold text-xl sm:mr-3">ShopEase</h1>
    //     <ul className="flex lg:space-x-5 hidden md:inline-flex sm:space-x-4">
    //       <li>
    //         <Link
    //           href={"/"}
    //           className={`${path == "/" ? "text-blue-400" : "text-white"}`}
    //         >
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           href={"/products"}
    //           className={`${
    //             path.startsWith("/products") ? "text-blue-400" : "text-white"
    //           }`}
    //         >
    //           Products
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           href={"/categories"}
    //           className={`${
    //             path.startsWith("/categories") ? "text-blue-400" : "text-white"
    //           }`}
    //         >
    //           Categories
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           href={"/about"}
    //           className={`${path == "/about" ? "text-blue-400" : "text-white"}`}
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           href={"/contact"}
    //           className={`${
    //             path == "/contact" ? "text-blue-400" : "text-white"
    //           }`}
    //         >
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="w-2/5  md:w-1/5 md:pr-6">
    //     <ul className="flex lg:space-x-4 items-center justify-around text-base">
    //       <li className="flex">
    //         <input className="rounded-md bg-gray-800 hidden"></input>
    //         <span className="p-1">
    //           <Search className="h-5" />
    //         </span>
    //       </li>
    //       <li className="cursor-pointer">
    //         <Heart className="h-5" />
    //       </li>
    //       <li className="cursor-pointer">
    //         <ShoppingCart className="h-5" />
    //       </li>
    //       <li className="hover:bg-gray-800 rounded px-2 py-2 relative">
    //         {user ? (
    //           <UserRound
    //             onClick={() => setShow(!show)}
    //             className="cursor-pointer"
    //           ></UserRound>
    //         ) : (
    //           <Link href="/login">Login</Link>
    //         )}
    //       </li>
    //     </ul>
    //     <div
    //       className={`bg-black text-white absolute right-10 w-32 top-18 flex flex-col justify-center text-center rounded shadow-md ${
    //         show ? "block" : "hidden"
    //       }`}
    //     >
    //       <h2 className="font-bold border-b-[0.5px] border-gray-700 p-1">
    //         My Account
    //       </h2>
    //       <div className="text-left pl-4">
    //         <ul className="space-y-1">
    //           <li className="cursor-pointer">
    //             <Link href={"/profile"}>Profile</Link>
    //           </li>
    //           <li className="cursor-pointer">
    //             <Link href={"/orders"}>Orders</Link>
    //           </li>
    //           <li className="cursor-pointer">
    //             <Link href={"/Wishlist"}>Wishlist</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <button
    //         className="font-bold border-t-[0.5px] border-gray-700 p-1 flex  justify-center"
    //         onClick={() => logOutUser()}
    //       >
    //         <span className="mr-2 flex justify-center items-center">
    //           <LogOut className="w-5 h-5"></LogOut>
    //         </span>
    //         Logout
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="bg-black text-white flex justify-between py-5 px-4 relative">
        {/* Sidebar Overlay (conditionally render this based on state if needed) */}
        {showNavbar && (
          <div
            className={`absolute z-20 h-screen inset-0 backdrop-blur-lg bg-black/30 ${
              showNavbar ? "block" : "hidden"
            }`}
          >
            <div className="w-3/4 relative bg-black h-full p-4">
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setShowNavbar(!showNavbar)}
              >
                X
              </div>
              <ul className="space-y-3">
                <li className="text-white">Home</li>
                <li>Products</li>
                <li>Categories</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        )}

        {/* Navbar Left */}
        <div className="flex lg:space-x-4 justify-start items-center ">
          <Menu
            className="md:hidden cursor-pointer h-4"
            onClick={() => setShowNavbar(true)}
          />
          <h1 className="font-bold text-xl sm:mr-3 font-logo tracking-wider">SHOPEASE</h1>
          <ul className="flex lg:space-x-5 hidden md:inline-flex sm:space-x-4">
            <li>
              <Link
                href="/"
                className={path === "/" ? "text-blue-400" : "text-white"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={
                  path.startsWith("/products") ? "text-blue-400" : "text-white"
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className={
                  path.startsWith("/categories")
                    ? "text-blue-400"
                    : "text-white"
                }
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={path === "/about" ? "text-blue-400" : "text-white"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={path === "/contact" ? "text-blue-400" : "text-white"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar Right */}
        <div className="w-2/5 md:w-2/5 md:pr-6">
          <ul className="flex space-x-6 justify-end items-center text-base">
            {showSearchBar ? (
              <div className="bg-gray-800 flex space-x-1">
                <input
                  className={`rounded-md bg-gray-800 p-1 ${
                    showSearchBar ? "lg:block" : "hidden"
                  }`}
                  placeholder="Search Products..."
                  value={query}
                  onChange={(e)=>setQuery(e.target.value)}
                  onKeyDown={handlesubmit}
                />
                <button onClick={() => setShowSearchBar(false)} className="p-1">
                  X
                </button>
              </div>
            ) : (
              <li className="flex hidden lg:block">
                <span
                  className=" cursor-pointer"
                  onClick={() => setShowSearchBar(!showSearchBar)}
                >
                  <Search className="h-5" />
                </span>
              </li>
            )}

            <li className="cursor-pointer hover:bg-gray-800 rounded p-2">
              <Link
                href="/wishlist"
                className={
                  path === "/wishlist" ? "text-blue-400" : "text-white"
                }
              >
                <Heart className="h-5" />
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-gray-800 rounded p-2">
              <Link
                href="/cart"
                className={path === "/cart" ? "text-blue-400" : "text-white"}
              >
                <ShoppingCart className="h-5" />
              </Link>
            </li>
            <li className="hover:bg-gray-800 rounded p-2 relative">
              {user ? (
                <UserRound
                  onClick={() => setShow(!show)}
                  className="cursor-pointer"
                />
              ) : (
                <Link href="/login">Login</Link>
              )}
            </li>
          </ul>

          {/* User Dropdown */}
          <div
            className={`bg-black text-white absolute right-10 w-32 top-18 flex flex-col justify-center text-center rounded shadow-md ${
              show ? "block" : "hidden"
            }`}
          >
            <h2 className="font-bold border-b-[0.5px] border-gray-700 p-1">
              My Account
            </h2>
            <div className="text-left pl-4">
              <ul className="space-y-1">
                <li className="cursor-pointer">
                  <Link href="/profile">Profile</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/orders">Orders</Link>
                </li>
              </ul>
            </div>
            <button
              className="font-bold border-t-[0.5px] border-gray-700 p-1 flex justify-center"
              onClick={() => logOutUser()}
            >
              <span className="mr-2 flex justify-center items-center">
                <LogOut className="w-5 h-5" />
              </span>
              Logout
            </button>
          </div>
        </div>
      </div>
      {/* need to be done ... search bar for mobile view */}
      <div className="lg:hidden  bg-black px-2">
        <div className="flex rounded-full bg-gray-400 p-2 space-x-3">
          <SearchIcon />
          <input
            type="text"
            className="w-full bg-gray-400 focus:border-white"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
