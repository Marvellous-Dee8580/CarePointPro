import * as React from 'react';

function PaymentReminder() {
  return (
    <div className="flex justify-between items-center gap-4 px-4 py-2 mt-4 w-full text-xs tracking-tight leading-6 rounded-lg bg-orange-500 bg-opacity-20 max-md:max-w-full max-md:mr-1">
      <div className="flex gap-2 self-start font-medium text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fac9761e4d8c2b42645ef44c15367db979ee4db78c5d90533c6e7722bf5830a?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
          alt=""
          className="object-contain w-[21px] h-[21px]"
        />
        <div className="text-xs leading-5">Please complete your profile by adding a payment method</div>
      </div>
      <div className="font-bold text-yellow-700 text-xs cursor-pointer hover:underline">
        Add it here
      </div>
    </div>
  );
}

export default PaymentReminder;