import React from 'react';

function PatientInfo({ patientInfo }) {
  return (
    <div className="flex flex-col items-start">
      <div className="text-sm font-extrabold tracking-tighter leading-6">
        Patient Information
      </div>
      <div className="text-black">
        <span className="font-bold">Name:</span> {patientInfo.name}
      </div>
      <div className="font-bold tracking-tight">
        Gender: <span>{patientInfo.gender}</span>
      </div>
      <div className="font-bold tracking-tight">
        Blood Type: {patientInfo.bloodType}
      </div>
      <div className="font-bold tracking-tight">
        Date of Birth: <span>{patientInfo.dateOfBirth}</span>
      </div>
    </div>
  );
}

export default PatientInfo;