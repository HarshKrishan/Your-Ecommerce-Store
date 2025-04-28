import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {

    const teamMembers = [
      {
        id: 1,
        name: "Rafael Weaver",
        image: "https://avatar.iran.liara.run/public/boy",
        position: "SDE",
      },
      {
        id: 2,
        name: "Jennie Nichols",
        image: "https://avatar.iran.liara.run/public/girl",
        position: "SDE",
      },
      {
        id: 3,
        name: "Ken Payne",
        image: "https://avatar.iran.liara.run/public/boy",
        position: "SDE",
      },
      {
        id: 4,
        name: "Nicole Hanson",
        image: "https://avatar.iran.liara.run/public/girl",
        position: "SDE",
      },
    ];
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 bg-black text-white">
      <div className="max-w-4xl md:mx-auto">
        <h1 className="font-bold text-3xl">About ShopEase</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-8 items-center">
          <div>
            <h2 className="font-semibold my-2">Our Story</h2>

            <p className="text-gray-400 mb-4">
              Founded in 2020, ShopEase was born from a simple idea: shopping
              should be easy, enjoyable, and accessible to everyone. What
              started as a small online store has grown into a comprehensive
              e-commerce platform offering thousands of quality products across
              multiple categories.
            </p>
            <p className="text-gray-400">
              Our mission is to provide customers with a seamless shopping
              experience, from browsing to checkout and beyond. We carefully
              curate our product selection to ensure that every item meets our
              high standards for quality and value.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden bg-white">
            <Image src="/shopeaselogo.png" alt="shopease" height={400} width={600} />
          </div>
        </div>
        <div className="mb-12">
          <h1 className="font-bold text-3xl my-2">Our Values</h1>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-md bg-slate-800 p-6">
              <h2>Quality</h2>
              <p className="text-gray-500">
                We never compromise on quality. Every product in our catalog is
                carefully selected and tested to ensure it meets our standards.
              </p>
            </div>
            <div className="rounded-md bg-slate-800 p-6">
              <h2>Customer Focus</h2>
              <p className="text-gray-500">
                Our customers are at the heart of everything we do. We
                continuously strive to improve our services based on your
                feedback.
              </p>
            </div>
            <div className="rounded-md bg-slate-800 p-6">
              <h2>Sustainability</h2>
              <p className="text-gray-500">
                We're committed to reducing our environmental impact through
                eco-friendly packaging and sustainable business practices.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h1>Our Team</h1>
          <p className="text-gray-400 mb-6">
            ShopEase is powered by a diverse team of passionate individuals
            dedicated to creating the best shopping experience for our
            customers. From our product curators to our customer service
            representatives, everyone plays a vital role in making ShopEase what
            it is today.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-center font-bold text-xl my-1">
                  {member.name}
                </h2>
                <p className="text-center text-gray-300">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-center font-bold text-xl">Join Our Journey</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. If
            you're passionate about e-commerce and want to be part of our
            mission, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-black p-2 w-full rounded-lg text-center sm:w-1/4"
            >
              Contact Us
            </Link>

            <Link
              href="/careers"
              className="bg-black text-white p-2 w-full rounded-lg text-center sm:w-1/4"
            >
              View Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page