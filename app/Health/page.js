import Image from "next/image";
import { Button } from "@/components/ui/button-health";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { GoogleGenerativeAI } from "@google/generative-ai";
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
	return (
		<div className="bg-background text-foreground flex gap-10 flex-col min-h-screen w-full max-w-2xl justify-center items-start mx-auto py-10">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-32">
				Input You Details To Proceed
			</h1>
			<div className="grid grid-cols-1 w-full max-w-sm place-content-start gap-10">
				<div>
					<Label htmlFor="age">Age</Label>
					<Input type="text" id="age" placeholder="Age" />
				</div>

				<div>
					<Label htmlFor="height">Height</Label>
					<Input type="text" id="height" placeholder="Height" />
				</div>

				<div>
					<Label htmlFor="weight">Weight</Label>
					<Input type="text" id="weight" placeholder="Weight" />
				</div>

				<div>
					<Label htmlFor="dietPlan">Diet Plan</Label>
					<Input type="text" id="dietPlan" placeholder="Diet Plan" />
				</div>

				<div>
					<Label htmlFor="symptoms">Symptoms</Label>
					<Input type="text" id="symptoms" placeholder="Symptoms" />
				</div>

				<div>
					<Label htmlFor="drasticChange">
						Any drastic change in life
					</Label>
					<Input
						type="text"
						id="drasticChange"
						placeholder="Drastic Change"
					/>
				</div>

				<div>
					<Label htmlFor="allergies">Allergies</Label>
					<Input type="text" id="allergies" placeholder="Allergies" />
				</div>

				<div>
					<Label htmlFor="medicinePreference">
						Medicine Preference
					</Label>
					<Input
						type="text"
						id="medicinePreference"
						placeholder="Medicine Preference"
					/>
				</div>

				<div>
					<Label htmlFor="medicalHistory">Medical History</Label>
					<Input
						type="text"
						id="medicalHistory"
						placeholder="Medical History"
					/>
				</div>

				<div>
					<Label htmlFor="treatmentHistory">Treatment History</Label>
					<Input
						type="text"
						id="treatmentHistory"
						placeholder="Treatment History"
					/>
				</div>
				<Button size="lg">Submit</Button>
			</div>
		</div>
	);
}
