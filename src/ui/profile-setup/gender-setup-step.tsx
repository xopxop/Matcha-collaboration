import { Button } from "@/ui/button";
import { useState } from "react";
import { ProfileSetupFormDataProps } from '@/types/globals';

interface GenderSetupProps {
	formData: ProfileSetupFormDataProps;
  setFormData: (formData: ProfileSetupFormDataProps) => void;
	nextStep: () => void;
}

export default function GenderSetup ({formData, setFormData, nextStep }: GenderSetupProps) {
  const [selectedGender, setSelectedGender] = useState(formData.gender);
  const genderOptions = ['woman', 'man', 'other'];

  const handleGenderSelection = (value: string) => {
    console.log('gender button', value);
    setSelectedGender(value);
    setFormData({ ...formData, gender: value });
  };

	return (
	  <div className="w-full px-12 sm:max-w-[640px] sm:mx-auto px">
      <label className="text-4xl block px-6 font-bold text-left sm:text-center">I am a</label>
      <input type="hidden" name="gender" id="gender" value={selectedGender} required></input>
      <div className="m-auto my-20">
        {genderOptions.map((gender, index) => 
          <button key={`gender-${index}`} type="button" className={`w-full h-12 my-2 rounded-full border-solid border-2 flex items-center justify-center uppercase ${selectedGender === gender ? 'border-[#EA4080] text-[#EA4080]' : 'border-gray-300 text-gray-300'}`} onClick={() => handleGenderSelection(gender)}>{gender}</button>
        )}
      </div>
      <label className="text-xs font-light flex items-center my-4">
        <input type="checkbox" name="showGender" value="true" className="m-2"/>
        Show my gender on my profile
      </label>
      <div className="w-full mb-4">
        <Button bgColor="pink-gradient" type="button" shadow disabled={!selectedGender} onClick={nextStep}>continue</Button>
      </div>
    </div>
	)
}