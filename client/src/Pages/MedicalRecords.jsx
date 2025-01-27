import React from 'react';
import { FaFilter } from 'react-icons/fa';
import MedicalIcon from '../assets/no-file-icon.svg'; // Import the SVG icon

const MedicalRecords = () => {
  return (
    <div className="flex flex-col h-screen p-6">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Medical Records</h1>
          <h2 className="text-sm text-gray-500 mt-2">This is the last update for the past 7days <span className="font-bold">Check now</span></h2>
        </div>
        <button
          className="flex items-center font-bold bg-[#A8DADC] text-black py-2 px-4 rounded-full text-sm"
        >
          <FaFilter className="mr-2" size={16} /> Filter Medical Record
        </button>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-grow items-center justify-center text-center">
        <div>
          <img
            src={MedicalIcon}
            alt="Appointment Icon"
            className="w-36 h-36 mx-auto"
          />
          <p className="text-2xl font-bold text-[#A8DADC] mt-4">No Medical Records Uploaded</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;