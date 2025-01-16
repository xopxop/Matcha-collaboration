import { useEffect, useState } from "react";
import { Button } from "@/ui/button";

interface EmailFormProps {
	email: string;
	setEmail: (email: string) => void;
  nextStep: () => void;
  }
  
export const EmailForm = ({ email, setEmail, nextStep}: EmailFormProps) => {
	const [isValid, setIsValid] = useState(false);
  
	const validateEmail = (email: string) => {
	  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  return regex.test(email);
	};

  const handleEmail = (formData: FormData) => {
    console.log('handleEmailLogin', formData);
    setEmail(formData.get('email')?.toString() || '');
    // formAction(formData);
    // If verification code sent -> go to next step
    nextStep();
  }
  
	useEffect(() => {
	  setIsValid(validateEmail(email));
	}, [email]);
  
	return (
	  <form action={handleEmail} className="space-y-3">
      <div className="w-full pt-10 p-8 sm:max-w-[640px] sm:mx-auto">
        <label className="text-4xl block font-bold text-left sm:text-center" htmlFor="email">My email is</label>
        <input
          className="my-4 w-full sm:max-w-80 border-b border-slate-700 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
          id="email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-xs font-light my-5 sm:text-center">We will send an email with a verification code.
          Message and data rates may apply. Learn what
          happens when your email changes.</p>
        <div className="w-full mt-20 mb-4">
          <Button bgColor="pink-gradient" type="submit" disabled={!isValid} shadow>continue</Button>
        </div>
        {//errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        }
      </div>
		</form>
	)
  }