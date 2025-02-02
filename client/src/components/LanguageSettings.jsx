import * as React from 'react';
import { useState } from 'react';

// ToggleSwitch Component
export function ToggleSwitch({ isEnabled = false, onToggle }) {
  const handleToggle = () => {
    onToggle(!isEnabled);
  };

  return (
    <div className="flex flex-col self-stretch my-auto w-[81px]">
      <div
        role="switch"
        aria-checked={isEnabled}
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleToggle();
          }
        }}
        className={`flex flex-col justify-center items-start p-2 shadow-sm rounded-[50px] cursor-pointer transition-colors duration-200 ${
          isEnabled ? 'bg-green-900' : 'bg-zinc-100'
        }`}
      >
        <div
          className={`shrink-0 rounded-full h-[25px] w-[25px] bg-white transition-transform duration-200 ${
            isEnabled ? 'transform translate-x-[30px]' : 'transform translate-x-0'
          }`}
        />
      </div>
    </div>
  );
}

// AccessibilityOption Component
export function AccessibilityOption({ title, isEnabled, onToggle }) {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
      <div className="flex gap-10 items-center self-stretch my-auto text-xl tracking-tighter leading-10 text-black w-[205px]">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[297px]">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start w-full">
              <div className="w-full rounded-none">{title}</div>
            </div>
          </div>
        </div>
      </div>
      <ToggleSwitch isEnabled={isEnabled} onToggle={onToggle} />
    </div>
  );
}

// LanguageSettings Component
export function LanguageSettings() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
  ];

  const accessibilityOptions = [
    {
      title: 'Enable Dark Mode',
      isEnabled: darkModeEnabled,
      onToggle: setDarkModeEnabled,
    },
    {
      title: 'Enable Screen Reader Support',
      isEnabled: screenReaderEnabled,
      onToggle: setScreenReaderEnabled,
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col px-5 pt-7 pb-40 bg-white rounded-xl max-w-[730px] max-md:pb-24">
      <div className="self-start text-sm font-medium tracking-tighter leading-6 text-black">
        Language & Accessibility Options
      </div>
      <div className="flex flex-col mt-5 min-h-[382px] max-md:max-w-full">
        {/* Language Selection */}
        <div className="flex flex-col w-full font-medium text-black min-h-[139px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-4 w-full rounded-xl border border-gray-50 border-solid max-md:px-5 max-md:max-w-full">
            <div className="flex gap-10 justify-center items-center max-w-full min-h-[108px] w-[454px]">
              <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[454px]">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <label
                        htmlFor="language"
                        className="max-w-full text-sm tracking-tighter leading-6 rounded-none w-[140px]"
                      >
                        Preferred Language
                      </label>
                      <div className="flex overflow-hidden flex-col justify-center py-px w-full text-base tracking-tighter leading-none max-md:max-w-full">
                        <select
                          id="language"
                          value={selectedLanguage}
                          onChange={(e) => setSelectedLanguage(e.target.value)}
                          className="flex flex-col justify-center px-6 py-5 w-full bg-gray-50 rounded-[60px] max-md:px-5 max-md:max-w-full"
                          aria-label="Select preferred language"
                        >
                          {languages.map((lang) => (
                            <option key={lang.value} value={lang.value}>
                              {lang.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Settings */}
        <div className="flex flex-col mt-5 w-full min-h-[223px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col pt-4 pr-8 pb-20 pl-4 w-full rounded-xl border border-gray-50 border-solid max-md:pr-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full text-sm font-medium tracking-tighter leading-6 text-black w-[454px]">
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex flex-col items-start w-full max-md:max-w-full">
                    <div className="max-w-full rounded-none w-[140px]">
                      Accessibility Settings
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
              {accessibilityOptions.map((option, index) => (
                <div key={index} className={index > 0 ? 'mt-5' : ''}>
                  <AccessibilityOption
                    title={option.title}
                    isEnabled={option.isEnabled}
                    onToggle={option.onToggle}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageSettings;