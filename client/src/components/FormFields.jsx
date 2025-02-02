import React from 'react';

export function InputField({ label, value, onChange, name, type = 'text', placeholder }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-xs tracking-tighter text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="px-4 py-2 text-sm rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
      />
    </div>
  );
}

export function PhoneInput({ label, value, onChange, name }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-xs tracking-tighter text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center px-4 py-2 rounded-lg border border-gray-200 focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/0b5f33e595c6df8a23c4675c9e248791a1269d9259268c226a781cc8249392fe?apiKey=91a57716fa0c4017b5d1b119afeacf36&"
          alt=""
          className="w-5 h-5 mr-2"
        />
        <input
          type="tel"
          value={value}
          onChange={onChange}
          name={name}
          className="flex-1 text-sm outline-none bg-transparent"
        />
      </div>
    </div>
  );
}

export function SelectField({ label, value, onChange, name, options }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-xs tracking-tighter text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        name={name}
        className="px-4 py-2 text-sm rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}