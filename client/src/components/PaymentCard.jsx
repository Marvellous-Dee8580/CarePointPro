import React, { useState } from 'react';

function PaymentCard({ onPay }) {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    name: '',
    expirationDate: '',
    cvv: '',
    saveCard: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center px-20 py-6 bg-white rounded-xl shadow-lg max-w-[804px]">
      <div className="flex flex-col items-center w-[376px]">
        <div className="text-base font-semibold tracking-tight leading-9 text-neutral-900">
          Enter your card details
        </div>
        <CardHeader />
        <PaymentForm cardDetails={cardDetails} handleChange={handleChange} />
        <PaymentButton amount={5000} onPay={onPay} />
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="flex flex-col justify-center px-5 py-5 bg-white rounded-xl border border-gray-50 shadow-sm w-[302px]">
      <div className="flex gap-1.5 items-center">
        <div className="flex gap-7 items-center w-[261px]">
          <div className="w-[27px]">
            <div className="h-[19px] bg-white rounded" />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5d30440db7fd979c9d868e246708f6005ec875143bcffeda2492b6478bcf2d?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
            className="object-contain w-[29px] aspect-[1.45]"
            alt="Payment card icon"
          />
        </div>
        <div className="text-base font-semibold text-neutral-900">
          Pay with card
        </div>
      </div>
    </div>
  );
}

function PaymentForm({ cardDetails, handleChange }) {
  return (
    <div className="flex flex-col mt-7 text-base font-medium tracking-tighter">
      <label className="w-[129px]">Payment Method</label>
      <label className="w-[140px] text-black">Debit Card Number</label>
      <input 
        type="text" 
        name="cardNumber" 
        value={cardDetails.cardNumber} 
        onChange={handleChange} 
        className="px-5 py-5 bg-gray-50 rounded-full w-full"
      />
      <label className="w-[140px] text-black mt-3">Name</label>
      <input 
        type="text" 
        name="name" 
        value={cardDetails.name} 
        onChange={handleChange} 
        className="px-5 py-5 bg-gray-50 rounded-full w-full"
      />
      <div className="flex gap-10 mt-2 w-full">
        <div className="flex flex-col w-[162px]">
          <label className="text-black">Expiration Date</label>
          <input 
            type="text" 
            name="expirationDate" 
            value={cardDetails.expirationDate} 
            onChange={handleChange} 
            className="px-4 py-5 bg-gray-50 rounded-full w-full"
          />
        </div>
        <div className="flex flex-col w-[162px]">
          <label className="text-black">CVV</label>
          <input 
            type="text" 
            name="cvv" 
            value={cardDetails.cvv} 
            onChange={handleChange} 
            className="px-4 py-5 bg-gray-50 rounded-full w-full"
          />
        </div>
      </div>
      <div className="flex items-center mt-3">
        <input 
          type="checkbox" 
          name="saveCard" 
          checked={cardDetails.saveCard} 
          onChange={handleChange} 
          className="w-7 h-7 bg-gray-50 rounded-md border border-gray-200"
        />
        <label className="ml-2">Save Card</label>
      </div>
    </div>
  );
}

function PaymentButton({ amount, onPay }) {
  return (
    <button
      onClick={onPay} // Invoke the callback on click
      className="px-10 py-3 mt-8 ml-6 text-lg font-bold tracking-tighter leading-none text-white bg-green-900 rounded-xl w-[216px]"
    >
      Pay N{amount.toLocaleString()}
    </button>
  );
}

export default PaymentCard;