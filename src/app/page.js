"use client";
import Products from "@/components/Products";
import { auth } from "@/app/api/Auth/firebase";
import { useEffect } from "react";
import { setSignedIn, setId, setName } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

const Card = () => {
  let cards = [
    {
      id: "1",
      text: "Electronics",
      image: "./electronics.jpg",
      link: "/categories/electronics",
    },
    {
      id: "2",
      text: "Clothing",
      image: "./clothing.jpg",
      link: "/categories/clothing",
    },
    {
      id: "3",
      text: "Home & Kitchen",
      image: "./homeandkitchen.jpg",
      link: "/categories/home",
    },
    {
      id: "4",
      text: "Beauty",
      image: "./beauty.jpg",
      link: "/categories/beauty",
    },
    {
      id: "5",
      text: "Sports",
      image: "./sports.jpg",
      link: "/categories/sports",
    },
    {
      id: "6",
      text: "Books",
      image: "./books.jpg",
      link: "/categories/books",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold text-center">Shop by Category</h1>
        <p className="font-light my-3 text-gray-300">
          Browse our wide selection of products across various categories
        </p>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6 p-4 w-full md:gap-2 lg:gap-1 ">
          {cards.map((card) => (
            <div
              // className="flex justify-start items-end p-5 rounded-md h-[18vh] w-[30vw] bg-gradient-to-br from-slate-100 to-slate-500 md:w-[27vw] md:h-[16vh] lg:w-[12vw] lg:h-[25vh]"
              className="flex justify-start items-end p-5 rounded-md h-[18vh] w-[30vw] bg-cover bg-center bg-no-repeat md:w-[27vw] md:h-[16vh] lg:w-[12vw] lg:h-[25vh] cursor-pointer"
              onClick={() => router.push(`${card.link}`)}
              style={{ backgroundImage: `url(${card.image})` }}
              key={card.id}
            >
              <h2 className="font-bold backdrop-blur-sm">{card.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const FeaturedCard = () => {
  const featuredCards = [
    {
      id: "1",
      text: "Wireless Headphones",
      category: "Electronics",
      image:
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
      onSale: true,
      discountedPrice: "$99.99",
      price: "$129.99",
      link: "categories/electronics",
    },
    {
      id: "2",
      text: "Smart Watch",
      category: "Electronics",
      image:
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/thumbnail.png",
      onSale: false,
      discountedPrice: "$129.99",
      price: "$199.99",
      link: "categories/electronics",
    },
    {
      id: "3",
      text: "Premium Backpack",
      category: "Fashion",
      image:
        "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/thumbnail.png",
      onSale: true,
      discountedPrice: "$59.99",
      price: "$79.99",
      link: "categories/electronics",
    },
    {
      id: "4",
      text: "iPhone 13 Pro",
      category: "Electronics",
      image:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png",
      onSale: true,
      discountedPrice: "$1050.99",
      price: "$1099.99",
      link: "categories/electronics",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center my-8 w-full">
        <h1 className="text-5xl font-bold text-center">Featured Products</h1>
        <p className="font-light my-3 text-gray-300">
          Discover our most popular items handpicked for you
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 ">
          {featuredCards.map((card) => (
            <div className="rounded-md overflow-hidden group bg-black" key={card.id}>
              <div className=" aspect-square overflow-hidden">
                <Image
                  src={card.image}
                  alt="logo"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl truncate">{card.text}</h3>
                <p className="font-light text-gray-200">{card.category}</p>
                <div className="font-bold mt-2 flex items-center">
                  {!card.onSale ? card.price : card.discountedPrice}
                  {card.onSale && (
                    <span className="text-gray-200 pl-2 line-through font-normal">
                      {card.price}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  // console.log("auth: ",auth);
  // const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();
  // console.log("user: ",user)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
        console.log("user is signed in...");
        dispatch(setSignedIn(true));
        dispatch(setId(user.uid));
        dispatch(setName(user.phoneNumber));
      } else {
        // User is signed out
        // ...
        console.log("user signed out...");
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <div className="bg-black h-full text-white p-10 w-full flex flex-col">
        <Card />
        <FeaturedCard />
        <div className="flex flex-col justify-center items-center my-8">
          <h1 className="text-5xl font-bold">Why Choose Us?</h1>
          <p className="font-light my-3 text-gray-300">
            We offer the best shopping experience with quality products and
            excellent service
          </p>

          <div className="flex space-x-6 my-8 flex-col space-y-4 md:flex-row ">
            
            <div className="flex flex-col justify-center items-center border-[0.1px] px-4 py-8">
              <div className="rounded-full text-white p-2 bg-slate-500">
                <ShoppingBag />
              </div>

              <h2 className="font-bold text-xl p-2">Fast Shipping</h2>
              <p className="font-light mt-3 text-gray-300 text-center">
                Get your products delivered quickly and securely
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-[0.1px] px-4 py-8">
              <div className="rounded-full text-white p-2 bg-slate-500">
                <Heart />
              </div>

              <h2 className="font-bold text-xl p-2">Quality Products</h2>
              <p className="font-light mt-3 text-gray-300 text-center">
                We ensure all our products meet the highest standards
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-[0.1px] px-4 py-8">
              <div className="rounded-full text-white p-2 bg-slate-500">
                <Search />
              </div>

              <h2 className="font-bold text-xl p-2">24/7 Support</h2>
              <p className="font-light mt-3 text-gray-300 text-center">
                Our customer service team is always ready to help
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Products /> */}
    </main>
  );
}
