'use client';

import Stepper from "@/ui/profile-setup/stepper";
import BackButton from "@/ui/back-button";
import { useState } from "react";
import ProfileSetupForm from "@/ui/profile-setup/profile-setup-form";
import SkipButton from "@/ui/skip-button";

export default function Page() {
	const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    gender: '',
    showGender: false,
    interests: [] as string[],
    photos: [] as string[]
  });
  const numberOfSteps = 6;

	const nextStep = () => {
    console.log(formData)
    if (currentStep < numberOfSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
	}

	const previousStep = () => {
    if (currentStep >= 1) {
      setCurrentStep(currentStep - 1);
    }
	}

	return (
		<div className="pt-10 h-screen">
			<Stepper currentStep={currentStep} numberOfSteps={numberOfSteps}/>
      <div className="w-full flex justify-between">
        <div className="mt-4 w-6 ml-4">
          <BackButton onClick={previousStep}/>
        </div>
       {currentStep === 3 &&
        <div className="mt-4 w-6 mr-4">
          <SkipButton onClick={nextStep}/>
        </div>
        }
      </div>
      <div className="items-center justify-items-center text-center">
        <ProfileSetupForm currentStep={currentStep} nextStep={nextStep} formData={formData} setFormData={setFormData}/>
      </div>
		</div>
	)
}