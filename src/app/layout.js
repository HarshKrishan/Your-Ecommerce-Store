"use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Provider } from "react-redux";
import store from "@/store/store";
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] })
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from 'react-hot-toast'

// export const metadata = {
//   title: "Your E-commerce Store",
//   description: "A store created by nextJs",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ShopEase</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>ShopEase</title>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <div className="relative flex min-h-screen flex-col">
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            <div className="flex-1 bg-black">{children}</div>
            <Analytics />
            <SpeedInsights />
            <Footer />
          </div>
        </Provider>

        {/* <script src="https://checkout.razorpay.com/v1/checkout.js" /> */}
      </body>
    </html>
  );
}
