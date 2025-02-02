import * as React from 'react';

function GeneralPatientInformation() {
  return (
    <div className="mt-7 w-full max-w-[423px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full leading-6 max-md:mt-7">
            <div className="flex gap-10 text-xs font-semibold tracking-tight mb-4">
              <div className="flex flex-col flex-1 items-start text-black">
                <div className="self-stretch text-xs font-bold tracking-normal mb-2">General Information</div>
                <div className="text-zinc-500">FULL NAME</div>
                <div className="text-xs font-medium tracking-tighter mt-1">Andreas Natalie</div>
                <div className="mt-4 text-zinc-500">PHONE NUMBER</div>
                <div className="text-xs font-medium tracking-tighter mt-1">(+234) 8138-161578</div>
                <div className="mt-4 text-zinc-500">CITY & STATE</div>
                <div className="text-xs font-medium tracking-tighter mt-1">Ikeja, Lagos State</div>
              </div>
              <div className="flex flex-col flex-1 items-start my-auto text-zinc-500">
                <div className="mt-2">DATE OF BIRTH</div>
                <div className="text-xs font-medium tracking-tighter text-black mt-1">05-May-1997</div>
                <div className="mt-4">ADDRESS</div>
                <div className="self-stretch text-xs font-medium tracking-tighter text-black mt-1">Aderin str, Behind...</div>
              </div>
            </div>
            <div className="self-start mt-4 text-xs font-bold tracking-normal text-black">Emergency Contact Information</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start mt-6 text-xs font-semibold tracking-tight leading-6 whitespace-nowrap text-zinc-500 max-md:mt-10">
            <div>EMAIL</div>
            <div className="self-stretch text-xs font-medium tracking-tighter text-black mt-1">Andreasnatalie@gmail.com</div>
            <div className="mt-4">ZIPCODE</div>
            <div className="text-xs font-medium tracking-tighter text-black mt-1">200199</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralPatientInformation;