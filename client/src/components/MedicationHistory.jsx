import React from 'react';

function MedicationHistory({ medications }) {
  return (
    <div className="flex flex-col items-start w-full text-xs tracking-tight">
      <div className="text-sm font-extrabold tracking-tight text-black">
        Medication History
      </div>
      <div className="mt-5 font-bold text-black">Active Medications</div>
      {medications.active.map((med, index) => (
        <div key={index} className="flex gap-1 mt-2">
          <div className="grow text-black">
            {med.name} {med.dosage} ({med.frequency}
            {med.duration && `, for ${med.duration}`})
          </div>
          {med.status && <div className="font-extrabold text-green-900">{med.status}</div>}
        </div>
      ))}
      <div className="mt-4 font-bold text-black">Discontinued Medications</div>
      {medications.discontinued.map((med, index) => (
        <div key={index} className="self-stretch mt-2.5 text-amber-600">
          {med.name} {med.dosage} ({med.frequency}, discontinued {med.discontinuedDate})
        </div>
      ))}
    </div>
  );
}

export default MedicationHistory;