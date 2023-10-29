import { NextResponse } from "next/server";
import app from "../Auth/firebase";
import {getFirestore,doc, setDoc, addDoc, collection, getDoc, getDocs} from "firebase/firestore";

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

export async function GET(req){

    const res = await getDocs(collection(database,"Users"));
    // console.log(res);
    const data = res.docs.map((doc) => doc.data());
    console.log("res",data);
    
    return NextResponse.json({ message: "This is data",res:data, status: 200 });
    // if (res.exists()) {
    //   console.log("Document data:", res.data());
    //   return NextResponse.json({ message: "User Created", status: 200 });
    // }
    // else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    //   return NextResponse.json({ message: "Not available!", status: 500 });
    // }

      
}
