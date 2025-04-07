'use client';

import BackButton from "@/ui/back-button";
import { EmailForm } from "@/ui/login/email-form";
import { VerificationCodeForm } from "@/ui/login/verification-form";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Page() {
  // const [errorMessage, formAction, isPending] = useActionState(
  //   authenticate,
  //   undefined,
  // );
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState('');

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    };
  }

  return (
    <div className="items-center justify-items-center text-center min-h-screen p-6">
      <div className="flex justify-between items-center w-full">
      <div className="w-8">
        <BackButton onClick={currentStep === 0 ? () => router.back() : previousStep}/>
      </div>
      <div className="flex-grow flex justify-center">
        <Image
          className=""
          src="/icons/matcha.png"
          alt="Next.js logo"
          width={40}
          height={19}
          priority
        />
      </div>
      </div>
      {currentStep === 0 ?
      <EmailForm email={email} setEmail={setEmail} nextStep={nextStep}/>
      :
      <VerificationCodeForm email={email}/>}
    </div>
  );
}