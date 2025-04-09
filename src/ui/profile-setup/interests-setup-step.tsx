import { Button } from "@/ui/button";
import { useState } from "react";
import { ProfileSetupFormDataProps } from '@/types/globals';

interface InterestsSetupProps {
	formData: ProfileSetupFormDataProps;
  setFormData: (formData: ProfileSetupFormDataProps) => void;
	nextStep: () => void;
}

export default function InterestsSetup ({formData, setFormData, nextStep }: InterestsSetupProps) {
  const interestOptions = ['Travel', 'Music', 'Anime', 'Haary Potter', 'Dance', 'Gym', 'Wine', 'Walking'];
  const [selectedInterests, setSelectedInterests] = useState(formData.interests || []);

  const handleInterestSelection = (value: string) => {
    const newArray = selectedInterests.includes(value) ? selectedInterests.filter(interest => interest !== value) : [...selectedInterests, value];
    console.log('newArray', newArray);
    setSelectedInterests(newArray);
    if (newArray.length >= 5) {
      setFormData({ ...formData, interests: newArray });
    }
  };

	return (
	  <div className="w-full px-12 sm:max-w-[640px] sm:mx-auto px">
      <label className="text-4xl block px-6 font-bold text-left sm:text-center">Interests</label>
      <p className="text-xs font-light text-left sm:text-center px-6 py-5">
      Let everyone know what you&apos;re interested
      in by adding it to your profile.</p>
      <div className="m-auto flex flex-wrap">
        {interestOptions.map((option, index) => 
          <button key={`interest-${index}`} type="button" className={`h-6 m-1 p-2 text-sm rounded-full border-solid border-2 flex items-center justify-center ${selectedInterests.includes(option) ? 'border-[#EA4080] text-[#EA4080]' : 'border-gray-300 text-gray-300'}`} onClick={() => handleInterestSelection(option)}>{option}</button>
        )}
      </div>
      <div className="w-full my-6">
        <Button bgColor="pink-gradient" type="button" shadow disabled={selectedInterests.length < 5} onClick={nextStep}>{`continue ${selectedInterests.length}/5`}</Button>
      </div>
    </div>
	)
}