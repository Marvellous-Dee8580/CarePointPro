import * as React from 'react';

export const SelectField = ({ label, icon, placeholder }) => {
  return (
    <>
      <div className="self-start text-xs tracking-tighter text-black max-md:ml-0.5">
        {label}
      </div>
      <div className="flex gap-5 justify-between py-1.5 pr-6 pl-2.5 w-full text-xs tracking-tighter bg-white rounded-md border border-solid border-emerald-200 border-opacity-70 text-zinc-400 max-md:pr-5">
        <div className="flex gap-2.5">
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 rounded-full aspect-square w-[26px]"
          />
          <div className="basis-auto">{placeholder}</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/049ae25371e84bfba38e099f9b8f4eafc9b7e0f472d8ddef859a07c7744c4fe4?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
          alt=""
          className="object-contain shrink-0 my-auto w-3 aspect-square"
        />
      </div>
    </>
  );
};