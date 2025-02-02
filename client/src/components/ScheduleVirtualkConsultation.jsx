import * as React from 'react';
import TelemedicinePayment from '../components/TelemedicinePayment'; // Ensure this is imported

function ScheduleVirtualkConsultation() {
  const [selectedTime, setSelectedTime] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [virtualType, setVirtualType] = React.useState('');
  const [clinicType, setClinicType] = React.useState('');
  const [specialist, setSpecialist] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex overflow-hidden flex-col border rounded-xl px-16 py-7 bg-white max-w-[925px] max-md:px-5 m-auto"
      >
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <DropdownSelect
              label="Virtual type"
              value={virtualType}
              onChange={setVirtualType}
              options={[
                { value: 'video', label: 'Video Call' },
                { value: 'audio', label: 'Audio Call' },
                { value: 'chat', label: 'Chat' },
              ]}
              placeholder="Select Virtual Type"
            />

            <DropdownSelect
              label="Clinic Type"
              value={clinicType}
              onChange={setClinicType}
              options={[
                { value: 'general', label: 'General Practice' },
                { value: 'specialist', label: 'Specialist Clinic' },
                { value: 'dental', label: 'Dental Clinic' },
              ]}
              placeholder="Select Clinic Type"
            />

            <DropdownSelect
              label="Specialist"
              value={specialist}
              onChange={setSpecialist}
              options={[
                { value: 'cardio', label: 'Cardiologist' },
                { value: 'derma', label: 'Dermatologist' },
                { value: 'neuro', label: 'Neurologist' },
              ]}
              placeholder="Select Specialist"
            />

            <div className="flex flex-wrap gap-10 items-center self-center mt-7 text-base font-medium tracking-tighter max-md:max-w-full">
              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[358px]">
                <label htmlFor="timeInput" className="text-black">
                  Select Time
                </label>
                <input
                  id="timeInput"
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-5 py-5 bg-gray-50 rounded-[60px] text-black focus:outline-none focus:ring-2 focus:ring-green-900"
                />
              </div>

              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[358px]">
                <label htmlFor="dateInput" className="text-black">
                  Date
                </label>
                <input
                  id="dateInput"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-5 py-5 bg-gray-50 rounded-[60px] text-black focus:outline-none focus:ring-2 focus:ring-green-900"
                />
              </div>
            </div>

            <div className="flex flex-col mt-7 w-full max-md:max-w-full">
              <label htmlFor="amountInput" className="text-black">
                Amount
              </label>
              <input
                id="amountInput"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-5 py-5 bg-gray-50 rounded-[60px] text-black focus:outline-none focus:ring-2 focus:ring-green-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Proceed to Payment
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-xl font-bold">
              &times;
            </button>
            <TelemedicinePayment />
          </div>
        </div>
      )}
    </>
  );
}

const DropdownSelect = ({ label, value, onChange, options, placeholder }) => (
  <div className="flex flex-col mt-7 w-full max-md:max-w-full">
    <label className="text-base font-medium tracking-tighter text-black">
      {label}
    </label>
    <div className="w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-5 py-5 bg-gray-50 rounded-[60px] text-black focus:outline-none focus:ring-2 focus:ring-green-900"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default ScheduleVirtualkConsultation;