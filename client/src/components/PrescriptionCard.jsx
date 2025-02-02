import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';

// MedicationImages component
function MedicationImages() {
  return (
    <div className="flex gap-1.5 mt-7 ml-4 max-md:ml-2.5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/78216de30137f19e3f31a39a5701c33db616c3868da0308c62687cc0baa46e49?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
        alt="Medication package front view"
        className="object-contain shrink-0 max-w-full aspect-[1.24] w-[155px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a53247d6dbeb0d35f37cc8ee5429689d62b99b230550cdbd204d0b75b55be14?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
        alt="Medication package side view"
        className="object-contain shrink-0 my-auto max-w-full aspect-[1.55] w-[146px]"
      />
    </div>
  );
}

// PrescriptionSection component
function PrescriptionSection({ title, content }) {
  return (
    <>
      <div className="mt-7 ml-7 text-xs font-semibold tracking-tighter leading-6 text-neutral-600 max-md:ml-2.5">
        {title}
      </div>
      {content && (
        <div className="ml-7 text-xs tracking-tight text-black max-md:ml-2.5">
          {content}
        </div>
      )}
    </>
  );
}

// Main PrescriptionCard component
const PrescriptionCard = ({ 
  clinicName, department, medicationName, dosage, frequency, status, isExpanded, onExpand 
}) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Current':
        return <FaCheckCircle className="mr-2 text-green-600" />;
      case 'Previous':
        return <FaTimesCircle className="mr-2 text-red-600" />;
      case 'Recent':
        return <FaClock className="mr-2 text-yellow-600" />;
      default:
        return null;
    }
  };

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
        {getStatusIcon(status)}
        {status}
      </span>

      {/* Additional Follow-up Message (only when expanded) */}
      {isExpanded && (
        <div className="absolute top-4 right-4 overflow-hidden self-start px-7 py-1 text-xs tracking-tight text-black rounded-3xl bg-amber-600 bg-opacity-50 max-md:px-5">
          Follow up in <span className="font-bold">7 days</span> if symptoms do not improve.
        </div>
      )}

      {/* Clinic & Department */}
      <div className="flex gap-3 items-start">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/796e8542122f3c24340a166e264936fde4b4f5eea184a5c3618675f6d4868da2"
          alt="Clinic Logo"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-bold text-gray-700">{clinicName}</h3>
          <p className="text-sm text-gray-500">{department}</p>
        </div>
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

      {/* Expanded Section with combined additional information */}
      {isExpanded && (
        <div className="mt-6 border-t pt-4">
          <MedicationImages />
          <PrescriptionSection 
            title="Prescription Details" 
            content="Detailed prescription instructions, doctor’s notes, and additional medical information." 
          />
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

export default PrescriptionCard;