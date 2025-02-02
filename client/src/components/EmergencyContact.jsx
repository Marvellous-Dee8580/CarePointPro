import React from 'react';

function EmergencyContact({ contact }) {
  return (
    <div className="mt-6">
      <div className="text-sm font-extrabold tracking-tight text-black">
        Emergency Contact
      </div>
      <div className="mt-2 font-bold text-black">
        Name: {contact.name} ({contact.relationship})
      </div>
      <div className="mt-2 font-bold text-black">
        Phone: {contact.phone}
      </div>
    </div>
  );
}

export default EmergencyContact;