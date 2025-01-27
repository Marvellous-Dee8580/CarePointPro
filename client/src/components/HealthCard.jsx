import React from 'react';
import PropTypes from 'prop-types';
import './HealthCard.css';

const HealthCard = ({
  icon,
  title,
  value,
  unit = '',
  lastUpdated,
  bgColor = '#f0f0f0',
}) => {
  return (
    <div
      className="relative rounded-lg shadow-md flex flex-col justify-center items-center overflow-hidden"
      style={{
        width: '100%', // Ensures responsiveness
        maxWidth: '300px', // Restricts maximum width
        height: '250px', // Fixed height for consistency
        backgroundColor: bgColor,
        borderRadius: '20px',
      }}
    >
      {/* Top Left Section (Icon, Title, and Unit) */}
      <div className="absolute top-2 left-2 m-2 flex items-center">
        {/* Icon */}
        <div
          className="rounded bg-white flex items-center justify-center"
          style={{ width: '50px', height: '50px' }}
        >
          <img src={icon} alt={`${title} icon`} className="w-10 h-8" />
        </div>

        {/* Title and Unit */}
        <div className="ml-3 flex flex-col">
          <h3 className="text-base font-bold">{title}</h3>
          {unit && <span className="text-xs text-gray-500">{unit}</span>}
        </div>
      </div>

      {/* Value Section */}
      <div className="flex flex-col items-center mt-16">
        <span className="text-2xl font-bold truncate">{value}</span>
      </div>

      {/* Bottom Right Icon */}
      <div
        className="absolute bottom-1 right-1 rounded-full py-1 flex items-center justify-center"
        style={{ width: '120px', height: '120px' }}
      >
        <img src={icon} alt={`${title} icon`} className="w-24 h-24" />
      </div>

      {/* Last Updated */}
      <p className="text-xs font-bold text-gray-500 absolute bottom-2 left-2">
        {lastUpdated}
      </p>
    </div>
  );
};

// PropTypes
HealthCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.string.isRequired,
  unit: PropTypes.string,
  lastUpdated: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

export default HealthCard;