import * as React from 'react';

function EmergencyContactInformation() {
  return (
    <div className="flex gap-6 justify-between max-w-full leading-6 w-[338px] mt-7">
      <div className="flex gap-10">
        <div className="flex flex-col items-start text-xs font-semibold tracking-tight text-zinc-500">
          <div className="self-stretch mb-2">EMERGENCY CONTACT NAME</div>
          <div className="z-10 -mt-2.5 text-xs font-medium tracking-tighter text-black">Mary Collins</div>
          <div className="mt-4">PHONE NUMBER</div>
          <div className="text-xs font-medium tracking-tighter text-black">(+234) 8138-161578</div>
        </div>
        <div className="flex flex-col self-start whitespace-nowrap">
          <div className="text-xs font-semibold tracking-tight text-zinc-500 mb-2">GENDER</div>
          <div className="z-10 self-start -mt-2.5 text-xs font-medium tracking-tighter text-black">Male</div>
        </div>
      </div>
      <div className="flex flex-col self-start whitespace-nowrap">
        <div className="text-xs font-semibold tracking-tight text-zinc-500 mb-2">RELATIONSHIP</div>
        <div className="z-10 self-start -mt-2 text-xs font-medium tracking-tighter text-black">Sister</div>
      </div>
    </div>
  );
}

export default EmergencyContactInformation;