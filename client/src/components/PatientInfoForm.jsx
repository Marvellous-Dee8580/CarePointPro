import React from 'react';
import { InputField, PhoneInput, SelectField } from './FormFields';

export function PatientInfoForm({ formData, onChange, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg p-6 shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <InputField
            label="Patient name"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        
        <InputField
          label="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          name="dob"
          type="date"
        />
        
        <InputField
          label="Email address"
          value={formData.email}
          onChange={handleChange}
          name="email"
          type="email"
        />
        
        <div className="col-span-2">
          <PhoneInput
            label="Phone number"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
          />
        </div>
        
        <div className="col-span-2">
          <InputField
            label="Address"
            value={formData.address}
            onChange={handleChange}
            name="address"
          />
        </div>
        
        <InputField
          label="Zip code"
          value={formData.zipCode}
          onChange={handleChange}
          name="zipCode"
        />
        
        <InputField
          label="City & State"
          value={formData.cityState}
          onChange={handleChange}
          name="cityState"
        />
        
        <div className="col-span-2 mt-4">
          <h3 className="text-sm font-bold mb-4">Emergency Contact Information</h3>
          
          <InputField
            label="Emergency Contact Name"
            value={formData.emergencyContact.name}
            onChange={handleChange}
            name="emergencyContact.name"
          />
          
          <div className="grid grid-cols-2 gap-4">
            <SelectField
              label="Gender"
              value={formData.emergencyContact.gender}
              onChange={handleChange}
              name="emergencyContact.gender"
              options={[
                { value: '', label: 'Select gender' },
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' }
              ]}
            />
            
            <SelectField
              label="Relationship"
              value={formData.emergencyContact.relationship}
              onChange={handleChange}
              name="emergencyContact.relationship"
              options={[
                { value: '', label: 'Select relationship' },
                { value: 'spouse', label: 'Spouse' },
                { value: 'parent', label: 'Parent' },
                { value: 'sibling', label: 'Sibling' },
                { value: 'friend', label: 'Friend' }
              ]}
            />
          </div>
          
          <PhoneInput
            label="Phone number"
            value={formData.emergencyContact.phone}
            onChange={handleChange}
            name="emergencyContact.phone"
          />
        </div>
      </div>
      
      <div className="flex justify-end mt-6">
        <button 
          type="submit"
          className="px-6 py-2 text-sm font-bold text-white bg-teal-800 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </form>
  );
}