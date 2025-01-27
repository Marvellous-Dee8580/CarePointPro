import React from 'react';

const Login = ({ handleModeChange }) => (
  <>
    <div className="mb-6">
      <label htmlFor="username" className="block text-gray-700 font-medium mb-2 pl-2">
        Username <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="username"
        className="w-full py-4 px-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="E050CA.JD45"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-gray-700 font-medium mb-2 pl-2">
        Password <span className="text-red-500">*</span>
      </label>
      <input
        type="password"
        id="password"
        className="w-full py-4 px-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="H5200.JGDS"
      />
    </div>
    <div className="text-right mb-6">
      <button
        type="button"
        onClick={() => handleModeChange('reset')}
        className="text-blue-600 hover:underline text-sm"
      >
        Forgot Password?
      </button>
    </div>
  </>
);

export default Login;