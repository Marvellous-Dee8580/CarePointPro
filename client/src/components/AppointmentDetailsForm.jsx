import React from 'react';
import { InputField, SelectField } from './FormFields';

export function AppointmentDetailsForm({ formData, onChange, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg p-6 shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <SelectField
            label="Select Doctor"
            value={formData.doctor}
            onChange={handleChange}
            name="doctor"
            options={[
              { value: '', label: 'Choose a doctor' },
              { value: 'dr-smith', label: 'Dr. Smith' },
              { value: 'dr-jones', label: 'Dr. Jones' }
            ]}
          />
        </div>
        
        <InputField
          label="Appointment Date"
          value={formData.date}
          onChange={handleChange}
          name="date"
          type="date"
        />
        
        <InputField
          label="Preferred Time"
          value={formData.time}
          onChange={handleChange}
          name="time"
          type="time"
        />
        
        <div className="col-span-2">
          <InputField
            label="Reason for Visit"
            value={formData.reason}
            onChange={handleChange}
            name="reason"
          />
        </div>
        
        <div className="col-span-2">
          <SelectField
            label="Insurance Provider"
            value={formData.insurance}
            onChange={handleChange}
            name="insurance"
            options={[
              { value: '', label: 'Select insurance' },
              { value: 'aetna', label: 'Aetna' },
              { value: 'bluecross', label: 'Blue Cross' }
            ]}
          />
        </div>
        
        <div className="col-span-2">
          <InputField
            label="Additional Notes"
            value={formData.notes}
            onChange={handleChange}
            name="notes"
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