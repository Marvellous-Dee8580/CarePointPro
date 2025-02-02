import React, { useState, useEffect } from 'react';
import ClinicHeader from './ClinicHeader';
import PatientInfo from './PatientInfo';
import MedicalDetails from './MedicalDetails';
import MedicationHistory from './MedicationHistory';
import EmergencyContact from './EmergencyContact';
import LabResults from './LabResults';
import Allergies from './Allergies';
import { mockPatientData } from './MockMedicalData';

function PatientCard({ patientData }) {
  const [data, setData] = useState(mockPatientData);

  useEffect(() => {
    if (patientData) {
      setData(patientData);
    }
  }, [patientData]);

  return (
    <div className="flex overflow-hidden flex-col items-start pt-6 pr-10 pb-28 pl-5 bg-white rounded-[30px] max-md:pr-5 max-md:pb-24">
      <div className="flex flex-col self-end w-full max-w-[736px] max-md:max-w-full">
        <div className="overflow-hidden z-10 self-end px-8 py-1 text-xs tracking-tight text-black rounded-3xl bg-amber-600 bg-opacity-50 max-md:px-5">
          Follow up in <span className="font-bold">{data.followUpDays} days</span> if symptoms do not improve.
        </div>
        <div className="overflow-hidden self-start px-5 py-1 -mt-3.5 text-xs font-bold tracking-tighter text-white whitespace-nowrap bg-stone-50 rounded-[30px]">
          Recent
        </div>
      </div>

      <div className="flex z-10 flex-col items-end mt-0 max-w-full text-xs text-black w-[683px]">
        <ClinicHeader clinicInfo={data.clinicInfo} />
        <PatientInfo patientInfo={data.patientInfo} />
        <MedicalDetails medicalInfo={data.medicalInfo} />
      </div>

      <div className="flex flex-col items-start mt-4 ml-3 w-full max-w-[744px] max-md:max-w-full">
        <div className="self-stretch mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <MedicationHistory medications={data.medications} />
              <EmergencyContact contact={data.emergencyContact} />
            </div>

            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <Allergies allergies={data.allergies} />
              <LabResults labResults={data.labResults} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientCard;