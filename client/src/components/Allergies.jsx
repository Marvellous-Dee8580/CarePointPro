import React from 'react';

function Allergies({ allergies }) {
  return (
    <div className="flex flex-col items-start text-black">
      <div className="text-sm font-extrabold tracking-tight">
        Allergies
      </div>
      <div className="mt-3 text-xs tracking-tight">
        <ul>
          {allergies.map((allergy, index) => (
            <li key={index}>
              <span className="font-medium">{allergy.allergen}:</span> {allergy.reaction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Allergies;