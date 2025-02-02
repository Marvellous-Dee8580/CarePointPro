import * as React from 'react';

export function FirstAidCard({ title, steps }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow justify-center px-9 py-7 w-full bg-slate-200 rounded-[30px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-col w-full">
          <div className="flex gap-10 items-center w-full text-base font-bold tracking-wide leading-none max-w-[168px] text-neutral-600">
            <div className="flex gap-2.5 items-center self-stretch my-auto w-[150px]">
              <div className="self-stretch my-auto w-[150px]">{title}</div>
            </div>
          </div>
          <div className="flex flex-col mt-3.5 w-full text-xs tracking-tighter text-black">
            {steps.map((step, index) => (
              <div key={index} className={`gap-1.5 ${index === 0 ? 'self-start w-[150px]' : 'self-stretch mt-1 w-full'}`}>
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}