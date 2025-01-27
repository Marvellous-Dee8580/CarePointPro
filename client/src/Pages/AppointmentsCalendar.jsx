import React, { useState } from 'react';
import './AppointmentCalendar.css'; // Import for styling

const AppointmentsCalendar = () => {
  // Dummy data for appointments
  const appointments = [
    {
      id: 1,
      date: '2024-12-08', // YYYY-MM-DD format
      time: '10:00am - 11:00am',
      doctors: 'Dr. Allen Marcus, Dr. Angela Not',
      image: 'https://c8.alamy.com/comp/DBFMDP/japanese-woman-smiling-DBFMDP.jpg' // Dummy image URL
    }
  ];

  // Helper function to format dates as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Generate calendar days for the current month
  const generateCalendar = (currentMonth) => {
    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    const dates = [];
    let currentDate = startOfMonth;
    
    while (currentDate <= endOfMonth) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dates = generateCalendar(currentMonth);

  // Event handlers for month navigation
  const goToPreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const goToNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>All Appointments</h2>
        <div className="calendar-controls">
          <button onClick={goToPreviousMonth}>Previous</button>
          <span>{currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}</span>
          <button onClick={goToNextMonth}>Next</button>
        </div>
      </div>

      <div className="calendar-grid">
        {dates.map((date) => {
          const formattedDate = formatDate(date);
          const appointment = appointments.find(
            (app) => app.date === formattedDate
          );

          return (
            <div key={formattedDate} className="calendar-cell">
              <div className="date-label">{date.getDate()}</div>
              {appointment ? (
                <div className="appointment">
                  <img src={appointment.image} alt="doctor" />
                  <div className="appointment-info">
                    <p>{appointment.time}</p>
                    <p>{appointment.doctors}</p>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentsCalendar;

// import React from "react";
// import "./AppointmentCalendar.css"; // Optional CSS for styling

// const AppointmentsCalendar = () => {
//   const appointments = [
//     {
//       date: "2024-12-09",
//       time: "10:00 AM - 11:00 AM",
//       doctors: "Dr. Allen Marcus, Dr. Angela Not",
//     },
//   ];

//   const renderDays = () => {
//     const days = [];
//     const startDate = new Date("2024-11-26");
//     const endDate = new Date("2024-12-12");

//     while (startDate <= endDate) {
//       const dateString = startDate.toISOString().split("T")[0];
//       const appointment = appointments.find((appt) => appt.date === dateString);

//       days.push(
//         <div key={dateString} className="calendar-day">
//           <div className="date">{startDate.getDate()}</div>
//           {appointment && (
//             <div className="appointment">
//               <div className="time">{appointment.time}</div>
//               <div className="doctors">{appointment.doctors}</div>
//             </div>
//           )}
//         </div>
//       );

//       startDate.setDate(startDate.getDate() + 1);
//     }

//     return days;
//   };

//   return (
//     <div className="calendar">
//       <div className="calendar-header">
//         <div>MON</div>
//         <div>TUE</div>
//         <div>WED</div>
//         <div>THU</div>
//         <div>FRI</div>
//         <div>SAT</div>
//         <div>SUN</div>
//       </div>
//       <div className="calendar-body">{renderDays()}</div>
//     </div>
//   );
// };

// export default AppointmentsCalendar;