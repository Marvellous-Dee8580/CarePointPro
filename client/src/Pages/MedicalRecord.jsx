import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import MedicalIcon from '../assets/prescription-icons.svg';
import MedicalRecordCard from '../components/MedicalRecordCard';

// Sample medical records data
const medicalRecordsData = [
  {
    visitDate: '2025-01-15',
    clinicName: 'Avenic Clinic Center',
    department: 'Cardiology Department',
    diagnosis: 'Hypertension',
    medicationName: 'Amoxicillin & Metformin',
    doctorName: 'Dr. John Doe',
    doctorIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/85d55960aee5503af63eaf7a79bfe199366a36c5fc0f1ac0fa0dd61678e50b06?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36',
    dosage: '500 mg',
    frequency: '3 times a day',
    status: 'Current'
  },
  {
    visitDate: '2025-01-10',
    clinicName: 'Avenic Clinic Center',
    department: 'Neurology Department',
    diagnosis: 'Migraine',
    medicationName: 'Ibuprofen',
    doctorName: 'Dr. Jane Smith',
    doctorIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/85d55960aee5503af63eaf7a79bfe199366a36c5fc0f1ac0fa0dd61678e50b06?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36',
    dosage: '400 mg',
    frequency: 'Twice a day',
    status: 'Previous'
  },
  {
    visitDate: '2025-01-05',
    clinicName: 'MedCare Hospital',
    department: 'Dermatology Department',
    diagnosis: 'Allergic Rash',
    medicationName: 'Cetirizine',
    doctorName: 'Dr. Michael Green',
    doctorIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/85d55960aee5503af63eaf7a79bfe199366a36c5fc0f1ac0fa0dd61678e50b06?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36',
    dosage: '10 mg',
    frequency: 'Once a day',
    status: 'Recent'
  }
];

const MedicalRecord = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
      <div className="flex flex-col h-screen p-6 bg-gray-50">
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Medical Records</h1>
            <h2 className="text-sm text-gray-500 mt-2">
              This is the last update for the past 7 days{' '}
              <span className="font-bold cursor-pointer text-blue-600">Check now</span>
            </h2>
          </div>
          <button className="flex items-center font-bold bg-[#A8DADC] text-black py-2 px-4 rounded-full text-sm">
            <FaFilter className="mr-2" size={16} /> Filter Medical Records
          </button>
        </div>

        {/* Conditionally render medical records */}
        {medicalRecordsData.length > 0 ? (
          <div className="flex flex-wrap gap-5 justify-center">
            {medicalRecordsData.map((record, index) => (
                <MedicalRecordCard
                    key={index}
                    visitDate={record.visitDate}
                    doctorName={record.doctorName}
                    diagnosis={record.diagnosis}
                    medicationName={record.medicationName}
                    dosage={record.dosage}
                    frequency={record.frequency}
                    doctorIcon={record.doctorIcon}
                    status={record.status}
                    isExpanded={expandedIndex === index}
                    onExpand={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
            ))}
          </div>
        ) : (
          <div className="flex flex-grow items-center justify-center text-center">
            <div>
              <img
                src={MedicalIcon}
                alt="No Medical Records"
                className="w-36 h-36 mx-auto"
              />
              <p className="text-2xl font-bold text-gray-400 mt-4">
                Medical Records Unavailable
              </p>
            </div>
          </div>
        )}
      </div>
    );
};

export default MedicalRecord;