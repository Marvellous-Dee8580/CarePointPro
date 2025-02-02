import React, { useState } from 'react';
import EmergencyCard from './EmergencyCard';
import FirstAidTips from './FirstAidTips.jsx';
import Pharmacy from './Pharmacy.jsx';

const EmergencyDashboard = () => {
  const [activeButton, setActiveButton] = useState('emergencyNumber'); // State to track active button

  const emergencyServices = [
    {
      title: '911',
      subtitle: 'Ambulance Calling Number',
      icon: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/098e257b5af4c64de1afb4b58ea07955e3449034a4ed5cc5f3c981ffba1cc557?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36" alt="Ambulance service icon" className="object-contain self-stretch my-auto w-5 aspect-square" />,
      openingTime: '7:00am',
      closingTime: '10:00pm'
    },
    {
      title: '911',
      subtitle: 'Fire Service Number',
      icon: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/098e257b5af4c64de1afb4b58ea07955e3449034a4ed5cc5f3c981ffba1cc557?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36" alt="Ambulance service icon" className="object-contain self-stretch my-auto w-5 aspect-square" />,
      openingTime: '7:00am',
      closingTime: '10:00pm'
    },
    {
      title: '100',
      subtitle: 'Police Calling Number',
      icon: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/098e257b5af4c64de1afb4b58ea07955e3449034a4ed5cc5f3c981ffba1cc557?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36" alt="Ambulance service icon" className="object-contain self-stretch my-auto w-5 aspect-square" />,
      openingTime: '7:00am',
      closingTime: '10:00pm'
    }
  ];

  // Function to render content based on the active button
  const renderContent = () => {
    switch (activeButton) {
      case 'emergencyNumber':
        return (
          <>
            <div className="mt-10 w-full max-w-[697px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <EmergencyCard {...emergencyServices[0]} />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <EmergencyCard {...emergencyServices[1]} />
                </div>
              </div>
            </div>
            <div className="w-[337px] max-w-full">
              <EmergencyCard {...emergencyServices[2]} />
            </div>
          </>
        );
      case 'hospitalPharmacy':
        return (
          <div className="mt-10 w-full max-w-[697px] max-md:max-w-full">
            <Pharmacy/>
          </div>
        );
      case 'firstAidTips':
        return (
            <FirstAidTips/>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex overflow-hidden flex-col items-start px-11 pt-6 pb-40 bg-white max-md:px-5 max-md:pb-24">
      <nav className="flex gap-9 items-center w-full text-base font-semibold tracking-tight leading-9 max-w-[711px] text-neutral-900 max-md:max-w-full">
        <button
          className={`gap-2.5 self-stretch px-7 py-3 text-lg font-bold tracking-tighter leading-none rounded-xl min-h-[48px] max-md:px-5 ${
            activeButton === 'emergencyNumber'
              ? 'bg-green-900 text-white'
              : 'bg-gray-200 text-neutral-900'
          }`}
          onClick={() => setActiveButton('emergencyNumber')}
        >
          Emergency number
        </button>
        <button
          className={`grow shrink self-stretch my-auto w-[260px] px-7 py-3 text-lg font-bold tracking-tighter leading-none rounded-xl min-h-[48px] ${
            activeButton === 'hospitalPharmacy'
              ? 'bg-green-900 text-white'
              : 'bg-gray-200 text-neutral-900'
          }`}
          onClick={() => setActiveButton('hospitalPharmacy')}
        >
          See Hospital/Pharmacy close to you
        </button>
        <button
          className={`self-stretch my-auto px-7 py-3 text-lg font-bold tracking-tighter leading-none rounded-xl min-h-[48px] ${
            activeButton === 'firstAidTips'
              ? 'bg-green-900 text-white'
              : 'bg-gray-200 text-neutral-900'
          }`}
          onClick={() => setActiveButton('firstAidTips')}
        >
          First Aid Tips
        </button>
      </nav>

      {renderContent()}
    </div>
  );
};

export default EmergencyDashboard;