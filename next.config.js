/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.icons8.com",
      "fakestoreapi.com",
      "dummyjson.com",
      "i.dummyjson.com",
      "cdn.dummyjson.com"
    ],
  },
  
};

module.exports = nextConfig
