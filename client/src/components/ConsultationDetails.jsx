import React, { useState } from 'react';

function ConsultationDetails({ onClose }) {
  const consultationData = {
    date: 'Jan 30, 2025',
    time: '10:00am',
    doctor: 'Doctor Daniel & Therapists',
    mode: 'Video Call',
    link: '[Meeting Link]',
    instructions: [
      'Please ensure you have a stable internet connection for the consultation.',
      'Join the meeting 5 minutes early for a smooth experience.',
      'Have any medical reports or prescriptions ready if needed.',
      'For any changes or cancellations, please contact us at our Support.',
      'We look forward to assisting you with your health needs. Stay well!'
    ]
  };

  return (
    <div className="flex flex-col max-w-[900px] mx-auto p-8 bg-white rounded-xl shadow-lg">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/071ccf23c9510cfd9f8739c749d53030e3c385f0d140636005f47a75828d99b3?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
        alt="Consultation confirmation"
        className="object-contain self-center max-w-full aspect-[0.98] w-[135px]"
      />
      <div className="flex flex-col mt-7 w-full">
        <ConsultationInfo consultationData={consultationData} />
        <ActionButton onClose={onClose} />
      </div>
    </div>
  );
}

function ConsultationInfo({ consultationData }) {
  const { date, time, doctor, mode, link, instructions } = consultationData;

  return (
    <div className="text-base font-semibold tracking-tight leading-9 text-center text-neutral-900">
      Your Consultation Appointment is Confirmed!
      <br />
      Your virtual consultation appointment has been successfully scheduled.
      <br />
      📅 Date: {date} ⏰ Time: {time} 👨‍⚕️ Doctor: {doctor}
      <br />
      📍 Mode: {mode} 🔗 Link: {link}
      <br />
      {instructions.map((instruction, index) => (
        <React.Fragment key={index}>
          {instruction}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

function ActionButton({ onClose }) {
  return (
    <button
      onClick={onClose}
      className="mt-4 px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
    >
      Ok
    </button>
  );
}

function ParentComponent() {
  const [showConsultation, setShowConsultation] = useState(true);

  const handleCloseModal = () => {
    setShowConsultation(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showConsultation ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <ConsultationDetails onClose={handleCloseModal} />
        </div>
      ) : (
        <div className="p-8 bg-white rounded-xl shadow-lg">
          Modal closed!
        </div>
      )}
    </div>
  );
}

export default ParentComponent;