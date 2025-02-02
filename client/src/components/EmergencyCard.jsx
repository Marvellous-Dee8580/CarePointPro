// import React from 'react';

// const EmergencyCard = ({ icon, title, subtitle, openingTime, closingTime }) => {
//   return (
//     <div className="flex overflow-hidden flex-col px-5 py-8 mx-auto my-5 w-full bg-slate-200 rounded-[30px] max-md:mt-6">
//       <div className="flex gap-10 items-start">
//         <div className="flex gap-2.5 items-center">
//           <div className="flex gap-2.5 items-center self-stretch px-1 py-1.5 my-auto bg-white rounded-2xl h-[30px] min-h-[30px] w-[30px]">
//             {icon}
//           </div>
//           <div className="flex flex-col self-stretch my-auto w-[150px]">
//             <div className="text-base font-bold tracking-wide leading-relaxed text-neutral-600">
//               {title}
//             </div>
//             <div className="text-xs tracking-tighter text-black">
//               {subtitle}
//             </div>
//           </div>
//         </div>
//         <button 
//           className="flex flex-col justify-center px-4 py-0.5 text-xs font-bold tracking-tighter text-black whitespace-nowrap bg-stone-50 min-h-[19px] rounded-[30px] w-[71px]"
//           aria-label={`Call ${title}`}
//         >
//           <div className="flex gap-1.5 items-center">
//             <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
//             <div className="self-stretch my-auto">Call</div>
//           </div>
//         </button>
//       </div>
//       <div className="flex gap-10 mt-10 text-xs tracking-tighter">
//         <div className="flex flex-col flex-1">
//           <div className="font-semibold leading-6 text-neutral-600">
//             Opening Time
//           </div>
//           <div className="text-center text-black">{openingTime}</div>
//         </div>
//         <div className="flex flex-col flex-1">
//           <div className="font-semibold leading-6 text-neutral-600">
//             Closing Time
//           </div>
//           <div className="text-center text-black">{closingTime}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmergencyCard;

import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import EmergencyCallInterface from './EmergencyCallInterface';

const EmergencyCard = ({ icon, title, subtitle, openingTime, closingTime }) => {
  const [showCallerInterface, setShowCallerInterface] = useState(false);

  const handleCallClick = () => {
    setShowCallerInterface(true);
  };

  const closeCallerInterface = () => {
    setShowCallerInterface(false);
  };

  return (
    <>
      <div className="flex overflow-hidden flex-col px-5 py-8 mx-auto my-5 w-full bg-slate-200 rounded-[30px] max-md:mt-6">
        <div className="flex gap-10 items-start">
          <div className="flex gap-2.5 items-center">
            <div className="flex gap-2.5 items-center self-stretch px-1 py-1.5 my-auto bg-white rounded-2xl h-[30px] min-h-[30px] w-[30px]">
              {icon}
            </div>
            <div className="flex flex-col self-stretch my-auto w-[150px]">
              <div className="text-base font-bold tracking-wide leading-relaxed text-neutral-600">
                {title}
              </div>
              <div className="text-xs tracking-tighter text-black">
                {subtitle}
              </div>
            </div>
          </div>
          <button
            onClick={handleCallClick}
            className="flex flex-col justify-center px-4 py-0.5 text-xs font-bold tracking-tighter text-black whitespace-nowrap bg-stone-50 min-h-[19px] rounded-[30px] w-[71px]"
            aria-label={`Call ${title}`}
          >
            <div className="flex gap-1.5 items-center">
              <Phone size={16} />
              <div>Call</div>
            </div>
          </button>
        </div>
        <div className="flex gap-10 mt-10 text-xs tracking-tighter">
          <div className="flex flex-col flex-1">
            <div className="font-semibold leading-6 text-neutral-600">
              Opening Time
            </div>
            <div className="text-center text-black">{openingTime}</div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="font-semibold leading-6 text-neutral-600">
              Closing Time
            </div>
            <div className="text-center text-black">{closingTime}</div>
          </div>
        </div>
      </div>

      {showCallerInterface && <EmergencyCallInterface onClose={closeCallerInterface} />}
    </>
  );
};

export default EmergencyCard;