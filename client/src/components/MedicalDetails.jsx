import React from 'react';

function MedicalDetails({ medicalInfo }) {
  return (
    <div className="flex flex-col">
      <div className="text-sm font-extrabold tracking-tighter">
        Recent Visits and Diagnoses
      </div>
      <div className="mt-2 text-black">{medicalInfo.department}</div>
      <div className="font-bold">Diagnosis</div>
      <div className="mt-2">{medicalInfo.diagnosis}</div>
      <div className="text-xs font-bold tracking-tight text-black mt-4">
        Doctor's Notes:
      </div>
      <div className="mt-2.5 text-xs tracking-tight text-black">
        {medicalInfo.doctorsNotes}
      </div>
    </div>
  );
}

export default MedicalDetails;