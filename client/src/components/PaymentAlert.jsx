import React from 'react';
export default function PaymentAlert() {
    return (
      <div className="flex gap-5 justify-between px-2.5 py-px mt-4 w-full text-xs tracking-tight leading-6 rounded-lg bg-orange-500 bg-opacity-20 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-1 self-start font-medium text-black">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/4fac9761e4d8c2b42645ef44c15367db979ee4db78c5d90533c6e7722bf5830a?apiKey=91a57716fa0c4017b5d1b119afeacf36&"
            alt=""
            className="object-contain shrink-0 aspect-[0.84] w-[21px]"
          />
          <div className="basis-auto">
            Please complete your profile by adding a payment method
          </div>
        </div>
        <button 
          className="font-bold text-yellow-700 hover:text-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={() => {}}
          aria-label="Add payment method"
        >
          Add it here
        </button>
      </div>
    );
  }
