import React from 'react';
import { FaUserMd } from 'react-icons/fa'; // Doctor icon
import PatientCard from './PatientCard';

// Main MedicalRecordCard component
const MedicalRecordCard = ({
  visitDate,
  doctorName,
  diagnosis,
  medicationName, 
  dosage, 
  frequency, 
  doctorIcon, 
  status, 
  isExpanded, 
  onExpand
}) => {
  return (
    <div 
      className={`bg-white p-6 rounded-2xl shadow-md transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-full' : 'w-full lg:w-[32%]'
      } relative`}
    >
      {/* Status Badge with Icon */}
      <span 
        className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full flex items-center ${
          status === 'Current' ? 'bg-green-100 text-green-600' : 
          status === 'Previous' ? 'bg-red-100 text-red-600' : 
          status === 'Recent' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-600'
        }`}
      >
        {status}
      </span>

      {/* Doctor & Date of Visit */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-start">
          <img
            src={doctorIcon}
            alt="Doctor Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-bold text-gray-700">{doctorName}</h3>
            <p className="text-sm text-gray-500">Date of Visit: {visitDate}</p>
          </div>
        </div>
      </div>

      {/* Diagnosis */}
      <div className="mt-4">
        <h4 className="font-semibold">Diagnosis</h4>
        <p className="text-black">{diagnosis}</p>
      </div>

      {/* Medication, Dosage, and Frequency in a Single Row */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-700">
        <div className="flex flex-col">
          <h4 className="font-semibold">Medication</h4>
          <p className="text-black">{medicationName}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold">Dosage</h4>
          <p className="text-black">{dosage}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold">Frequency</h4>
          <p className="text-black">{frequency}</p>
        </div>
      </div>

      {/* Expanded Section (Details and Images) */}
      {isExpanded && (
        <div className="mt-6 border-t pt-4">
          {/* <div className="flex gap-1.5 mt-7 ml-4 max-md:ml-2.5">
            <img
              loading="lazy"
              src="https://via.placeholder.com/150"
              alt="Medication package front view"
              className="object-contain shrink-0 max-w-full aspect-[1.24] w-[155px]"
            />
            <img
              loading="lazy"
              src="https://via.placeholder.com/150"
              alt="Medication package side view"
              className="object-contain shrink-0 my-auto max-w-full aspect-[1.55] w-[146px]"
            />
          </div>
          <div className="mt-7 ml-7 text-xs font-semibold tracking-tighter leading-6 text-neutral-600 max-md:ml-2.5">
            Prescription Details
          </div>
          <div className="ml-7 text-xs tracking-tight text-black max-md:ml-2.5">
            Detailed prescription instructions, doctor’s notes, and additional medical information.
          </div> */}
          <PatientCard/>
        </div>
      )}

      {/* View More Details Button */}
      <button 
        className="mt-4 text-blue-600 font-semibold text-sm hover:underline"
        onClick={onExpand}
      >
        {isExpanded ? 'Collapse Details' : 'View More Details'}
      </button>
    </div>
  );
};

export default MedicalRecordCard;