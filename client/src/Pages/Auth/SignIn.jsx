import React, { useState } from 'react';
import operatingRoomImage from '../../assets/SignIn.png';
import logo from '../../assets/logo.png';
import Login from '../../components/Auth/Login.jsx';
import SignUp from '../../components/Auth/Signup.jsx';
import Guest from '../../components/Auth/Guests.jsx';
import ResetPassword from '../../components/Auth/ResetPassword.jsx';
import Title from '../../constants/authConfig.jsx';

const SignIn = () => {
  const [mode, setMode] = useState('login');

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row h-screen transition-transform duration-700 ${
        mode === 'guest' ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="absolute top-4 left-4">
        <img src={logo} alt="Logo" className="w-36 h-auto" />
      </div>

      <div className="lg:w-1/2 flex items-center justify-center bg-innovaGrey p-8 m-auto">
        <div className="max-w-md w-full">
          <Title mode={mode} />

          <form>
            {mode === 'login' && <Login handleModeChange={handleModeChange} />}
            {mode === 'signup' && <SignUp />}
            {mode === 'guest' && <Guest />}
            {mode === 'reset' && <ResetPassword />}
            <button
              type="submit"
              className="w-full bg-[#444783] text-white py-4 rounded-full font-medium hover:bg-blue-700 transition"
            >
              {mode === 'login' && 'Login'}
              {mode === 'signup' && 'Sign Up'}
              {mode === 'guest' && 'Enter as Guest'}
              {mode === 'reset' && 'Send Reset Link'}
            </button>
          </form>
          <div className="text-center mt-6 flex justify-center space-x-4">
            {mode !== 'login' && (
              <button
                onClick={() => handleModeChange('login')}
                className="px-5 py-2 bg-[#23395B] text-white rounded-full hover:bg-[#1B2A41] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Login
              </button>
            )}
            {mode !== 'signup' && (
              <button
                onClick={() => handleModeChange('signup')}
                className="px-5 py-2 bg-[#4B6587] text-white rounded-full hover:bg-[#3E5368] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Sign Up
              </button>
            )}
            {mode !== 'guest' && (
              <button
                onClick={() => handleModeChange('guest')}
                className="px-5 py-2 bg-[#6A89CC] text-white rounded-full hover:bg-[#4A73C1] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Guest
              </button>
            )}
            {mode !== 'reset' && (
              <button
                onClick={() => handleModeChange('reset')}
                className="px-5 py-2 bg-[#4C70A2] text-white rounded-full hover:bg-[#3D5C83] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Forgot Password?
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative" style={{ backgroundImage: `url(${operatingRoomImage})` }}>
        <div className="absolute bottom-5 left-0 right-0 bg-[#444783]/40 text-white p-6 rounded-2xl backdrop-blur-md shadow-md w-full max-w-4xl mx-auto">
            {/* Top-Left Circle */}
            <div className="absolute top-2 left-2 bg-[#444783] border-4 border-white-900 m-4 w-8 h-8 rounded-full"></div>

            {/* Bottom-Right Circle */}
            <div className="absolute bottom-2 right-2 bg-[#444783] border-4 border-white-900 m-4 w-8 h-8 rounded-full"></div>

            <p className="text-xl font-large p-10">
            {mode === 'guest'
                ? 'Guest users can explore limited features for a better experience before signing up.'
                : 'EMR systems empower users with quick, accurate access to health data, enhancing the quality of care, efficiency, and overall patient experience.'}
            </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;