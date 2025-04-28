import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FeaturedComponent = () =>{

    const categories = [
      {
        id: 1,
        name: "Electronics",
        description: "Discover the latest gadgets and tech innovations",
        image: "/electronics.jpg",
        link:"electronics"
      },
      {
        id: 2,
        name: "Clothing",
        description: "Stylish apparel for every occasion",
        image: "/clothing.jpg",
        link:"clothing"
      },
      {
        id: 3,
        name: "Home & Kitchen",
        description: "Everything you need to make your house a home",
        image: "/homeandkitchen.jpg",
        link:"home-kitchen"
      },
    ];

    return (
      <div className="grid sm:grid-cols-3 gap-3 mt-4">
        {categories.map((card) => (
          <div
            // className="flex flex-col items-start justify-end p-5 rounded-md h-[27vh] w-[90vw] bg-gradient-to-br from-purple-100 to-purple-500 md:w-[27vw] md:h-[22vh] lg:w-[30vw] lg:h-[21vh] mx-auto"
            className={`flex flex-col items-start justify-end p-5 rounded-md h-[27vh] w-[90vw] md:w-[27vw] md:h-[22vh] lg:w-[30vw] lg:h-[21vh] mx-auto bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${card.image})` }}
            key={card.id}
          >
            <h2 className="font-bold text-xl">{card.name}</h2>
            <p className="text-sm text-gray-900">{card.description}</p>
            <Link
              href={"/categories/" + card.link}
              className="py-2 rounded-lg bg-white text-black px-4 mt-2"
            >
              Explore Now
            </Link>
          </div>
        ))}
      </div>
    );
}


const AllComponent = () => {
  const categories = [
    {
      id: 1,
      name: "Beauty",
      description: "Premium beauty and personal care products",
      image:"/beauty.jpg",
      link:"beauty"
    },
    {
      id: 2,
      name: "Sports",
      description: "Equipment and apparel for all your sporting needs",
      image:"/sports.jpg",
      link:"sports"
    },
    {
      id: 3,
      name: "Books",
      description: "Expand your mind with our collection of books",
      image:"/books.jpg",
      link:"books"
    },
    {
      id: 4,
      name: "Toys & Games",
      description: "Fun for all ages with our selection of toys and games",
      image:"/toysandgames.jpg",
      link:"toys-games"
    },
    {
      id: 5,
      name: "Automotive",
      description: "Parts, accessories, and tools for your vehicle",
      image:"/automotive.jpeg",
      link:"automotive"
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.link}`}
          className="group relative overflow-hidden rounded-lg bg-gray-800 shadow-sm hover:border-primary/20 hover:shadow-md transition-all"
        >
          <div className="aspect-video overflow-hidden">
            <Image
              src={category.image || "/home.jpg"}
              alt={category.name}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{category.name}</h3>
            <p className="text-sm  line-clamp-2 text-gray-400 ">
              {category.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};


const page = () => {
  return (
    <div className="bg-black text-white container px-4 py-8 md:px-6 md:py-12">
      <h1 className="font-bold text-3xl mb-8">Categories</h1>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
        <FeaturedComponent />
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">All Categories</h2>
        <AllComponent />
      </div>
    </div>
  );
}

export default page