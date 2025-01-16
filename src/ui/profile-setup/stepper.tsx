import { Fragment } from "react";

interface StepperProps {
	currentStep: number;
	numberOfSteps: number;
}

export default function Stepper ({currentStep, numberOfSteps}: StepperProps) {
	console.log('stepper', currentStep, numberOfSteps)
	return (
	  <div className="flex items-center">
		{Array.from({length: numberOfSteps}).map((_, index) => (
		  <Fragment key={index}>
			<div className={`w-1/6 h-1 ${currentStep >= index ? 'bg-[#EA4080]' : 'bg-gray-300'}`}></div>
		  </Fragment>
		))}
	  </div>
	)
  }