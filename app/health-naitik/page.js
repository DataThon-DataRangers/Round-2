"use client";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { getAuth } from "firebase/auth";

const Health = () => {
  async function hello() {
    const uid = getAuth().currentUser.uid;
    const usersRef = collection(db, "users");
    await setDoc(doc(usersRef, uid), {
      name: getAuth().currentUser.displayName,
      weight: 72,
      height: 160,
      symptoms: ["Cold", "cough"],
    });
    console.log("DOne ig");
  }

  return (
    <>
      <button onClick={hello}>Click me sir</button>
    </>
  );
};
export default Health;
