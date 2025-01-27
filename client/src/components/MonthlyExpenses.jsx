import React from 'react';
import ExpenseIcon from '../assets/naira-icon.svg'; // Import the expense icon
import CurrencyIcon from '../assets/naira-icons.svg'; // Import the currency icon (₵)

const MonthlyExpenses = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md grid grid-cols-2 gap-6">
      {/* Monthly Expense Section 1 */}
      <div className="relative p-4 border rounded-lg shadow">
        <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold py-2 px-3 rounded-lg shadow">
          Pending payment
        </span>
        <h2 className="text-l font-bold text-green-700 mb-4">Monthly Expenses</h2>
        <p className="text-gray-600 mb-2">This month, you've spent</p>
        <div className="flex items-center">
          <img src={ExpenseIcon} alt="Expense Icon" className="w-10 h-10 mr-4" />
          <div className="flex items-center">
            <span className="text-3xl font-bold text-black mr-2">50,000</span>
            <img src={CurrencyIcon} alt="Currency Icon" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Monthly Expense Section 2 */}
      <div className="relative p-4 border rounded-lg shadow bg-gray-200">
        {/* <span className="absolute top-2 right-2 bg-yellow-400 text-white text-sm font-semibold py-1 px-3 rounded-lg shadow">
          Pending payment
        </span>
        <h2 className="text-xl font-bold text-green-700 mb-4">Monthly Expenses</h2>
        <p className="text-gray-600 mb-2">This month, you've spent</p>
        <div className="flex items-center">
          <img src={ExpenseIcon} alt="Expense Icon" className="w-10 h-10 mr-4" />
          <div className="flex items-center">
            <span className="text-4xl font-bold text-black mr-2">75,000</span>
            <img src={CurrencyIcon} alt="Currency Icon" className="w-6 h-6" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MonthlyExpenses;