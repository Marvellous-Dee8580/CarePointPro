import React from 'react';

const Guest = () => (
  <div className="mb-6">
    <label htmlFor="guestName" className="block text-gray-700 font-medium mb-2 pl-2">
      Guest Name <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      id="guestName"
      className="w-full py-4 px-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="John Doe"
    />
  </div>
);

export default Guest;