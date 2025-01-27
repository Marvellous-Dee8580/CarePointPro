import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for the calendar

// Custom CSS for green color and month dropdown
import './calendarStyles.css';

const appointments = [
  {
    date: '2025-01-05',
    time: '10:00 AM',
    description: 'Routine Health Checkup',
    doctor: 'Dr. John Smith',
  },
  {
    date: '2025-01-10',
    time: '2:30 PM',
    description: 'Follow-up on lab tests',
    doctor: 'Dr. Jane Doe',
  },
  {
    date: '2025-01-15',
    time: '11:00 AM',
    description: 'Consultation for back pain',
    doctor: 'Dr. Emily Davis',
  },
  {
    date: '2025-01-05',
    time: '10:00 AM',
    description: 'Routine Health Checkup',
    doctor: 'Dr. John Smith',
  },
  {
    date: '2025-01-10',
    time: '2:30 PM',
    description: 'Follow-up on lab tests',
    doctor: 'Dr. Jane Doe',
  }
];

// Function to assign random colors to appointments
const getRandomColor = (() => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFC300', '#DAF7A6', '#C70039', '#900C3F'];
  let colorIndex = 0;

  return () => {
    const color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Cycle through the colors
    return color;
  };
})();

// Pre-assign random colors to appointments
const appointmentsWithColors = appointments.map((appointment) => ({
  ...appointment,
  color: getRandomColor(),
}));

const CalendarComponent = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Upcoming Appointments</h2>

      {/* Calendar */}
      <div className="calendar-container w-full">
        <Calendar
          onChange={() => {}}
          value={new Date()}
          className="green-calendar w-full mb-4"
          next2Label={null} // Disable the default next month button
          prev2Label={null} // Disable the default previous month button
          showNeighboringMonth={false} // Hide neighboring months
          view="month"
        />
      </div>

      {/* Appointment List */}
      <div className="space-y-4">
        {appointmentsWithColors.map((appointment, index) => (
          <div
            key={index}
            className="grid"
            style={{ gridTemplateColumns: '2% 98%' }} // Adjusted grid layout
          >
            {/* Left Background Color (10% width) */}
            <div
              className="h-full"
              style={{
                backgroundColor: appointment.color,
                borderRadius: '5px 0 0 5px', // Rounded edges on left side
              }}
            ></div>

            {/* Appointment Details (90% width) */}
            <div className="pl-4">
              <p className="text-lg font-bold text-gray-800">{appointment.date}</p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Time:</span> {appointment.time}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Description:</span> {appointment.description}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Doctor:</span> {appointment.doctor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;