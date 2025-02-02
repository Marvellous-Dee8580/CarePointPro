import * as React from 'react';
import { useState } from 'react';
import { PasswordReset } from '../components/PasswordReset';
import NotificationSettings from '../components/NotificationSettings';
import LanguageSettings from '../components/LanguageSettings';

// EditButton Component
export function EditButton() {
  return (
    <button
      className="flex gap-2.5 items-center px-5 py-1.5 text-base tracking-tighter text-white whitespace-nowrap bg-green-900 rounded-xl"
      tabIndex={0}
    >
      <div className="gap-1.5 self-stretch my-auto w-[26px]">Edit</div>
      <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
    </button>
  );
}

// UserInfo Component
export function UserInfo({ user }) {
  return (
    <div className="flex gap-5 items-center min-w-[240px]">
      <img
        loading="lazy"
        src={user.avatar}
        alt="Profile avatar for user"
        className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
      />
      <div className="flex flex-col self-stretch my-auto w-[177px]">
        <div className="flex gap-10 items-center w-full text-base font-bold tracking-wide leading-none max-w-[168px] text-neutral-600">
          <div className="flex gap-2.5 items-center self-stretch my-auto w-[150px]">
            <div className="self-stretch my-auto w-[150px]">{user.name}</div>
          </div>
        </div>
        <div className="flex flex-col mt-2.5 w-full text-xs tracking-tighter text-black">
          <div className="flex gap-1.5 items-center w-full">
            <div className="flex flex-col self-stretch my-auto w-[177px]">
              <div className="gap-1.5 self-stretch w-full whitespace-nowrap">
                {user.email}
              </div>
              <div className="gap-1.5 self-stretch mt-1 w-full">
                {user.phone}
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 mt-1 w-full min-h-[15px]" />
        </div>
      </div>
    </div>
  );
}

// SettingsNav Component
export function SettingsNav({ activeSection, onSectionClick }) {
  return (
    <aside className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col pt-5 pb-80 mx-auto w-full text-xs tracking-tighter leading-6 bg-white rounded-xl max-md:pb-24 max-md:mt-3">
        <div
          className={`gap-2.5 self-start px-5 py-1.5 text-green-900 rounded-xl bg-stone-900 bg-opacity-20 ${
            activeSection === 'My profile' ? 'bg-opacity-40' : ''
          }`}
          onClick={() => onSectionClick('My profile')}
        >
          My profile
        </div>
        <nav className="flex flex-col items-start pr-12 pl-3 mt-8 text-black max-md:pr-5">
          <a
            href="#password"
            className={`mt-8 ${activeSection === 'Change Password' ? 'text-green-900' : ''}`}
            onClick={() => onSectionClick('Change Password')}
          >
            Change Password
          </a>
          <a
            href="#notifications"
            className={`mt-8 ${activeSection === 'Notification Preferences' ? 'text-green-900' : ''}`}
            onClick={() => onSectionClick('Notification Preferences')}
          >
            Notification Preferences
          </a>
          <a
            href="#privacy"
            className={`mt-8 ${activeSection === 'Privacy Settings' ? 'text-green-900' : ''}`}
            onClick={() => onSectionClick('Privacy Settings')}
          >
            Privacy Settings
          </a>
          <a
            href="#accessibility"
            className={`mt-8 ${activeSection === 'Language & Accessibility Options' ? 'text-green-900' : ''}`}
            onClick={() => onSectionClick('Language & Accessibility Options')}
          >
            Language & Accessibility Options
          </a>
        </nav>
      </div>
    </aside>
  );
}

