"use client"
import { collection, doc, setDoc,addDoc } from "firebase/firestore"; 
import { db } from "../firebase/firebase";
import { getAuth } from "firebase/auth";

const Health=()=>{
const uid=getAuth().currentUser.uid;
console.log(uid)
   async function hello(){
      const usersRef=collection(db,"users")
    await setDoc(doc(usersRef,uid), {
       name:"Naitik",
      height:160,
    });
    console.log("DOne ig")

   }

   return<>
   <button onClick={hello}>Click me sir</button></>
}
export default Health;