import React from 'react';

export function ReviewForm({ patientInfo, appointmentInfo, onSubmit }) {
  return (
    <><div className="bg-white rounded-lg p-6 shadow-sm">
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/6803f33face934ddec148797dcbf17b24dc7a168789b2c1dd3dd98fbb11a8ff8?apiKey=91a57716fa0c4017b5d1b119afeacf36&"
              alt="Appointment confirmation illustration"
              className="object-contain z-10 mt-40 ml-32 max-w-full aspect-[0.81] w-[105px] max-md:mt-10 max-md:ml-2.5" />
          <div className="mt-0 ml-11 text-xs tracking-tighter leading-4 text-center text-black w-[316px] max-md:ml-2.5">
              Thank you for completing the form! Kindly review the confirmation
              details on the other side to ensure everything is accurate.
          </div>
          <button
              className="mt-5 ml-44 text-xs font-bold tracking-tighter text-teal-800 max-md:ml-2.5"
              tabIndex={0}
              aria-label="Submit appointment form"
          >
              Submit
          </button>
      </div><div className="flex justify-end mt-6">
          </div></>
  );
}