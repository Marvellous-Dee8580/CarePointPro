import React from 'react';

function PatientStep({ src, step, label, alt }) {
  return (
    <div className="flex flex-col items-center space-y-2"> {/* Added space between elements */}
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain aspect-square w-[35px]"
      />
      <div className="z-10 text-xs tracking-tighter text-zinc-400">{step}</div>
      <div className="self-stretch text-xs tracking-tighter text-black">{label}</div>
    </div>
  );
}

export default PatientStep;

// import React from "react";

// function PatientStep({ src, step, label, alt, isActive }) {
//   return (
//     <div className={`flex flex-col items-center space-y-2 ${isActive ? "text-teal-600 font-bold" : "text-zinc-400"}`}>
//       <img loading="lazy" src={src} alt={alt} className={`object-contain aspect-square w-[35px] ${isActive ? "border-2 border-teal-600 rounded-full" : ""}`} />
//       <div className="z-10 text-xs tracking-tighter">{step}</div>
//       <div className="self-stretch text-xs tracking-tighter">{label}</div>
//     </div>
//   );
// }

// export default PatientStep;