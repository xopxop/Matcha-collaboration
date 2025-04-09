import NameSetup from "./name-setup-step";
import BirthdaySetup from "./birthday-setup-step";
import { ProfileSetupFormDataProps } from '@/types/globals';
import GenderSetup from "./gender-setup-step";
import InterestsSetup from "./interests-setup-step";
import PhotoSetup from "./photo-setup-step";
import Welcome from "./welcome";

interface ProfileSetupFormProps {
  currentStep: number;
	formData: ProfileSetupFormDataProps;
	nextStep: () => void;
	setFormData: (formData: ProfileSetupFormDataProps) => void;
}

export default function profileSetupForm ({currentStep, nextStep, formData, setFormData}: ProfileSetupFormProps) {

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('here')
		setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Perform validation and submit the form data
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {currentStep === 0 &&
        <NameSetup name={formData.name} nextStep={nextStep} handleChange={handleChange}/>
      }
      {currentStep === 1 &&
        <BirthdaySetup formData={formData} setFormData={setFormData} nextStep={nextStep}/>
      }
      {currentStep === 2 &&
        <GenderSetup formData={formData} setFormData={setFormData} nextStep={nextStep}/>
      }
      {currentStep === 3 &&
        <InterestsSetup formData={formData} setFormData={setFormData} nextStep={nextStep}/>
      }
      {currentStep === 4 &&
        <PhotoSetup formData={formData} setFormData={setFormData} nextStep={nextStep}/>
      }
      {currentStep === 5 &&
        <Welcome nextStep={handleSubmit}/>
      }
    </form>
  )
}