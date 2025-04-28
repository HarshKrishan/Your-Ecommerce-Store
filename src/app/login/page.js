"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../api/Auth/firebase";
// import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
// import user from "@/models/user";
import { setSignedIn, setId, setName } from "@/store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { Lock, Mail, Phone, UserRound } from "lucide-react";
import Link from "next/link";

export const logout = () => {
  // const user = auth.currentUser;
  // signOut(auth)
  //   .then(() => {
  //     // Sign-out successful.
  //     // alert("signout successful, user was: ", user);
  //     toast.success("signout successful, user was: "+ user, {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   })
  //   .catch((error) => {
  //     // An error happened.
  //     console.log(error);
  //   });
};

const LoginPage = () => {
  // const [number, setNumber] = useState("");
  // const [otp, setotp] = useState("");
  // const [user, setuser] = useState(null);
  // const [showOTP, setshowOTP] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();
  // const dispatch = useDispatch();
  // const currUser = useSelector((state) => state.user);
  const searchParams = useSearchParams()
  const redirected = searchParams.get('redirected')


  //need to correct - 
  // useEffect(()=>{
  //   console.log("redirected:",redirected)
  //   if (redirected) {
  //     toast("You need to log in to access that page.", {
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           stroke="currentColor"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //           class="lucide lucide-info-icon lucide-info"
  //         >
  //           <circle cx="12" cy="12" r="10" />
  //           <path d="M12 16v-4" />
  //           <path d="M12 8h.01" />
  //         </svg>
  //       ),
  //     });
  //   }
    
  // }, [redirected])

  const [chooseEmail, setChooseEmail] = useState(true);
  const router = useRouter();
  
  // const notify = () => {
  //   toast.success("OTP sent...", {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };
  // const addUserToDb = async () => {
  //   const res = await fetch("/api/addUser", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userId: currUser.name,
  //       wishList: [],
  //       transactions: [],
  //     }),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };
  // const verifyOTP = (e) => {
  //   e.preventDefault();
  //   if (otp.length === 6) {
  //     // console.log(otp);
  //     let confirmationResult = window.confirmationResult;
  //     confirmationResult
  //       .confirm(otp)
  //       .then((result) => {
  //         // User signed in successfully.
  //         const user = result.user;
  //         setuser(user);
  //         console.log(user);
  //         // console.log(user.phoneNumber);
  //         Swal.fire({
  //           title: "Success",
  //           text: "You are logged in successfully",
  //           icon: "success",
  //           confirmButtonText: "Ok",
  //         });
  //         setNumber("");
  //         setotp("");
  //         setshowOTP(false);
  //         console.log(auth);
  //         router.push("/");
  //         dispatch(setSignedIn(true));
  //         dispatch(setId(user.uid));
  //         dispatch(setName(user.phoneNumber));
  //         addUserToDb();
  //         // ...
  //       })
  //       .catch((error) => {
  //         // User couldn't sign in (bad verification code?)
  //         // ...
  //         console.log(error);
  //         alert("Invalid OTP");
  //       });
  //   }
  // };

  // const generateCaptcha = () => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     "recaptcha-container",
  //     {
  //       size: "invisible",
  //       callback: (response) => {
  //         // alert("OTP sent...");
  //         notify();
  //       },
  //     },
  //     auth
  //   );
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   generateCaptcha();
  //   setshowOTP(true);
  //   let verifier = window.recaptchaVerifier;
  //   signInWithPhoneNumber(auth, number, verifier)
  //     .then((res) => {
  //       console.log("###########################",res);
  //       window.confirmationResult = res;
  //     })
  //     .catch((err) => {
  //       console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$",err);
  //     });
  // };

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (chooseEmail) {
      if (!formData.email) newErrors.email = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
    } else {
      if (!formData.phone) newErrors.phone = "Phone is required.";
      else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits.";
    }

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // console.log("Logging in with:", chooseEmail ? formData.email : formData.phone, formData.password);
      try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/Auth/login`;
      // console.log(url);
      
      const data = {
        chooseEmail:chooseEmail,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      }
      
      const response = await fetch(
        url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      // console.log(result);

      if (response.ok) {
        // alert(result.message);
        toast.success("Logged in!");
        router.push("/");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again");
    }
    }
  };
  

  return (
    // <div className="flex justify-center text-center">
    //   <ToastContainer
    //     position="top-center"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="light"
    //   />
    //   <div className="border-2 p-5 shadow-md">
    //     <h1 className="font-bold text-2xl">Your Ecommerce Store</h1>
    //     <div id="recaptcha-container" className="bg-red-600 w-15 h-15"></div>

    //     <div className="flex flex-col justify-center ">
    //       <h2 className="text-2xl m-5">Log in</h2>
    //       <form className="flex flex-col justify-center text-center">
    //         {!showOTP ? (
    //           <div>
    //             <label
    //               htmlFor="mobile"
    //               className="block font-medium leading-6 text-gray-900 text-xl mt-5"
    //             >
    //               Enter Your Mobile Number
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 id="mobile"
    //                 name="mobile"
    //                 type="tel"
    //                 value={number}
    //                 autoComplete="tel-national"
    //                 required
    //                 onChange={(e) => setNumber(e.target.value)}
    //                 className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //         ) : (
    //           <div>
    //             <label
    //               htmlFor="otp"
    //               className="block font-medium leading-6 text-gray-900 text-xl mt-5"
    //             >
    //               Enter OTP
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 id="otp"
    //                 name="otp"
    //                 type="tel"
    //                 value={otp}
    //                 autoComplete="tel-national"
    //                 required
    //                 onChange={(e) => setotp(e.target.value)}
    //                 className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
    //         )}

    //         {!showOTP ? (
    //           <button
    //             className="block mt-5 rounded-md p-3 bg-black text-white active:bg-gray-200 active:text-black"
    //             onClick={handleSubmit}
    //           >
    //             Login
    //           </button>
    //         ) : (
    //           <button
    //             className="block mt-5 rounded-md p-3 bg-black text-white active:bg-gray-200 active:text-black"
    //             onClick={verifyOTP}
    //           >
    //             Verify OTP
    //           </button>
    //         )}
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="container flex h-screen flex-col items-center justify-center bg-black text-white mx-auto">
      <div className="mx-auto flex w-full flex-col justify-center space-y-3 max-w-lg mt-14 ">
        <div className="h-full flex flex-col items-center pb-24">
          <div className="mb-6">
            <h1 className="font-bold text-2xl text-center">Welcome back</h1>
            <p className="font-light text-gray-400">Sign in to your account</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-[0.5px] border-gray-700 p-4 flex flex-col space-y-4 rounded-md lg:w-3/4"
          >
            <div>
              <h1 className="text-2xl font-bold text-center">Sign In</h1>
              <p className="font-light text-gray-400 text-center text-sm">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Toggle */}
            <div className="bg-gray-800 flex p-1 rounded">
              <div
                className={`text-white flex justify-center items-center py-1 w-full rounded cursor-pointer ${
                  chooseEmail ? "bg-black" : ""
                }`}
                onClick={() => setChooseEmail(true)}
              >
                Email
              </div>
              <div
                className={`text-white flex justify-center items-center py-1 w-full rounded cursor-pointer ${
                  !chooseEmail ? "bg-black" : ""
                }`}
                onClick={() => setChooseEmail(false)}
              >
                Phone
              </div>
            </div>

            {/* Email / Phone */}
            {chooseEmail ? (
              <div>
                <label htmlFor="email">Email</label>
                <div className="flex bg-gray-600 mt-1">
                  <span className="p-2">
                    <Mail />
                  </span>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="text-white p-2 w-full bg-black border-[1px] border-gray-600"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            ) : (
              <div>
                <label htmlFor="phone">Phone Number</label>
                <div className="flex bg-gray-600 mt-1">
                  <span className="p-2">
                    <Phone />
                  </span>
                  <input
                    type="text"
                    id="phone"
                    placeholder="1234567890"
                    className="text-white p-2 w-full bg-black border-[1px] border-gray-600"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            )}

            {/* Password */}
            <div>
              <label htmlFor="password">Password</label>
              <div className="flex bg-gray-600 mt-1">
                <span className="p-2">
                  <Lock />
                </span>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="text-white p-2 w-full bg-black border-[1px] border-gray-600"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="text-center bg-blue-600 py-2 rounded text-black hover:bg-blue-500 cursor-pointer"
            >
              Sign In
            </button>

            <p className="font-light text-gray-400 text-center">
              Don't have an account?{" "}
              <Link href={"/signup"} className="text-blue-400">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
