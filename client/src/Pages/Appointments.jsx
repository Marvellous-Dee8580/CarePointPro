import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AppointmentIcon from '../assets/calendar-icon.svg'; // Ensure this is the correct icon filename
import { PatientAppointmentBooking } from './PatientAppointmentBooking';

const Appointments = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="flex flex-col h-screen p-6 relative">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Appointments</h1>
          <h2 className="text-sm text-gray-500 mt-2">
            This is the last update for the past 7 days{' '}
            <span className="font-bold cursor-pointer">Check now</span>
          </h2>
        </div>
        <button
          onClick={toggleFormVisibility}
          className="flex items-center font-bold bg-[#A8DADC] text-black py-2 px-4 rounded-full text-sm"
        >
          <FaPlusCircle className="mr-2" size={16} /> New Appointment
        </button>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-grow items-center justify-center text-center">
        <div>
          <img
            src={AppointmentIcon}
            alt="Appointment Icon"
            className="w-36 h-36 mx-auto"
          />
          <p className="text-2xl font-bold text-[#A8DADC] mt-4">
            No appointment yet
          </p>
        </div>
      </div>

      {/* Multi-Stage Form Modal */}
      <AnimatePresence>
        {isFormVisible && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleFormVisibility} // Close modal when clicking outside
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-full md:w-[1000px] bg-white shadow-lg"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
            >
              {/* Inside the modal, we now split the content equally */}
              <div className="flex">
                {/* Form side (left side) */}
                <div className="w-2/2 p-6">
                  <PatientAppointmentBooking />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Appointments;