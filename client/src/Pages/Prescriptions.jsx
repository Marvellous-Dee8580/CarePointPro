import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';
import PrescriptionIcon from '../assets/prescription-icons.svg';
import PrescriptionCard from '../components/PrescriptionCard';

// Sample prescriptions data
const prescriptionsData = [
  {
    clinicName: 'Avenic Clinic Center',
    department: 'Cardiology Department',
    medicationName: 'Amoxicillin & Metformin',
    dosage: '500 mg',
    frequency: '3 times a day',
    status: 'Current'
  },
  {
    clinicName: 'Avenic Clinic Center',
    department: 'Neurology Department',
    medicationName: 'Ibuprofen',
    dosage: '200 mg',
    frequency: 'Twice a day',
    status: 'Previous'
  },
  {
    clinicName: 'MedCare Hospital',
    department: 'Dermatology Department',
    medicationName: 'Cetirizine',
    dosage: '10 mg',
    frequency: 'Once a day',
    status: 'Recent'
  }
];

const Prescriptions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="flex flex-col h-screen p-6 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Doctor's Prescription</h1>
          <h2 className="text-sm text-gray-500 mt-2">
            This is the last update for the past 7 days{' '}
            <span className="font-bold cursor-pointer text-blue-600">Check now</span>
          </h2>
        </div>
        <button className="flex items-center font-bold bg-[#A8DADC] text-black py-2 px-4 rounded-full text-sm">
          <FaFilter className="mr-2" size={16} /> Filter Medical Prescriptions
        </button>
      </div>

      {/* Conditionally render prescriptions or empty state */}
      {prescriptionsData.length > 0 ? (
        <div className="flex flex-wrap gap-5 justify-center">
          {prescriptionsData.map((prescription, index) => (
            <PrescriptionCard
              key={index}
              {...prescription}
              isExpanded={expandedIndex === index}
              onExpand={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-grow items-center justify-center text-center">
          <div>
            <img
              src={PrescriptionIcon}
              alt="No Prescriptions"
              className="w-36 h-36 mx-auto"
            />
            <p className="text-2xl font-bold text-gray-400 mt-4">
              Prescriptions Unavailable
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prescriptions;