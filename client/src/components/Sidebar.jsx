import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import dashboard from '../assets/dashboard-icon.svg';
import appointment from '../assets/appointment-icon.svg';
import medrecord from '../assets/files-icon.svg';
import billings from '../assets/billing-icon.svg';
import paymentIcon from '../assets/prescription-icon.svg';
import historyIcon from '../assets/prescription-icon.svg';
import invoiceIcon from '../assets/prescription-icon.svg';
import prescription from '../assets/prescription-icon.svg';
import health from '../assets/care-icon.svg';
import support from '../assets/support-icon.svg';
import logo from '../assets/logo.png';

const Sidebar = () => {
  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: dashboard, path: '/' },
    { name: 'Appointments', icon: appointment, path: '/appointments' },
    { name: 'Medical Records', icon: medrecord, path: '/medical-records' },
    {
      name: 'Billings & Payments',
      icon: billings,
      submenu: [
        { name: 'View Invoices', icon: invoiceIcon, path: '/billings/invoices' },
        { name: 'Make Payments', icon: paymentIcon, path: '/billings/payments' },
        { name: 'Payment History', icon: historyIcon, path: '/billings/history' },
      ],
    },
    { name: 'Prescriptions', icon: prescription, path: '/prescriptions' },
    { name: 'Health Tools', icon: health, path: '/health-tools' },
    { name: 'Support', icon: support, path: '/support' },
  ];

  const toggleBillingDropdown = () => {
    setIsBillingOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } bg-white h-screen overflow-hidden transition-all duration-300 shadow-lg fixed md:relative`}
      >
        {/* Logo and Toggle Button */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            {/* Only show the logo and hamburger icon when the sidebar is collapsed */}
            <img
              src={logo}
              alt="InnovaForge Logo"
              className={`w-${isSidebarOpen ? '40' : '10'} h-10 transition-all`}
            />
          </div>
          {/* Always visible Hamburger Icon */}
          <button
            className="p-2 bg-gray-100 rounded-full shadow-md"
            onClick={toggleSidebar}
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Menu Items (Only show when sidebar is expanded) */}
        {isSidebarOpen && (
          <div className="p-2 mt-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                {!item.submenu ? (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={item.icon}
                      alt={`${item.name} Icon`}
                      className="w-6 h-6"
                    />
                    <span className="text-gray-800 font-semibold text-base">
                      {item.name}
                    </span>
                  </Link>
                ) : (
                  <div>
                    <div
                      className="flex items-center justify-between py-3 px-4 rounded-md hover:bg-gray-100 cursor-pointer"
                      onClick={toggleBillingDropdown}
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.icon}
                          alt={`${item.name} Icon`}
                          className="w-6 h-6"
                        />
                        <span className="text-gray-800 font-semibold text-base">
                          {item.name}
                        </span>
                      </div>
                      <FiChevronDown
                        size={20}
                        className={`transition-transform ${
                          isBillingOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>
                    {isBillingOpen && (
                      <div className="pl-10 space-y-2">
                        {item.submenu.map((submenuItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={submenuItem.path}
                            className="flex items-center space-x-4 text-gray-600 text-sm py-2 px-3 hover:text-gray-800 hover:bg-gray-200 rounded-md cursor-pointer"
                          >
                            <img
                              src={submenuItem.icon}
                              alt={`${submenuItem.name} Icon`}
                              className="w-5 h-5"
                            />
                            <span>{submenuItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;