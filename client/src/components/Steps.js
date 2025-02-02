export const STEPS = {
    PATIENT_INFO: 1,
    APPOINTMENT_DETAILS: 2,
    REVIEW: 3
  };
  
  export const INITIAL_PATIENT_INFO = {
    name: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    cityState: '',
    emergencyContact: {
      name: '',
      gender: '',
      relationship: '',
      phone: ''
    }
  };
  
  export const INITIAL_APPOINTMENT_INFO = {
    doctor: '',
    date: '',
    time: '',
    reason: '',
    insurance: '',
    notes: ''
  };