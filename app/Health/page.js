"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button-health";
import Link from "next/link";
import { useRef } from "react";
import { getAuth } from "@firebase/auth";
import { Input } from "@/components/ui/input";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  collection,
  getDoc,
  setDoc,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { db } from "../firebase/firebase";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";

export default function Fact() {
  const ageRef = useRef(null);
  const heightRef = useRef(null);
  const weightRef = useRef(null);
  const dietPlanRef = useRef(null);
  const symptomsRef = useRef(null);
  const drasticChangeRef = useRef(null);
  const allergiesRef = useRef(null);
  const medicinePreferenceRef = useRef(null);
  const medicalHistoryRef = useRef(null);
  const treatmentHistoryRef = useRef(null);

  const handleSubmit = () => {
    const age = ageRef.current.value;
    const height = heightRef.current.value;
    const weight = weightRef.current.value;
    const dietPlan = dietPlanRef.current.value;
    const symptoms = symptomsRef.current.value;
    const drasticChange = drasticChangeRef.current.value;
    const allergies = allergiesRef.current.value;
    const medicinePreference = medicinePreferenceRef.current.value;
    const medicalHistory = medicalHistoryRef.current.value;
    const treatmentHistory = treatmentHistoryRef.current.value;

    console.log("Form data:", {
      age,
      height,
      weight,
      dietPlan,
      symptoms,
      drasticChange,
      allergies,
      medicinePreference,
      medicalHistory,
      treatmentHistory,
    });
    async function hello() {
      const uid = getAuth().currentUser.uid;
      const usersRef = collection(db, "users");
      await updateDoc(doc(usersRef, uid), {
        name: getAuth().currentUser.displayName,
        age,
        height,
        weight,
        dietPlan,
        symptoms,
        drasticChange,
        allergies,
        medicinePreference,
        medicalHistory,
        treatmentHistory,
      });

      console.log("DOne ig");
    }
    hello();
  };
  return (
    <div className="bg-background text-foreground flex gap-10 flex-col min-h-screen w-full max-w-2xl justify-center items-start mx-auto py-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-32">
        Input You Details To Proceed
      </h1>
      <div className="grid grid-cols-1 w-full max-w-sm place-content-start gap-10">
        <div>
          <Label htmlFor="age">Age</Label>
          <Input type="text" id="age" placeholder="Age" ref={ageRef} />
        </div>

        <div>
          <Label htmlFor="height">Height</Label>
          <Input type="text" id="height" placeholder="Height" ref={heightRef} />
        </div>

        <div>
          <Label htmlFor="weight">Weight</Label>
          <Input type="text" id="weight" placeholder="Weight" ref={weightRef} />
        </div>

        <div>
          <Label htmlFor="dietPlan">Diet Plan</Label>
          <Input
            type="text"
            id="dietPlan"
            placeholder="Diet Plan"
            ref={dietPlanRef}
          />
        </div>

        <div>
          <Label htmlFor="symptoms">Symptoms</Label>
          <Input
            type="text"
            id="symptoms"
            placeholder="Symptoms"
            ref={symptomsRef}
          />
        </div>

        <div>
          <Label htmlFor="drasticChange">Any drastic change in life</Label>
          <Input
            type="text"
            id="drasticChange"
            placeholder="Drastic Change"
            ref={drasticChangeRef}
          />
        </div>

        <div>
          <Label htmlFor="allergies">Allergies</Label>
          <Input
            type="text"
            id="allergies"
            placeholder="Allergies"
            ref={allergiesRef}
          />
        </div>

        <div>
          <Label htmlFor="medicinePreference">Medicine Preference</Label>
          <Input
            type="text"
            id="medicinePreference"
            placeholder="Medicine Preference"
            ref={medicinePreferenceRef}
          />
        </div>

        <div>
          <Label htmlFor="medicalHistory">Medical History</Label>
          <Input
            type="text"
            id="medicalHistory"
            placeholder="Medical History"
            ref={medicalHistoryRef}
          />
        </div>

        <div>
          <Label htmlFor="treatmentHistory">Treatment History</Label>
          <Input
            type="text"
            id="treatmentHistory"
            placeholder="Treatment History"
            ref={treatmentHistoryRef}
          />
        </div>
        <Button size="lg" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
