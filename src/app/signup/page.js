'use client'
import { Lock, Mail, Phone, UserRound } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
// const page = () => {
  
//   return (
//     <div className="container flex h-screen flex-col items-center justify-center bg-black text-white">
//       <div className="mx-auto flex w-full flex-col justify-center space-y-3 max-w-lg mt-14">
//         <div className="h-full  flex flex-col items-center pb-24 ">
//           <div className="mb-6">
//             <h1 className="font-bold text-2xl text-center  ">
//               Create an account
//             </h1>
//             <p className="font-light text-gray-400">
//               Sign up for an account to start shopping
//             </p>
//           </div>

//           <div className="border-[0.5px] border-gray-700 py-4 px-6 flex flex-col space-y-4 rounded-md lg:w-3/4">
//             <h1 className="text-2xl font-bold text-center">Sign Up</h1>
//             <p className="font-light text-gray-400 text-center text-sm">
//               Enter your details to create an account
//             </p>
//             <div>
//               <label htmlFor="fullname">Full Name</label>
//               <div className="flex bg-gray-600 mt-1">
//                 <span className="p-2">
//                   <UserRound />
//                 </span>
//                 <input
//                   type="text"
//                   id="fullname"
//                   placeholder="Your Name"
//                   className="text-black p-2 w-full"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="email">Email</label>
//               <div className="flex bg-gray-600 mt-1">
//                 <span className="p-2">
//                   <Mail />
//                 </span>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Your Email"
//                   className="text-black p-2 w-full"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="phone">Phone Number</label>
//               <div className="flex bg-gray-600 mt-1">
//                 <span className="p-2">
//                   <Phone />
//                 </span>
//                 <input
//                   type="Number"
//                   id="phone"
//                   placeholder="1234567890"
//                   className="text-black p-2 w-full"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="password">Password</label>
//               <div className="flex bg-gray-600 mt-1">
//                 <span className="p-2">
//                   <Lock />
//                 </span>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="********"
//                   className="text-black p-2 w-full"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="confpassword">Confirm Password</label>
//               <div className="flex bg-gray-600 mt-1">
//                 <span className="p-2">
//                   <Lock />
//                 </span>
//                 <input
//                   type="password"
//                   id="confpassword"
//                   placeholder="********"
//                   className="text-black p-2 w-full"
//                 />
//               </div>
//             </div>

//             <Link
//               href={"#"}
//               className="text-center bg-blue-600 py-2 rounded text-black hover:bg-blue-500 cursor-pointer"
//             >
//               Continue
//             </Link>

//             <p className="font-light text-gray-400 text-center">
//               Already have an account?{" "}
//               <Link href={"/login"} className="text-blue-400">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page

const Page = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confpassword: "",
  });
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";

    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

    if (!formData.confpassword) newErrors.confpassword = "Please confirm your password.";
    else if (formData.password !== formData.confpassword) newErrors.confpassword = "Passwords do not match.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    // console.log("handle submit called!")
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // console.log("Form data submitted:", formData);
      // Proceed with form submission logic

      try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/Auth/signup`;
      console.log(url);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        // alert(result.message);
        toast.success("Signup successful! Please check your email to verify your account.");
        router.push("/login");
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
    <div className="container flex h-screen flex-col items-center justify-center bg-black text-white mx-auto">
      <div className="mx-auto flex w-full flex-col justify-center space-y-3 max-w-lg mt-14">
        <div className="h-full flex flex-col items-center pb-24 ">
          <div className="mb-6">
            <h1 className="font-bold text-2xl text-center">Create an account</h1>
            <p className="font-light text-gray-400">Sign up for an account to start shopping</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-[0.5px] border-gray-700 py-4 px-6 flex flex-col space-y-4 rounded-md lg:w-3/4"
          >
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <p className="font-light text-gray-400 text-center text-sm">
              Enter your details to create an account
            </p>

            {/* Fullname */}
            <div>
              <label htmlFor="fullname">Full Name</label>
              <div className="flex bg-gray-600 mt-1">
                <span className="p-2">
                  <UserRound />
                </span>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Your Name"
                  className="text-black p-2 w-full"
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>
              {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
            </div>

            {/* Email */}
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
                  className="text-black p-2 w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone */}
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
                  className="text-black p-2 w-full"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

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
                  className="text-black p-2 w-full"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confpassword">Confirm Password</label>
              <div className="flex bg-gray-600 mt-1">
                <span className="p-2">
                  <Lock />
                </span>
                <input
                  type="password"
                  id="confpassword"
                  placeholder="********"
                  className="text-black p-2 w-full"
                  value={formData.confpassword}
                  onChange={handleChange}
                />
              </div>
              {errors.confpassword && <p className="text-red-500 text-sm">{errors.confpassword}</p>}
            </div>

            <button
              type="submit"
              className="text-center bg-blue-600 py-2 rounded text-black hover:bg-blue-500 cursor-pointer"
            >
              Continue
            </button>

            <p className="font-light text-gray-400 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-400">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;