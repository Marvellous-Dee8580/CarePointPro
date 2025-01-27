import React from 'react';
import { FaCalendarAlt, FaFilter, FaCreditCard } from 'react-icons/fa'; // import icons
import nairaicon from '../assets/naira-icons.svg'
import CreditCard from '../assets/credit-card-icon.png'

const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      type: 'Consultation Fee',
      amount: '25,670',
      date: 'August 12',
      status: 'Success',
      account: 'Visa 9467',
      description: 'Expires on 12/09',  // Added description
    },
    {
      id: 2,
      type: 'Surgery Payment',
      amount: '200,000',
      date: 'August 15',
      status: 'Failed',
      account: 'Mastercard 1212',
      description: 'Expires on 15/09',  // Added description
    },
    {
      id: 3,
      type: 'Surgery Payment',
      amount: '200,000',
      date: 'August 15',
      status: 'Pending',
      account: 'Mastercard 1212',
      description: 'Expires on 20/09',  // Added description
    },
    // Add more transactions as needed
  ];

  // Function to get the first letter of each word in the type
  const getInitials = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  };

  return (
    <div>
      <div className="flex justify-between items-center m-4 p-4">
        <h2 className="text-xl font-bold text-green-700">Transaction History</h2>
        <div className="flex space-x-4">
          {/* Choose Date Button */}
          <button className="flex items-center px-4 py-2 bg-white text-[#35375F] border border-[#35375F] rounded-md hover:bg-[#f4f4f4]">
            <FaCalendarAlt className="mr-2" />
            Choose Date
          </button>
          {/* Filter Button */}
          <button className="flex items-center px-4 py-2 bg-[#35375F] text-white rounded-md hover:bg-[#2c2a4b]">
            <FaFilter className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      <table className="w-full table-auto p-4">
        <thead>
          <tr className="text-left border-b p-4">
            <th className="py-2">Transactions</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
            <th className="py-2">Accounts</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b p-4">
              <td className="py-2 flex items-center">
                {/* Label/Icon for the first letter of each word in the transaction type */}
                <div className="flex items-center justify-center w-8 h-8 bg-green-700 text-white rounded-full mr-4">
                  {getInitials(transaction.type)}
                </div>
                {transaction.type}
              </td>
              <td className="py-2 w-auto">
                <img src={nairaicon} alt="Naira Icon" className="w-5 h-5 mr-2" />
                {transaction.amount}
              </td>
              <td className="py-2">{transaction.date}</td>
              <td className="py-2">
                <span
                  className={`font-bold text-white py-1 px-3 rounded-md min-w-[100px] text-center ${
                    transaction.status === 'Success'
                      ? 'bg-green-500'
                      : transaction.status === 'Pending'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="py-2 flex items-center">
              <img src={CreditCard} alt="Naira Icon" className="w-5 h-5 mr-2" />
                <div>
                  {transaction.account}
                  <p className="text-sm text-gray-500 mt-1">{transaction.description}</p> {/* Description under Account */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;