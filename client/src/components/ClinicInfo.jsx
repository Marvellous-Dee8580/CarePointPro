import * as React from 'react';

export function ClinicInfo() {
  return (
    <div className="flex overflow-hidden gap-1 py-1.5 pr-10 pl-1.5 mt-8 rounded-xl border border-solid border-neutral-200">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b56e5414c935b6877a31ffed132e30fde8407bc3af8ccd85f180eb79fee29dc?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
        alt=""
        className="object-contain shrink-0 my-auto w-7 aspect-square"
      />
      <div className="flex flex-col">
        <div className="text-xs font-extrabold tracking-tighter">
          Avenic Clinic Center
        </div>
        <div className="text-xs font-medium tracking-tighter">
          20, Arowolo street, Ibadan
        </div>
      </div>
    </div>
  );
}