import { useEffect, useState } from "react";
import { Button } from "@/ui/button";

interface EmailFormProps {
	formAction: (formData: FormData) => void;
	email: string;
	setEmail: (email: string) => void;
  }
  
export const EmailForm = ({formAction, email, setEmail}: EmailFormProps) => {
	const [isValid, setIsValid] = useState(false);
  
	const validateEmail = (email: string) => {
	  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  return regex.test(email);
	};
  
	useEffect(() => {
	  setIsValid(validateEmail(email));
	}, [email]);
  
	return (
	  <form action={formAction} className="space-y-3">
      <div className="w-full pt-10 p-8 sm:max-w-[640px] sm:mx-auto">
        <h1 className="text-4xl font-bold text-left sm:text-center">My email is</h1>
        <input
          className="my-4 w-full sm:max-w-80 rounded-md border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
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