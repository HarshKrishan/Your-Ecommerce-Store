/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.icons8.com",
      "fakestoreapi.com",
      "dummyjson.com",
      "i.dummyjson.com",
      "cdn.dummyjson.com",
      "avatar.iran.liara.run",
    ],
  },
};

module.exports = nextConfig
