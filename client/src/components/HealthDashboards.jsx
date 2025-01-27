import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectHealthStats, fetchHealthData } from '../redux/slices/healthStatsSlices';
import HealthCard from './HealthCard';

// Import icons
import bloodPressureIcon from '../assets/blood-icon.svg';
import heartRateIcon from '../assets/heart-icon.svg';
import weightIcon from '../assets/weight-icon.svg';

const HealthDashboards = () => {
  const dispatch = useDispatch();
  const { bloodPressure, heartRate, weight } = useSelector(selectHealthStats);

  // Fetch health data on component mount
  useEffect(() => {
    dispatch(fetchHealthData());
    // Set up polling to automatically update data
    const interval = setInterval(() => {
      dispatch(fetchHealthData());
    }, 60000); // Fetch every 30 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [dispatch]);

  return (
    <>
      <div className="flex gap-3 mb-6 justify-between">
        <HealthCard
          icon={bloodPressureIcon}
          title="Blood Pressure"
          value={bloodPressure || 'N/A'}
          unit="Systolic/Diastolic (mmHg)"
          lastUpdated="Automatically updated"
          bgColor="#FFE7EA"
        />
        <HealthCard
          icon={heartRateIcon}
          title="Heart Rate"
          value={heartRate || 'N/A'}
          unit="Beats Per Minute (bpm)"
          lastUpdated="Automatically updated"
          bgColor="#FFF3E5"
        />
        <HealthCard
          icon={weightIcon}
          title="Weight"
          value={weight || 'N/A'}
          unit="Kilograms (kg)"
          lastUpdated="Automatically updated"
          bgColor="#E6F9F5"
        />
      </div>
    </>
  );
};

export default HealthDashboards;