import * as React from 'react';
import { FirstAidGrid } from './FirstAidGrid';

export default function FirstAidTips() {
  return (
    <div className="flex overflow-hidden flex-col items-start px-11 pt-5 pb-20 bg-white max-md:px-5">
      <div className="flex flex-wrap gap-10 items-center text-base font-semibold tracking-tight leading-9 text-neutral-900 max-md:max-w-full">
      </div>
      <div className="mt-6 ml-5 w-full max-w-[853px] max-md:max-w-full">
        <FirstAidGrid />
      </div>
      <div className="mt-9 ml-5 w-full max-w-[853px] max-md:max-w-full">
        <FirstAidGrid />
      </div>
    </div>
  );
}