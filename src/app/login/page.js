"use client";
import React from "react";
import { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { auth } from "../api/Auth/firebase";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import user from "@/models/user";
import { setSignedIn, setId, setName } from "@/store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const logout = () => {
  const user = auth.currentUser;
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      // alert("signout successful, user was: ", user);
      toast.success("signout successful, user was: "+ user, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

const LoginPage = () => {
  const [number, setNumber] = useState("");
  const [otp, setotp] = useState("");
  const [user, setuser] = useState(null);
  const [showOTP, setshowOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.user);

  const notify = () => {
    toast.success("OTP sent...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const addUserToDb = async () => {
    const res = await fetch("/api/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: currUser.name,
        wishList: [],
        transactions: [],
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  const verifyOTP = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      // console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          setuser(user);
          console.log(user);
          // console.log(user.phoneNumber);
          Swal.fire({
            title: "Success",
            text: "You are logged in successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          setNumber("");
          setotp("");
          setshowOTP(false);
          console.log(auth);
          router.push("/");
          dispatch(setSignedIn(true));
          dispatch(setId(user.uid));
          dispatch(setName(user.phoneNumber));
          addUserToDb();
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error);
          alert("Invalid OTP");
        });
    }
  };

  const generateCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // alert("OTP sent...");
          notify();
        },
      },
      auth
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateCaptcha();
    setshowOTP(true);
    let verifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, number, verifier)
      .then((res) => {
        console.log("###########################",res);
        window.confirmationResult = res;
      })
      .catch((err) => {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$",err);
      });
  };

  return (
    <div className="flex justify-center text-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="border-2 p-5 shadow-md">
        <h1 className="font-bold text-2xl">Your Ecommerce Store</h1>
        <div id="recaptcha-container" className="bg-red-600 w-15 h-15"></div>

        <div className="flex flex-col justify-center ">
          <h2 className="text-2xl m-5">Log in</h2>
          <form className="flex flex-col justify-center text-center">
            {!showOTP ? (
              <div>
                <label
                  htmlFor="mobile"
                  className="block font-medium leading-6 text-gray-900 text-xl mt-5"
                >
                  Enter Your Mobile Number
                </label>
                <div className="mt-2">
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={number}
                    autoComplete="tel-national"
                    required
                    onChange={(e) => setNumber(e.target.value)}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label
                  htmlFor="otp"
                  className="block font-medium leading-6 text-gray-900 text-xl mt-5"
                >
                  Enter OTP
                </label>
                <div className="mt-2">
                  <input
                    id="otp"
                    name="otp"
                    type="tel"
                    value={otp}
                    autoComplete="tel-national"
                    required
                    onChange={(e) => setotp(e.target.value)}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}

            {!showOTP ? (
              <button
                className="block mt-5 rounded-md p-3 bg-black text-white active:bg-gray-200 active:text-black"
                onClick={handleSubmit}
              >
                Login
              </button>
            ) : (
              <button
                className="block mt-5 rounded-md p-3 bg-black text-white active:bg-gray-200 active:text-black"
                onClick={verifyOTP}
              >
                Verify OTP
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
