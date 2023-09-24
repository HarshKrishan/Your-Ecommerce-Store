import { NextResponse } from "next/server";
import app from "../Auth/firebase";
import {getFirestore,doc, setDoc, addDoc, collection} from "firebase/firestore";

const database = getFirestore(app);
// const Users = database.collection("users");

export async function POST(req){
    // console.log(req);
    try {
      const reqbody = await req.json();
        console.log("request",reqbody);
    //   console.log(email, password);
        if(!reqbody.email || !reqbody.password){
            return NextResponse.json({ message: "Please fill all the fields" }, { status: 400 });
        }
        const { email, password } = reqbody;
      const res = await addDoc(collection(database, "Users"), {
        email: email,
        password: password,
        createdAt: new Date().getTime(),
      });

      return NextResponse.json({ message: "User Created",status: 200 });
    } catch (error) {
      console.log("error", error);
      return NextResponse.json({ error: error, status: 500 });
    }


    
    
}