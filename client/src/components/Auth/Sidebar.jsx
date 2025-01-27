import React from 'react';
import {
  HomeIcon,
  CalendarIcon,
  FolderIcon,
  CreditCardIcon,
  DocumentTextIcon,
  HeartIcon,
  SupportIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
  const menus = [
    { name: 'Dashboard', icon: <HomeIcon className="w-6 h-6" /> },
    { name: 'Appointments', icon: <CalendarIcon className="w-6 h-6" /> },
    { name: 'Medical Records', icon: <FolderIcon className="w-6 h-6" /> },
    { name: 'Billings & Payments', icon: <CreditCardIcon className="w-6 h-6" /> },
    { name: 'Prescriptions', icon: <DocumentTextIcon className="w-6 h-6" /> },
    { name: 'Health Tools', icon: <HeartIcon className="w-6 h-6" /> },
    { name: 'Support', icon: <SupportIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 text-center border-b">
        <h2 className="text-xl font-bold">InnovaForge</h2>
        <p className="text-sm">Avenic Clinic Center</p>
      </div>
      <nav className="mt-4">
        <ul className="space-y-4">
          {menus.map((menu, index) => (
            <li
              key={index}
              className="flex items-center px-6 py-2 hover:bg-gray-100 rounded-lg text-gray-600 font-semibold"
            >
              <span className="mr-4 text-purple-600">{menu.icon}</span>
              {menu.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;