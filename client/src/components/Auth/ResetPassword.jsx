import React from 'react';

const ResetPassword = () => (
  <div className="mb-6">
    <label htmlFor="resetEmail" className="block text-gray-700 font-medium mb-2 pl-2">
      Email Address <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      id="resetEmail"
      className="w-full py-4 px-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your registered email"
    />
  </div>
);

export default ResetPassword;