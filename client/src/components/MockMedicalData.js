export const mockPatientData = {
    followUpDays: 7,
    clinicInfo: {
      name: 'Avenic Clinic Center',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/796e8542122f3c24340a166e264936fde4b4f5eea184a5c3618675f6d4868da2?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36',
      id: '12345678'
    },
    patientInfo: {
      name: 'Andrea Natalie',
      gender: 'Female',
      bloodType: 'O+',
      dateOfBirth: '05/15/1987'
    },
    medicalInfo: {
      department: 'Cardiology Department',
      diagnosis: 'Hypertension and Hypercholesterolemia',
      doctorsNotes: 'Patient presented with elevated blood pressure and cholesterol levels. Lifestyle changes recommended, along with prescribed medication.'
    },
    medications: {
      active: [
        { name: 'Amoxicillin', dosage: '500mg', frequency: '3x daily', duration: '7 days' },
        { name: 'Metformin', dosage: '500mg', frequency: '2x daily', status: 'Ongoing' }
      ],
      discontinued: [
        { name: 'Ibuprofen', dosage: '200mg', frequency: 'As needed', discontinuedDate: 'December 1, 2024' }
      ]
    },
    emergencyContact: {
      name: 'Michael Natalie',
      relationship: 'Husband',
      phone: '+234 987 654 3210'
    },
    allergies: [
      { allergen: 'Penicillin', reaction: 'Causes rash and swelling' },
      { allergen: 'Shellfish', reaction: 'Results in severe stomach upset' }
    ],
    labResults: {
      bloodTests: [
        { test: 'Hemoglobin', value: '13.2 g/dL', status: 'Normal' },
        { test: 'Cholesterol', value: '250 mg/dL', status: 'High' },
        { test: 'Fasting Blood Glucose', value: '110 mg/dL', status: 'Slightly Elevated' }
      ],
      imagingTests: [
        { test: 'X-Ray', result: 'No fractures, mild lumbar strain noted.' }
      ]
    }
  };