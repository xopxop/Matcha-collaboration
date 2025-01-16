import { useEffect, useState } from "react";
import { Button } from "@/ui/button";

interface VerificationCodeFormProps {
	email: string;
  }
  
export const VerificationCodeForm = ({ email }: VerificationCodeFormProps) => {
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

  const handleVerification = (formData: FormData) => {
    console.log('handleVerification', formData);
    // Combine the digits into a single string
    // const formData = new FormData(event.currentTarget); // Create FormData from the form
    // formData.append('verificationCode', verificationCode); // Append the verification code to the FormData
    // formAction(formData);
  }
  
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
	  <form action={handleVerification} className="space-y-3">
      <div className="w-full pt-10 p-8 sm:max-w-[640px] sm:mx-auto">
        <label className="text-4xl block font-bold text-left sm:text-center">My code is</label>
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