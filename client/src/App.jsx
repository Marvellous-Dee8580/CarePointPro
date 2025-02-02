import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './Pages/Dashboard';
import Appointments from './Pages/Appointments';
import MedicalRecord from './Pages/MedicalRecord';
import Invoices from './Pages/Invoices';
import Payments from './Pages/Payments';
import PaymentHistory from './Pages/PaymentHistory';
import Prescriptions from './Pages/Prescriptions';
import HealthTools from './Pages/HealthTools';
import Support from './Pages/Support';
import Signup from './Pages/Auth/SignIn';
import AppointmentCalendar from './Pages/AppointmentsCalendar';
import Emergency from './Pages/Emergency';
import Telemedicine from './Pages/TeleMedicine';
import Settings from './Pages/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointmentsdata" element={<AppointmentCalendar />} />
          <Route path="medical-records" element={<MedicalRecord />} />
          <Route path="medical-records/view" element={<MedicalRecord viewMode="view" />} />
          <Route path="medical-records/add" element={<MedicalRecord viewMode="add" />} />
          <Route path="billings/invoices" element={<Invoices />} />
          <Route path="billings/payments" element={<Payments />} />
          <Route path="billings/history" element={<PaymentHistory />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="health-tools" element={<HealthTools />} />
          <Route path="support" element={<Support />} />
          <Route path="emergency-service" element={<Emergency />} />
          <Route path="telemedicine" element={<Telemedicine />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;