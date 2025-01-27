import React from 'react'

const PaymentHistory = () => {
  return (
    <div className="flex flex-col min-h-screen">
     <h1 className="text-2xl font-semibold text-gray-800 mb-4">Transaction History</h1>
      {/* Main Content */}
      <main className="flex-1 bg-white rounded-lg shadow">
        <div className="container mx-auto p-4">
          {/* Content for the new page */}
          <p className="text-lg text-gray-500 mt-4">Paynents History will appear here.</p>
        </div>
      </main>
    </div>
  );
}

export default PaymentHistory