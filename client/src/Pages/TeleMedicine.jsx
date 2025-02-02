import { useState } from 'react';
import ScheduleVirtualkConsultation from '../components/ScheduleVirtualkConsultation';
import ConsultationSessionHistory from '../components/ConsultationSessionHistory';
import ConsultationResults from '../components/ConsultationResult';

export default function Telemedicine() {
  // Default active view is "schedule"
  const [activeView, setActiveView] = useState('schedule');

  return (
    <main className="flex flex-col pr-16 pl-4 mt-4 w-full max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-6 items-center ml-2.5 max-w-full text-base font-semibold tracking-tight leading-9 w-[643px]">
        <button
          onClick={() => setActiveView('schedule')}
          className={`grow self-stretch my-auto rounded-xl min-h-[48px] max-md:px-5 ${
            activeView === 'schedule'
              ? 'bg-green-900 text-white'
              : 'bg-transparent text-green-900'
          }`}
        >
          Schedule Virtual Consultation
        </button>
        <button
          onClick={() => setActiveView('history')}
          className={`gap-2.5 self-stretch px-7 py-3 text-lg font-bold tracking-tighter leading-none rounded-xl min-h-[48px] max-md:px-5 ${
            activeView === 'history'
              ? 'bg-green-900 text-white'
              : 'bg-transparent text-green-900'
          }`}
        >
          Session History
        </button>
        <button
          onClick={() => setActiveView('results')}
          className={`grow shrink self-stretch my-auto rounded-xl min-h-[48px] max-md:px-5 ${
            activeView === 'results'
              ? 'bg-green-900 text-white'
              : 'bg-transparent text-green-900'
          }`}
        >
          Consultations Results
        </button>
      </div>
      <div className="mt-5">
        {activeView === 'schedule' && <ScheduleVirtualkConsultation />}
        {activeView === 'history' && <ConsultationSessionHistory />}
        {activeView === 'results' && <ConsultationResults />}
      </div>
    </main>
  );
}