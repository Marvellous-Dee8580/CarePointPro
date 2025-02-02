import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import EmergencyDashboard from '../components/EmergencyDashboard';

const Emergency = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // Modal visibility state

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="flex flex-col h-screen p-6 relative">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Emergency Services</h1>
          <h2 className="text-sm text-gray-500 mt-2">
            We Provide Immediate assistance 24/7{' '}
            <span className="font-bold cursor-pointer">Check now</span>
          </h2>
        </div>
      </div>
      <EmergencyDashboard/>
    </div>
  );
};

export default Emergency;