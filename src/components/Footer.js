import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-6 p-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className=" sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <ul className="list-none">
            <li>
              <a href="#" className="hover:text-white">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kids
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul className="list-none">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping
              </a>
            </li>
          </ul>
        </div>
        <div className=" sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <ul className="list-none">
            <li>
              <a href="#" className="hover:text-white">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className=" sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="list-none">
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2023 Your E-commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer