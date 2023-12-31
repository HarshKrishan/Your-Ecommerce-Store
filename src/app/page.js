"use client"
import Products from '@/components/Products'
import {auth} from '@/app/api/Auth/firebase'
import Image from 'next/image'
import { useEffect } from 'react'
import { setSignedIn, setId, setName } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  // console.log("auth: ",auth);
  // const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();
  // console.log("user: ",user)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
        console.log("user is signed in...");
        dispatch(setSignedIn(true));
        dispatch(setId(user.uid));
        dispatch(setName(user.phoneNumber));
      } else {
        // User is signed out
        // ...
        console.log("user signed out...");
      }
    }
    );
  }
  , []);

  return (
    <div className=''>
      <div className=''>
        <Image className="mx-auto" src="/home.jpg" width={1000} height={1000} alt="logo" />
      </div>
      <Products />
    </div>
  )
}