// ProfileSection Component
export function ProfileSection({ title, children, onEdit }) {
  return (
    <div className="flex overflow-hidden flex-col justify-center p-3.5 mt-7 w-full rounded-xl border border-gray-50 border-solid">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full">
        <div className="flex flex-col min-w-[240px]">
          <div className="text-base font-bold tracking-wide leading-none text-neutral-600">
            {title}
          </div>
          {children}
        </div>
        <button
          onClick={onEdit}
          className="flex gap-2.5 items-center px-5 py-1.5 text-base tracking-tighter text-white whitespace-nowrap bg-green-900 rounded-xl"
          aria-label={`Edit ${title.toLowerCase()}`}
        >
          <span className="w-[26px]">Edit</span>
          <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

// Settings Component
export function Settings() {
  const [activeSection, setActiveSection] = useState('My profile');

  const handleEdit = React.useCallback(() => {
    // Handle edit action
  }, []);

  const userData = {
    name: 'Daniel Rahman',
    email: 'Danielr@gmail.com',
    phone: '+234 914 8748 282',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/421c7c19f10d80f07512d932458da7ef7768ce86551f024c4b74c321e1c46e21?apiKey=91a57716fa0c4017b5d1b119afeacf36&'
  };

  return (
    <main className="flex flex-col px-6 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col self-start max-md:max-w-full">
        <h1 className="text-base font-semibold tracking-tight leading-9 text-neutral-900">
          Settings
        </h1>
        <p className="text-xs tracking-tighter text-black">
          We provide immediate assistance during critical situations.
        </p>
      </div>

      <div className="mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <SettingsNav
            activeSection={activeSection}
            onSectionClick={setActiveSection}
          />
          <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow px-5 pt-7 pb-14 w-full bg-white rounded-xl max-md:mt-3 max-md:max-w-full">
              {/* <h2 className="text-xl font-medium tracking-tighter leading-tight text-black">
                {activeSection}
              </h2> */}
              {activeSection === 'My profile' && (
                <><div className="flex overflow-hidden flex-col justify-center px-3.5 py-2.5 w-full rounded-xl border border-gray-50 border-solid max-md:max-w-full">
                                  <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
                                      <UserInfo user={userData} />
                                      <EditButton />
                                  </div>
                              </div><ProfileSection
                                  title="Personal Information"
                                  onEdit={handleEdit}
                              >
                                      <div className="flex flex-col mt-5 w-full text-xs tracking-tighter">
                                          <div className="flex gap-10 items-center w-full">
                                              <div className="flex flex-col self-stretch my-auto w-[177px]">
                                                  <label className="gap-1.5 self-stretch max-w-full font-medium text-stone-900 text-opacity-20">
                                                      First Name
                                                  </label>
                                                  <div className="gap-1.5 self-stretch mt-1 w-full text-black">
                                                      Success
                                                  </div>
                                              </div>
                                              <div className="flex flex-col self-stretch my-auto w-[177px]">
                                                  <label className="gap-1.5 self-stretch max-w-full font-medium text-stone-900 text-opacity-20">
                                                      Last Name
                                                  </label>
                                                  <div className="gap-1.5 self-stretch mt-1 w-full text-black">
                                                      Success
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </ProfileSection><ProfileSection
                                      title="Address"
                                      onEdit={handleEdit}
                                  >
                                      <div className="flex flex-col mt-5 w-full text-xs tracking-tighter">
                                          <div className="flex gap-10 items-start">
                                              <div className="flex flex-col w-[177px]">
                                                  <label className="gap-1.5 self-stretch max-w-full font-semibold text-stone-900 text-opacity-20">
                                                      Country
                                                  </label>
                                                  <div className="gap-1.5 self-stretch mt-1 w-full text-black">
                                                      Nigeria
                                                  </div>
                                              </div>
                                              <div className="flex flex-col w-[177px]">
                                                  <label className="gap-1.5 self-stretch max-w-full font-bold text-stone-900 text-opacity-20">
                                                      City/State
                                                  </label>
                                                  <div className="gap-1.5 self-stretch mt-1 w-full text-black">
                                                      Lagos, Lagos
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </ProfileSection></>
              )}
              {activeSection === 'Change Password' && (
                  <PasswordReset/>
              )}
              {activeSection === 'Notification Preferences' && (
                <NotificationSettings/> 
              )}
              {activeSection === 'Privacy Settings' && (
                <LanguageSettings/>
              )}
              {activeSection === 'Language & Accessibility Options' && (
                 <LanguageSettings/>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Settings;