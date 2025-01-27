import React from 'react';

const Signup = () => (
  <>
    <div className="mb-6">
      <label htmlFor="username" className="block text-gray-700 font-medium mb-2 pl-2">
        Username <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="username"
        className="w-full py-4 px-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Choose a username"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="block text-gray-700 font-medium mb-2 pl-2">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        id="email"
        className="w-full py-4 px-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your email address"
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
        placeholder="Choose a password"
      />
    </div>
  </>
);

export default Signup;