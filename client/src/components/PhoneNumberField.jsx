import React from 'react';

function PhoneNumberField({ label, id, value, iconSrc, alt }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs tracking-tighter text-black">
        {label}
      </label>
      <div className="flex items-center gap-2 px-3 py-2 text-xs tracking-tighter bg-white rounded-md border border-solid border-emerald-200 border-opacity-70 text-zinc-400">
        <img
          loading="lazy"
          src={iconSrc}
          alt={alt}
          className="object-contain w-[21px] h-[21px]"
        />
        <input
          type="text"
          id={id}
          value={value}
          readOnly
          aria-label={label}
          className="flex-1 bg-transparent border-none text-black placeholder:text-zinc-400"
        />
      </div>
    </div>
  );
}

export default PhoneNumberField;