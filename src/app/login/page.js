"use client";
import React from "react";
import { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import {auth} from '../api/Auth/firebase';
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";

import {setSignedIn,setId} from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
export const logout = () => {
  const user =auth.currentUser;
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("signout successful, user was: ", user);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

const LoginPage = () => {
  const [number, setNumber] = useState("");
  const [otp,setotp] = useState("");
  const [user,setuser] = useState(null);
  const [showOTP,setshowOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const verifyOTP = (e) => {
    e.preventDefault();
    if(otp.length===6){
      // console.log(otp);
      let  confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        setuser(user);
        console.log(user);
        Swal.fire({
          title: "Success",
          text: "You are logged in successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        setNumber("");
        setotp("");
        setshowOTP(false);
        console.log(auth)
        router.push("/");
        dispatch(setSignedIn(true));
        dispatch(setId(user.uid));
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
        alert("Invalid OTP")
      });
    }
  }
      
  const generateCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // alert("captcha resolved");
          alert("OTP sent...");
        },
      },
      auth
    );
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    generateCaptcha();
    setshowOTP(true);
    let verifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, number, verifier)
    .then((res) => {
      
      window.confirmationResult = res;
    }).catch((err) => {
      console.log(err);
    })

  };

  return (
    <div className="flex justify-center text-center">
      <div className="border-2 p-5 shadow-md">
        <h1 className="font-bold text-2xl">Your Ecommerce Store</h1>
        <div id="recaptcha-container" className="bg-red-600 w-15 h-15"></div>

        <div className="flex flex-col justify-center ">
          <h2 className="text-2xl m-5">Log in</h2>
          <form className="flex flex-col justify-center text-center">
            {!showOTP ? (
              <div>
                <label
                  for="mobile"
                  className="block font-medium leading-6 text-gray-900 text-xl mt-5"
                >
                  Enter Your Mobile Number
                </label>
                <div class="mt-2">
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
                  for="otp"
                  className="block font-medium leading-6 text-gray-900 text-xl mt-5"
                >
                  Enter OTP
                </label>
                <div class="mt-2">
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
