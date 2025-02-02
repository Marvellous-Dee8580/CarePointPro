import React, { useState } from 'react';
import { STEPS, INITIAL_PATIENT_INFO, INITIAL_APPOINTMENT_INFO } from '../components/Steps';
import { StepIndicator } from '../components/StepIndicator';
import { PatientInfoForm } from '../components/PatientInfoForm';
import { AppointmentDetailsForm } from '../components/AppointmentDetailsForm';
import { ReviewForm } from '../components/ReviewForm';
import { PatientSummary } from '../components/PatientSummary';
import PaymentAlert from '../components/PaymentAlert';

export function PatientAppointmentBooking() {
  const [currentStep, setCurrentStep] = useState(STEPS.PATIENT_INFO);
  const [patientInfo, setPatientInfo] = useState(INITIAL_PATIENT_INFO);
  const [appointmentInfo, setAppointmentInfo] = useState(INITIAL_APPOINTMENT_INFO);

  const handlePatientInfoChange = (name, value) => {
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setPatientInfo(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setPatientInfo(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleAppointmentInfoChange = (name, value) => {
    setAppointmentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePatientInfoSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(STEPS.APPOINTMENT_DETAILS);
  };

  const handleAppointmentDetailsSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(STEPS.REVIEW);
  };

  const handleFinalSubmit = () => {
    console.log('Booking submitted:', { patientInfo, appointmentInfo });
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case STEPS.PATIENT_INFO:
        return (
          <PatientInfoForm
            formData={patientInfo}
            onChange={handlePatientInfoChange}
            onSubmit={handlePatientInfoSubmit}
          />
        );
      case STEPS.APPOINTMENT_DETAILS:
        return (
          <AppointmentDetailsForm
            formData={appointmentInfo}
            onChange={handleAppointmentInfoChange}
            onSubmit={handleAppointmentDetailsSubmit}
          />
        );
      case STEPS.REVIEW:
        return (
          <ReviewForm
            patientInfo={patientInfo}
            appointmentInfo={appointmentInfo}
            onSubmit={handleFinalSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6">
            <h1 className="text-lg font-semibold text-gray-900 mb-6">
              Patient new appointment
            </h1>
            
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-5">
                <StepIndicator currentStep={currentStep} />
                {renderCurrentStep()}
              </div>            
              <div className="col-span-7">
                <PatientSummary
                  patientInfo={patientInfo}
                  appointmentInfo={appointmentInfo}
                  currentStep={currentStep}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}