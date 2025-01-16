import { Button } from "@/ui/button";
import { useState } from "react";
import { ProfileSetupFormDataProps } from '@/types/globals';
import { useEffect } from "react";

interface BirthdaySetupProps {
	formData: ProfileSetupFormDataProps;
  setFormData: (formData: ProfileSetupFormDataProps) => void;
	nextStep: () => void;
}

export default function BirthdaySetup ({formData, setFormData, nextStep }: BirthdaySetupProps) {
  const [birthday, setBirthday] = useState(['', '', '', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
	  // Move to the previous input on backspace
	  if (event.key === 'Backspace' && !birthday[index] && index > 0) {
		  const prevInput = document.getElementById(`digit-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
	  }
	};

  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date.getTime());
  }

  const isAtLeast18YearsOld = (dateString: string) => {
    if (!isValidDate(dateString)) {
      throw new Error('Invalid date.');
      return;
    }
  
    const date = new Date(dateString);
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    const monthDifference = today.getMonth() - date.getMonth();
    console.log(age)
    // Check if the date is at least 18 years old
    if (age > 18 || (age === 18 && monthDifference > 0) || (age === 18 && monthDifference === 0 && today.getDate() >= date.getDate())) {
      return true;
    }

    throw new Error('Must be over 18 years old.');
  }

  const handleChange = (index: number, value: string) => {
	  // Update the specific index with the new value
	  const newBirthday = [...birthday];
	  newBirthday[index] = value.replace(/\D/g, ''); // Allow only digits
	  console.log(newBirthday[index] === '', index)
	  setBirthday(newBirthday);
  
	  if (newBirthday[index] === '' && value !== '') {
		  setErrorMessage('Birthday must include numbers only.')
	  }
	  else if (value && index < 7) {
      const nextInput = document.getElementById(`digit-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
	  }

    if (newBirthday.every((digit) => digit !== '')) {
      const fullBirthday = newBirthday.join('');
      const year = fullBirthday.substring(0, 4);
      const month = fullBirthday.substring(4, 6);
      const day = fullBirthday.substring(6, 8);
      const formattedDate = `${year}-${month}-${day}`;
      console.log(formattedDate);

      try {
        isAtLeast18YearsOld(formattedDate);
        setFormData({ ...formData, birthday: formattedDate });
      } catch (e: any) {
        setErrorMessage(e.message);
      }
    } else if (formData.birthday) {
      setFormData({ ...formData, birthday: '' });

    }
	};

  useEffect(() => {
    if (formData.birthday) {
      setBirthday(formData?.birthday.replace(/-/g, "").split(''));
    }
	}, []);

	return (
		<div className="w-full px-12 sm:max-w-[640px] sm:mx-auto">
      <div className="px-6">
        <label className="text-4xl block font-bold text-left sm:text-center" htmlFor="birthday">My birthday is</label>
        <div className="pt-10 pb-4 flex items-center sm:mx-auto justify-center">
          {birthday.map((digit, index) => (
            <div key={`birthday-${index}`} className="flex">
            {(index === 4 || index == 6) && <p className="text-slate-400">/</p>}
            <input
            id={`digit-${index}`}
            type="text"
            value={digit}
            placeholder={index < 4 ? 'Y' : index < 6 ? 'M' : 'D'}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1} // Limit to one character
            className={`w-6 h-6 text-center border-b border-slate-700 ${index === 0 ? 'mr-0.5' : index === 5 ? 'ml-0.5' : 'm-0.5'}`}
            />
          </div>
          ))}
        </div>
        <p className="text-xs font-light sm:text-center">
          Your age will be public
        </p>
      </div>
      <div className="w-full mt-20 mb-4">
        <Button bgColor="pink-gradient" type="button" shadow disabled={!formData.birthday} onClick={nextStep}>continue</Button>
      </div>
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
	)
  }