import React from 'react';
import PaymentAlert from './PaymentAlert';

export function PatientSummary({ patientInfo, appointmentInfo, currentStep }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">Reservation ID</span>
          <span className="text-sm font-medium">#AVC2345011</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/eab3a53198f8038ec922d51befc1a278cff421a633fab0d344e79e03638e8728?apiKey=91a57716fa0c4017b5d1b119afeacf36&"
            alt=""
            className="w-3 h-3"
          />
          <span>Lagos/Africa</span>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="flex items-center space-x-4 p-4 bg-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/bb4b26791f2b6a10379def101da9bf6592ab708723f90842cac036e57ab2c3a9?apiKey=91a57716fa0c4017b5d1b119afeacf36&"
            alt=""
            className="w-12 h-12"
          />
          <div>
            <div className="text-xs text-gray-500">Patient name</div>
            <div className="text-sm font-bold">{patientInfo.name || 'Not provided'}</div>
          </div>
          <div className="ml-auto">
            <div className="text-xs text-gray-500">Status</div>
            <div className="mt-1 px-4 py-1 text-xs bg-gray-100 rounded-full inline-block">
              {currentStep === 3 ? 'Pending Confirmation' : 'In Progress'}
            </div>
          </div>
        </div>
      </div>

      {patientInfo.name && (
        <div className="mt-6">
          <h3 className="text-sm font-bold mb-4">Patient Details</h3>
          <div className='m-3'>
            <PaymentAlert/>
            </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm">{patientInfo.email}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm">{patientInfo.phone}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-gray-500">Address</p>
              <p className="text-sm">{patientInfo.address}</p>
            </div>
          </div>
        </div>
      )}

      {appointmentInfo.doctor && (
        <div className="mt-6">
          <h3 className="text-sm font-bold mb-4">Appointment Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500">Doctor</p>
              <p className="text-sm">{appointmentInfo.doctor}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Date</p>
              <p className="text-sm">{appointmentInfo.date}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Time</p>
              <p className="text-sm">{appointmentInfo.time}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}