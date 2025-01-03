import { useEffect, useState } from "react";
import { Button } from "@/ui/button";

interface VerificationCodeFormProps {
	formAction: (formData: FormData) => void;
	email: string;
  }
  
export const VerificationCodeForm = ({formAction, email}: VerificationCodeFormProps) => {
	const [code, setCode] = useState(['', '', '', '', '', '']);
	const [isComplete, setIsComplete] = useState(false);
	const [showError, setShowError] = useState(false);
  
	const handleChange = (index: number, value: string) => {
	  // Update the specific index with the new value
	  const newCode = [...code];
	  newCode[index] = value.replace(/\D/g, ''); // Allow only digits
	  console.log(newCode[index] === '')
	  setCode(newCode);
  
	  if (newCode[index] === '') {
		  setShowError(true)
	  }
	  else if (value && index < 5) {
      const nextInput = document.getElementById(`digit-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
	  }
	};
  
	const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
	  // Move to the previous input on backspace
	  if (event.key === 'Backspace' && !code[index] && index > 0) {
		  const prevInput = document.getElementById(`digit-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
	  }
	};
  
	useEffect(() => {
	  setIsComplete(code.every((digit) => digit !== '')); // Check if all inputs have a value
	}, [code]);
  
	return (
	  <form action={formAction} className="space-y-3">
      <div className="w-full pt-10 p-8 sm:max-w-[640px] sm:mx-auto">
        <h1 className="text-4xl font-bold text-left sm:text-center">My code is</h1>
        <p className="text-sm text-light text-left my-4 sm:text-center">{email}</p>
        <div className="w-full">
          {code.map((digit, index) => (
          <input
          key={index}
          id={`digit-${index}`}
          type="text"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          maxLength={1} // Limit to one character
          className={`w-10 h-10 text-center border-b border-slate-700 ${index === 0 ? 'mr-0.5' : index === 5 ? 'ml-0.5' : 'm-0.5'}`}
          />
          ))}
        </div>
        <div className="w-full mt-28 mb-4">
          <Button bgColor="pink-gradient" type="submit" disabled={!isComplete} shadow >continue</Button>
        </div>
        <div className="flex h-8 items-end space-x-1">
          {showError && <p className="text-sm text-red-500">Verification code includes numbers only</p>}
        </div>
      </div>
	  </form>
	)
  }