import React from 'react';
import { STEPS } from './Steps';

export function StepIndicator({ currentStep }) {
  const steps = [
    {
      number: 'STEP 1',
      title: 'Patient Information',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/0e4af2a7bb1b2987e9d843b5ea352a789663663e771db164555ea8f069b38bb5?apiKey=91a57716fa0c4017b5d1b119afeacf36&'
    },
    {
      number: 'STEP 2', 
      title: 'Appointment Details',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/ff9b41876dec7df9c1346404bc08ab7235031d56e7f68ba2c6fe4dd450e50e57?apiKey=91a57716fa0c4017b5d1b119afeacf36&'
    },
    {
      number: 'STEP 3',
      title: 'Review & Submit',
      iconSrc: 'https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/ff9b41876dec7df9c1346404bc08ab7235031d56e7f68ba2c6fe4dd450e50e57?apiKey=91a57716fa0c4017b5d1b119afeacf36&'
    }
  ];

  return (
    <div className="flex gap-6 justify-center mb-8 font-semibold">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-12 h-12 mb-2 rounded-full flex items-center justify-center ${
              isActive ? 'bg-teal-800' : isCompleted ? 'bg-teal-600' : 'bg-gray-200'
            }`}>
              <img
                loading="lazy"
                src={step.iconSrc}
                alt=""
                className="w-6 h-6 filter invert"
              />
            </div>
            <div className={`text-xs tracking-tighter ${
              isActive ? 'text-teal-800' : 'text-zinc-400'
            }`}>
              {step.number}
            </div>
            <div className={`text-xs tracking-tighter text-center ${
              isActive ? 'text-teal-800 font-bold' : 'text-black'
            }`}>
              {step.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}