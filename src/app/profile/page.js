"use client";
import { LogOut, Mail, MapPin, Phone, Save, User, User2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [chooseProfile, setChooseProfile] = useState(true);
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="rounded-full overflow-hidden w-32 h-32 mx-auto">
              <Image
                src="https://avatar.iran.liara.run/public/boy"
                alt="profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-white text-center my-2">John Doe</h2>
            <p className="text-white text-center text-sm">
              john.doe@example.com
            </p>
          </div>
          <div className="space-y-1">
            <ul className="text-white px-2 flex flex-col space-y-2 w-full">
              <li className="flex space-x-4 p-2">
                <span>
                  <User></User>
                </span>
                Profile
              </li>
              <li className="flex space-x-2 p-2">
                <span></span>Orders
              </li>
              <li className="flex space-x-2 p-2">
                <span>
                  <MapPin></MapPin>
                </span>
                Addresses
              </li>
              <li className="flex space-x-2 text-red-500 p-2">
                <span>
                  <LogOut></LogOut>
                </span>
                Logout
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col text-white my-8 flex-grow">
          <h1 className="text-2xl font-bold">My Account</h1>

          <div className="bg-gray-800 flex p-1 rounded my-4 max-w-xl">
            <div
              className={`text-white flex justify-center items-center py-1 w-full rounded cursor-pointer ${
                chooseProfile ? "bg-black" : ""
              }`}
              onClick={() => setChooseProfile(true)}
            >
              Profile
            </div>
            <div
              className={`text-white flex justify-center items-center py-1 w-full rounded cursor-pointer ${
                !chooseProfile ? "bg-black" : ""
              }`}
              onClick={() => setChooseProfile(false)}
            >
              Security
            </div>
          </div>

          {chooseProfile ? (
            <div className="rounded-lg border-[0.5px] border-gray-500 p-6 w-full">
              <h2 className="text-2xl font-bold">Profile Information</h2>
              <p className="text-sm text-gray-400 mb-5">
                Update your personal information and contact details
              </p>
              <div className="space-y-4 mb-4">
                <div className="flex flex-col">
                  <label className="font-bold">Full Name</label>
                  <div className="flex bg-gray-600 mt-1">
                    <span className="p-2">
                      <User2 />
                    </span>
                    <input
                      type="text"
                      id="text"
                      placeholder="Your Name"
                      className="text-white p-2 w-full bg-black border-[1px] border-gray-600"
                      value={"John Doe"}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold">Email</label>
                  <div className="flex bg-gray-600 mt-1">
                    <span className="p-2">
                      <Mail />
                    </span>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="text-white p-2 w-full bg-black border-[1px] border-gray-600"
                      value={"john.doe@example.com"}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold">Phone</label>
                  <div className="flex bg-gray-600 mt-1">
                    <span className="p-2">
                      <Phone />
                    </span>
                    <input
                      type="Number"
                      id="phone"
                      placeholder="9876543210"
                      className="text-white p-2 w-full bg-black border-[1px] border-gray-600"
                      value={"9876543210"}
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-bold">Addresses</label>
                  <div className="flex bg-gray-600 mt-1">
                    <span className="p-2">
                      <MapPin />
                    </span>
                    <input
                      type="text"
                      id="text"
                      placeholder="Your Address"
                      className="text-white p-2 w-full bg-black border-[1px] border-gray-600"
                      value={"Delhi, India"}
                    />
                  </div>
                </div>
              </div>
              <button className="bg-blue-500 text-center py-2 w-full rounded-md text-black">
                <span className="flex items-center justify-center">
                  <Save className="w-4 h-4 mr-2"></Save>
                  Save Changes
                </span>
              </button>
            </div>
          ) : (
            <div className="rounded-lg border-[0.5px] border-gray-500 p-6">
              <h2 className="text-2xl font-bold">Change Password</h2>
              <p className="text-sm text-gray-400 mb-5">
                Update your password to keep your account secure
              </p>
              <div className="space-y-4 mb-4">
                <div className="flex flex-col">
                  <label className="font-bold">Current Password</label>
                  <input
                    type="password"
                    className="rounded-md p-2 text-white bg-black border-[0.3px] border-gray-700"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold">New Password</label>
                  <input
                    type="password"
                    className="rounded-md p-2 text-white bg-black border-[0.3px] border-gray-700"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold">Confirm New Password</label>
                  <input
                    type="password"
                    className="rounded-md p-2 text-white bg-black border-[0.3px] border-gray-700"
                  />
                </div>
              </div>
              <button className="bg-blue-500 text-center py-2 w-full rounded-md text-black">
                Change Password
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
