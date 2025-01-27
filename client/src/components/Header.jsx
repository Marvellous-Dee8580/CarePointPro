import React, { useState } from 'react';
import './Sidebar.css';
import NotificationIcon from '../assets/Vector.svg';
import MailIcon from '../assets/Bell.svg';
import ProfilePicture from '../assets/profile-icon.png';

const Header = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  return (
    <header className="header flex items-center justify-between">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      {/* Header Icons */}
      <div className="header-icons flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="icon-container bg-gray-200 p-2 rounded-lg flex items-center space-x-2">
          <img src={NotificationIcon} alt="Notification" className="icon" />
          <span className="notification-badge"></span>
        </div>

        {/* Mail Icon */}
        <div className="icon-container bg-gray-200 p-2 rounded-lg flex items-center space-x-2">
          <img src={MailIcon} alt="Mail" className="icon" />
        </div>

        {/* Profile Section */}
        <div className="profile flex items-center space-x-3 cursor-pointer" onClick={toggleProfileDropdown}>
          <img
            src={ProfilePicture}
            alt="Profile"
            className="profile-picture w-10 h-10 rounded-full"
          />
          <div className="profile-info">
            <span className="profile-name text-sm font-semibold">Andreas Natalie</span>
            <span className="profile-email text-xs text-gray-500">andreasnatalie@gmail.com</span>
          </div>
        </div>

        {/* Profile Dropdown */}
        {isProfileDropdownOpen && (
          <div className="profile-dropdown bg-white shadow-lg rounded-md absolute top-16 right-4 w-48">
            <ul>
              <li className="dropdown-item">Settings</li>
              <li className="dropdown-item">Profile</li>
              <li className="dropdown-item">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;