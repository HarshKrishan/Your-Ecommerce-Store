"use client"
import React from 'react'
import toast from 'react-hot-toast';
export default function page ({params}){
    const {token} = params;
    // console.log("params: ", token);

    const handleClick = async () => {
        try {
            
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/Auth/verifyEmail`,
                {
                    method: "POST",
                    body: JSON.stringify({ token }),
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );
    
            const result = await response.json();
            // console.log(result);
    
            if (response.ok) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }

        } catch (error) {
            console.error(error);
            toast.error("An error occurred. Please try again: ", error);
        }
    }
  return (
    <div className='text-center mx-auto w-1/3 mt-10'>
        <p className='my-10'>Please click the below button to verify your email</p>

        <button className='h-30 rounded-md bg-green-500 p-4' onClick={handleClick}>Verify Email</button>

    </div>
  )
}
