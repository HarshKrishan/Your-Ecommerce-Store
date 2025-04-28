// import Link from 'next/link';
// import React from 'react'

// const Hero = () => {
//   // className = "flex flex-col h-screen bg-blue-950 text-white lg:flex-row"
//   // className = "grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2"
//   return (
//     <div className = "flex flex-col h-screen bg-blue-950 text-white lg:flex-row "
//     >
//       <div className="flex-1 justify-center flex-col flex p-10">
//         <div>
//           <h1 className="text-5xl font-bold">
//             Discover Quality Products for Every Need
//           </h1>

//           <p className="text-xl font-light my-4">
//             Shop our curated collection of premium products with secure checkout
//             and fast delivery.
//           </p>
//         </div>

//         <div className="flex space-x-2">
//           <Link href={"#"} className="bg-white text-black py-2 px-4 rounded-md">
//             Show Now
//           </Link>
//           <Link href={"#"} className="bg-black text-white py-2 px-4 rounded-md">
//             Browse Categories
//           </Link>
//         </div>
//       </div>
//       <div className="flex-1 justify-center items-center p-10">
//         <div className="bg-gray-500 py-20 px-28 rounded-md">
//           <div className="py-20 px-28 bg-black rounded-md flex flex-col justify-center items-center">
//             <h1 className="text-3xl font-bold">SUMMER SALE</h1>
//             <h2 className="text-xl">Upto 50% Off</h2>
//             <Link
//               href={"#"}
//               className="bg-white text-black py-2 px-4 rounded-md my-2"
//             >
//               View Offers
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero

import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-950 text-white">
      <div className="container px-4 md:px-6">
        <div className=" grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center p-6 md:p-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Discover Quality Products for Every Need
            </h1>
            <p className="text-lg md:text-xl font-light mb-6">
              Shop our curated collection of premium products with secure
              checkout and fast delivery.
            </p>
            <div className="flex gap-2 flex-col lg:flex-row">
              <Link
                href="/products"
                className="bg-white text-black py-2 px-8 text-sm rounded-md"
              >
                Shop Now
              </Link>
              <Link
                href="/categories"
                className="bg-black text-white py-2 px-8 text-sm rounded-md"
              >
                Browse Categories
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-black/20 to-gray-100 p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-black/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-primary">
                    SUMMER SALE
                  </div>
                  <div className="mt-2 text-2xl">Up to 50% Off</div>
                  <button className="mt-4 bg-white hover:bg-white/90 rounded py-2 px-4">
                    <Link href="/products?sale=true" className="text-black">View Offers</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
