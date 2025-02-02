import React, { useState } from 'react';

const NotificationCard = ({ title, children }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-6 py-4 w-full rounded-xl border border-gray-50 border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div className="flex gap-10 justify-center items-center self-stretch my-auto text-base font-medium tracking-tighter text-black min-w-[240px] w-[454px] max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[454px]">
            <div className="flex flex-col items-start w-full max-md:max-w-full">
              <div className="flex flex-col items-start max-w-full w-[376px]">
                <div className="max-w-full rounded-none w-[205px] max-md:pr-5">
                  {title}
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex flex-col self-stretch my-auto w-[81px]">
      <div
        className={`flex flex-col justify-center items-start p-2 shadow-sm rounded-[50px] cursor-pointer transition-colors duration-200 ${
          isToggled ? 'bg-green-900' : 'bg-zinc-100'
        }`}
        onClick={handleToggle}
      >
        <div
          className={`shrink-0 rounded-full h-[25px] w-[25px] bg-white transition-transform duration-200 ${
            isToggled ? 'transform translate-x-[30px]' : 'transform translate-x-0'
          }`}
        />
      </div>
    </div>
  );
};

const NotificationSettings = () => {
  const notifications = [
    { title: 'Appointment Notifications' },
    { title: 'Test Results & Reports' },
    { title: 'Prescription & Medication Reminders' }
  ];

  return (
    <div className="flex overflow-hidden flex-col px-5 pt-7 pb-96 bg-white rounded-xl max-w-[730px] max-md:pb-24">
      <div className="flex flex-col max-md:max-w-full">
        <div className="text-xl font-medium tracking-tighter leading-tight text-black max-md:max-w-full">
          Notification
        </div>
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <NotificationCard title="General Settings">
            <button className="flex gap-2.5 justify-center items-center self-stretch px-9 py-2.5 my-auto text-base tracking-tighter text-white whitespace-nowrap bg-green-900 rounded-xl w-[100px] max-md:px-5">
              <span className="gap-1.5 self-stretch my-auto w-[26px]">
                Update
              </span>
            </button>
          </NotificationCard>

          {notifications.map((notification, index) => (
            <NotificationCard key={index} title={notification.title}>
              <ToggleSwitch />
            </NotificationCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;