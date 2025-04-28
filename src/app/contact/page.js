import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { LocateIcon, Mail, MapPin, Phone, Send } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What are your shipping options?",
    answer:
      "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and free shipping on orders over $100",
  },
  {
    id: 2,
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be in original condition with tags attached.",
  },
  {
    id: 3,
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.",
  },
  {
    id: 4,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location.",
  },
];
const page = () => {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 bg-black text-white">
      <div className="max-w-4xl md:mx-auto">
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-8 items-center">
          <div>
            <h2 className="font-semibold my-2 text-xl">Get in Touch</h2>

            <p className="text-gray-400 mb-4">
              Have a question, feedback, or need assistance? We're here to help.
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>
            <div className="space-y-6">
              <div className="flex space-x-3 items-start">
                <div className="bg-blue-800 rounded-full text-blue-400 p-2">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold ">Email</h2>
                  <p className="text-gray-400 text-sm">support@shopease.com</p>
                </div>
              </div>
              <div className="flex space-x-3 items-start">
                <div className="bg-blue-800 rounded-full text-blue-400 p-2">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold ">Phone</h2>
                  <p className="text-gray-400 text-sm">+91 9876543210</p>
                </div>
              </div>
              <div className="flex space-x-3 items-start">
                <div className="bg-blue-800 rounded-full text-blue-400 p-2">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold ">Address</h2>
                  <p className="text-gray-400 text-sm">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="font-bold mb-2">Business Hours</h2>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">Monday - Friday:</p>
                  <p className="text-gray-400">9:00 AM - 6:00 PM</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">Saturday:</p>
                  <p className="text-gray-400">10:00 AM - 4:00 PM</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400">Sunday:</p>
                  <p className="text-gray-400">Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border-[0.5px] border-gray-500 p-6">
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <p className="text-sm text-gray-400 mb-5">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <div className="space-y-4 mb-4">
              <div className="flex flex-col">
                <label className="font-bold">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-md p-2 text-white bg-black border-[0.3px] border-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-md p-2 text-white bg-black border-[0.3px] border-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Subject</label>
                <input
                  type="text"
                  placeholder="Subject of your message"
                  className="rounded-md p-2 text-white bg-black border-[0.3px] border-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message"
                  className="rounded-md p-2 text-white bg-black border-[0.3px] border-gray-700"
                />
              </div>
            </div>
            <button className="bg-blue-500 text-center py-2 w-full rounded-md text-black">
              <span className="flex items-center justify-center">
                <Send className="w-4 h-4 mr-2"></Send>
                Send Message
              </span>
            </button>
          </div>
        </div>
        <div className="mb-12">
          <h1 className="font-bold text-3xl my-3">
            Frequently Asked Questions
          </h1>
          <div className="grid sm:grid-cols-2 gap-6">
            {faqs.map((faq)=>(
              <div key={faq.id}>
                <h3 className='font-bold'>{faq.question}</h3>
                <p className='text-gray-400 text-normal'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page