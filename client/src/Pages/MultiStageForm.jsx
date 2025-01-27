import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StepIcon from '../assets/treatment-icon.svg'; // Custom icon for Step 1
import './MultiStageForm.css'; // Your custom CSS

const MultiStageForm = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    patientName: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    cityState: '',
    emergencyName: '',
    emergencyGender: '',
    emergencyRelationship: '',
    emergencyPhone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStage = () => {
    if (currentStage < 3) setCurrentStage(currentStage + 1);
  };

  const prevStage = () => {
    if (currentStage > 1) setCurrentStage(currentStage - 1);
  };

  const handleSubmit = () => {
    console.log('Submitted Data: ', formData);
    // Add your submission logic here
  };

  const steps = [
    {
      icon: StepIcon,
      label: 'STEP 1',
      description: 'Enter the patient\'s basic information.',
    },
    {
      icon: StepIcon,
      label: 'STEP 2',
      description: 'Provide appointment and address details.',
    },
    {
      icon: StepIcon,
      label: 'STEP 3',
      description: 'Add emergency contact information.',
    },
  ];

  return (
    <motion.div
      className="modal flex flex-col md:flex-row"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
    >
      {/* Left Side: Form */}
      <div className="form-container flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#0B6063]">
          Patient Information Form
        </h1>

        {/* Step Indicators */}
        <div className="stages flex justify-between mb-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                currentStage === index + 1 ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <div
                className="icon-container flex items-center justify-center w-14 h-14 mb-2 rounded-full border-4"
                style={{
                  backgroundColor: '#0B6063',
                  borderColor: '#FFFFFF',
                }}
              >
                <img
                  src={step.icon}
                  alt={step.label}
                  className="w-6 h-6"
                />
              </div>
              <span className="text-sm font-bold">{step.label}</span>
              {currentStage === index + 1 && (
                <p className="text-xs mt-2 text-center font-bold">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Stage Content */}
        {currentStage === 1 && (
          <div className="form-step">
            <h3 className="text-xl font-bold mb-4">Patient Information</h3>
            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            />
            <button onClick={nextStage} className="bg-blue-500 text-white py-2 px-4 rounded">
              Next
            </button>
          </div>
        )}

        {currentStage === 2 && (
          <div className="form-step">
            <h3 className="text-xl font-bold mb-4">Appointment Details</h3>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            />
            <input
              type="text"
              name="cityState"
              placeholder="City & State"
              value={formData.cityState}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            />
            <div className="flex justify-between">
              <button onClick={prevStage} className="bg-gray-500 text-white py-2 px-4 rounded">
                Back
              </button>
              <button onClick={nextStage} className="bg-blue-500 text-white py-2 px-4 rounded">
                Next
              </button>
            </div>
          </div>
        )}

        {currentStage === 3 && (
          <div className="form-step">
            <h3 className="text-xl font-bold mb-4">Emergency Contact Information</h3>
            <input
              type="text"
              name="emergencyName"
              placeholder="Emergency Contact Name"
              value={formData.emergencyName}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            />
            <select
              name="emergencyGender"
              value={formData.emergencyGender}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              name="emergencyRelationship"
              value={formData.emergencyRelationship}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            >
              <option value="">Select Relationship</option>
              <option value="Sibling">Sibling</option>
              <option value="Parent">Parent</option>
              <option value="Friend">Friend</option>
            </select>
            <input
              type="text"
              name="emergencyPhone"
              placeholder="Phone Number"
              value={formData.emergencyPhone}
              onChange={handleInputChange}
              className="w-full p-2 border mb-4 rounded"
            />
            <div className="flex justify-between">
              <button onClick={prevStage} className="bg-gray-500 text-white py-2 px-4 rounded">
                Back
              </button>
              <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Side: Summary */}
      <div className="summary flex-1 p-6 bg-white border-l">
        <h3 className="text-xl font-bold mb-4">Summary</h3>
        <p>Patient Name: {formData.patientName}</p>
        <p>Date of Birth: {formData.dob}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Address: {formData.address}</p>
        <p>Zip Code: {formData.zipCode}</p>
        <p>City & State: {formData.cityState}</p>
        <p>Emergency Name: {formData.emergencyName}</p>
        <p>Gender: {formData.emergencyGender}</p>
        <p>Relationship: {formData.emergencyRelationship}</p>
        <p>Emergency Phone: {formData.emergencyPhone}</p>
      </div>
    </motion.div>
  );
};

export default MultiStageForm;