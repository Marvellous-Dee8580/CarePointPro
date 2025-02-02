import React from 'react';

function ClinicHeader({ clinicInfo }) {
  return (
    <div className="flex gap-2.5 self-start font-extrabold tracking-tighter leading-6">
      <img
        loading="lazy"
        src={clinicInfo.logo}
        className="object-contain shrink-0 rounded-full aspect-square w-[34px]"
        alt={`${clinicInfo.name} Logo`}
      />
      <div className="my-auto basis-auto">{clinicInfo.name}</div>
      <div className="self-center">ID: {clinicInfo.id}</div>
    </div>
  );
}

export default ClinicHeader;