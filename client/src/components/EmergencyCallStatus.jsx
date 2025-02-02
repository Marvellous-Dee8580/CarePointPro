import * as React from 'react';

function EmergencyCallStatus() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 w-full">
      <div className="text-base font-bold tracking-wide leading-relaxed text-neutral-600">
        911
      </div>
      <div className="text-xs tracking-tighter text-black">
        Calling Ambulance
      </div>
    </div>
  );
}

export default EmergencyCallStatus;