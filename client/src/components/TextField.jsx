import React from 'react';

function TextField({ label, id, value, type = 'text' }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xs tracking-tighter text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        readOnly
        aria-label={label}
        className="px-3.5 py-1 text-xs tracking-tighter bg-white rounded-md border border-solid border-emerald-200 border-opacity-70 text-zinc-400 max-md:pr-5"
      />
    </div>
  );
}

export default TextField;