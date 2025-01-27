// import React from "react";
// import {
//   HeartIcon,
//   ScaleIcon,
//   CurrencyDollarIcon,
// } from "@heroicons/react/24/outline";
// import Sidebar from "../components/Sidebar.jsx";
// import HealthDashboard from "../components/HealthDashboards.jsx";
// import Calendar from "../components/CalendarComponent.jsx";
// import CalendarComponent from "../components/CalendarComponent.jsx";

// const Dashboard = () => {
//   return (
// <div className="flex-1 flex flex-col p-6 bg-gray-50 overflow-auto">
//         {/* Header Section */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold">Good Morning, Natalie</h1>
//           <p className="text-gray-600">
//             Wishing you a peaceful and healing day ahead
//           </p>
//         </div>

//         <div className="flex gap-4 mb-6">
//           {/* Parent container for Health Stats and Monthly Expenses */}
//           <div className="flex flex-col gap-4 flex-1">
//             {/* Health Stats Section */}
//             <div className="flex gap-4">
//               <div className="flex-1">
//                 <HealthDashboard />
//               </div>
//             </div>

//             {/* Monthly Expenses Section */}
//             <div className="flex gap-4">
//               <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-gray-600">Monthly Expenses</h3>
//                   <CurrencyDollarIcon className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <p className="text-2xl font-bold mt-2">₦50,000</p>
//               </div>

//               <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
//                 {/* You can add content here */}
//               </div>
//             </div>
//             <div className="bg-white rounded-lg shadow-md p-4">
//               <h3 className="text-lg font-bold mb-4">Transaction History</h3>
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr>
//                     <th className="border-b-2 p-3">Transactions</th>
//                     <th className="border-b-2 p-3">Amount</th>
//                     <th className="border-b-2 p-3">Date</th>
//                     <th className="border-b-2 p-3">Status</th>
//                     <th className="border-b-2 p-3">Account</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="hover:bg-gray-100">
//                     <td className="p-3">Consultation Fee</td>
//                     <td className="p-3">₦25,570</td>
//                     <td className="p-3">August 12</td>
//                     <td className="p-3 text-green-600">Success</td>
//                     <td className="p-3">Visa ****497</td>
//                   </tr>
//                   <tr className="hover:bg-gray-100">
//                     <td className="p-3">Surgery Payment</td>
//                     <td className="p-3">₦200,000</td>
//                     <td className="p-3">August 15</td>
//                     <td className="p-3 text-red-600">Failed</td>
//                     <td className="p-3">Mastercard ****912</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Calendar Section */}
//           <div className="flex-1 p-4 bg-white rounded-lg shadow-md w-full">
//             <CalendarComponent />
//           </div>
//         </div>

//         {/* Transaction History Table */}
        
//       </div>
//   );
// };

// export default Dashboard;

// import React from "react";
// import HealthDashboard from "../components/HealthDashboards.jsx";
// import CalendarComponent from "../components/CalendarComponent.jsx";

// const Dashboard = () => {
//   return (
//     <div className="flex flex-col p-6 bg-gray-50 overflow-auto">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">Good Morning, Natalie</h1>
//         <p className="text-gray-600">Wishing you a peaceful and healing day ahead</p>
//       </div>
//       {/* Other content */}
//       <div className="flex gap-4">
//         <div className="flex-1">
//           <HealthDashboard />
//         </div>
//         <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
//           <CalendarComponent />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import HealthDashboard from '../components/HealthDashboards.jsx';
import CalendarComponent from '../components/CalendarComponent.jsx';
import TransactionHistory from '../components/TransactionHistory.jsx';
import MonthlyExpenses from '../components/MonthlyExpenses.jsx'; // Import the new component

const Dashboard = () => {
  return (
    <div className="flex flex-col p-6 bg-gray-50 overflow-auto">
      {/* Greeting Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Good Morning, Natalie</h1>
        <p className="text-gray-600">Wishing you a peaceful and healing day ahead</p>
      </div>

      {/* Main Content Section */}
      <div className="flex gap-4">
        {/* Left Column: Health Dashboard and Monthly Expenses */}
        <div className="w-[70%]">
          <div className="p-4 bg-white rounded-lg shadow-md mb-6">
            <HealthDashboard />
          </div>
          <div className="rounded-lg shadow-md mb-6">
            {/* <h2 className="text-xl font-bold mb-4">Monthly Expenses</h2> */}
            <MonthlyExpenses />
          </div>
          <div className="rounded-lg shadow-md">
            {/* <h2 className="text-xl font-bold mb-4">Monthly Expenses</h2> */}
            <TransactionHistory />
          </div>
        </div>

        {/* Right Column: Calendar Component */}
        <div className="w-[30%] p-4 bg-white rounded-lg shadow-md">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;