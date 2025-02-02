import React, { useState } from 'react';
import PaymentCard from './PaymentCard';
import ConsultationDetails from './ConsultationDetails';

export default function TelemedicinePayment() {
  const [step, setStep] = useState('selectPayment'); // "selectPayment" -> "enterCardDetails" -> "consultationDetails"
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(true);
  const [showPaymentCardModal, setShowPaymentCardModal] = useState(false);

  const paymentOptions = [
    { id: 'card', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5dcb7c1062137e0a2a732fd8db8bea2b3e70231e1ab6fbae8b8e74c6613fde3e', label: 'Card' },
    { id: 'paypal', icon: 'https://cdn-icons-png.flaticon.com/256/196/196566.png', label: 'PayPal' },
    { id: 'applepay', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/37cf390d9941169228a2b1b57f61393976b5ee413ff4db5d2e67447d0028593a', label: 'Apple Pay' },
    { id: 'googlepay', icon: 'https://cdn-icons-png.flaticon.com/256/6124/6124998.png', label: 'Google Pay' },
    { id: 'banktransfer', icon: 'https://cdn-icons-png.flaticon.com/256/3029/3029373.png', label: 'Bank Transfer' },
  ];

  const handlePaymentSelect = () => {
    setShowPaymentMethodModal(false); // Hide payment method modal
    setShowPaymentCardModal(true); // Show PaymentCard modal
    setStep('enterCardDetails');
  };

  const handlePaymentSuccess = () => {
    setShowPaymentCardModal(false); // Ensure PaymentCard modal closes
    setTimeout(() => setStep('consultationDetails'), 300); // Add slight delay for smooth transition
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      {/* Step 1: Choose Payment Method */}
      {showPaymentMethodModal && step === 'selectPayment' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col px-8 py-10 bg-white rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold text-center text-gray-900 mb-4">
              Choose a Payment Method
            </h2>
            <div className="flex flex-col gap-3 w-full">
              {paymentOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={handlePaymentSelect}
                  className="flex items-center justify-between px-4 py-3 rounded-lg border border-gray-200 shadow-sm bg-white hover:bg-gray-100 transition"
                >
                  <img src={option.icon} alt={option.label} className="w-10 h-10 object-contain" />
                  <span className="text-lg font-medium text-gray-900">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Enter Card Details */}
      {showPaymentCardModal && step === 'enterCardDetails' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <PaymentCard onPay={handlePaymentSuccess} />
        </div>
      )}

      {/* Step 3: Consultation Details */}
      {step === 'consultationDetails' && <ConsultationDetails onClose={() => setShowConsultation(false)}
 />}
    </div>
  );
}