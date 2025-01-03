'use client';

import BackButton from "@/ui/back-button";
import { EmailForm } from "@/ui/login/email-form";
import { VerificationCodeForm } from "@/ui/login/verification-form";
import Image from 'next/image';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function Page() {
  // const [errorMessage, formAction, isPending] = useActionState(
  //   authenticate,
  //   undefined,
  // );
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(parseInt(searchParams.get('step') || '1', 10));

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
    router.push(`?step=${currentStep + 1}`);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      router.push(`?step=${currentStep - 1}`);
    }
    else {
      router.push('/');
    }
  };

  const [email, setEmail] = useState('');

  const handleEmail = (formData: FormData) => {
    console.log('handleEmailLogin', formData);
    setEmail(formData.get('email')?.toString() || '');
    // formAction(formData);
    // If verification code sent go to next step
    goToNextStep();
  }
  const handleVerification = (formData: FormData) => {
    console.log('handleVerification', formData);
    // Combine the digits into a single string
    // const formData = new FormData(event.currentTarget); // Create FormData from the form
    // formData.append('verificationCode', verificationCode); // Append the verification code to the FormData
    // formAction(formData);
  }

  return (
    <div className="items-center justify-items-center text-center min-h-screen p-6">
      <div className="flex justify-between items-center w-full">
      <div className="w-8">
        <BackButton onClick={goToPreviousStep}/>
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
      {currentStep === 1 ?
      <EmailForm formAction={handleEmail} email={email} setEmail={setEmail}/>
      :
      <VerificationCodeForm formAction={handleVerification} email={email}/>}
    </div>
  );
}