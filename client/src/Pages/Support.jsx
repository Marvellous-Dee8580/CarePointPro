// import React from 'react';

// // FormInput Component
// function FormInput({ label, type = "text", value, required, placeholder, options }) {
//   const id = `${label.toLowerCase().replace(/\s/g, '')}-input`;

//   return (
//     <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[301px]">
//       <div className="flex gap-1.5 max-w-full rounded-none w-[105px]">
//         <label htmlFor={id} className="text-base tracking-tighter text-black">
//           {label}
//         </label>
//         {required && (
//           <span className="self-start text-lg tracking-tighter leading-none text-red-600">
//             *
//           </span>
//         )}
//       </div>
//       <div className="flex overflow-hidden flex-col w-full text-base tracking-tighter whitespace-nowrap text-zinc-400">
//         {type === "select" ? (
//           <select
//             id={id}
//             required={required}
//             className="px-5 py-5 bg-gray-50 rounded-[60px]"
//             aria-label={label}
//           >
//             {options.map((option, index) => (
//               <option key={index} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         ) : (
//           <input
//             type={type}
//             id={id}
//             value={value}
//             required={required}
//             placeholder={placeholder}
//             className="px-5 py-5 bg-gray-50 rounded-[60px]"
//             aria-label={label}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// // Support Component
// const Support = () => {
//   const issueTypes = ["Technical Problem", "Billing Issue", "Feature Request", "Other"];

//   return (
//     <main className="flex flex-col mt-4 ml-6 w-full max-w-[925px] max-md:max-w-full">
//       <nav className="flex flex-wrap gap-8 items-center self-start text-base font-semibold tracking-tight leading-none text-neutral-900 max-md:max-w-full">
//         <button className="self-stretch my-auto">Chat with support</button>
//         <button className="self-stretch my-auto">Faqs</button>
//         <button className="gap-2.5 self-stretch px-7 py-3 my-auto text-lg font-bold tracking-tighter leading-none text-white bg-green-900 rounded-xl min-h-[48px] w-[189px] max-md:px-5">
//           Report an Issue
//         </button>
//         <button className="self-stretch my-auto">Contact Us</button>
//       </nav>
//       <form className="flex overflow-hidden flex-col px-11 pt-8 pb-3.5 mt-4 bg-gray-100 rounded-3xl max-md:px-5 max-md:max-w-full">
//         <div className="ml-3.5 text-base font-medium tracking-tight leading-9 text-neutral-900 max-md:mr-1 max-md:max-w-full">
//           If you encounter any problems while using the platform, you
//           can report them quickly by following these steps
//         </div>
//         <div className="flex flex-col mt-6 max-md:max-w-full">
//           <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
//             <FormInput
//               label="First Name"
//               value="Mike"
//               required={true}
//             />
//             <FormInput
//               label="Last Name"
//               value="Success"
//               required={true}
//             />
//           </div>
//           <div className="flex flex-wrap gap-10 items-center mt-5 w-full max-md:max-w-full">
//             <FormInput
//               label="Email"
//               type="email"
//               value="Mike@gmail.com"
//               required={true}
//             />
//             <FormInput
//               label="Issue Type"
//               type="select"
//               required={true}
//               options={issueTypes}
//             />
//           </div>
//           <div className="flex flex-col mt-5 w-full max-md:max-w-full">
//             <label htmlFor="attachments" className="max-w-full text-base font-medium tracking-tighter text-black rounded-none w-[184px]">
//               Attachments (Optional)
//             </label>
//             <input
//               type="file"
//               id="attachments"
//               className="flex overflow-hidden flex-col w-full max-md:max-w-full"
//               aria-label="Upload attachments"
//             />
//           </div>
//           <div className="flex flex-col mt-4 w-full text-base font-medium tracking-tighter min-h-[185px] max-md:max-w-full">
//             <label htmlFor="description" className="max-w-full text-black whitespace-nowrap rounded-none w-[184px] max-md:pr-5">
//               Description
//             </label>
//             <textarea
//               id="description"
//               placeholder="Briefly describe the problem"
//               className="px-4 pt-2.5 pb-24 bg-gray-50 rounded-3xl max-md:pr-5 max-md:pb-28 max-md:max-w-full"
//               aria-label="Problem description"
//             />
//           </div>
//         </div>
//         <button type="submit" className="self-center px-9 py-3 mt-6 max-w-full text-lg font-bold tracking-tighter leading-none text-white whitespace-nowrap bg-green-900 rounded-xl w-[138px] max-md:px-5">
//           Submit
//         </button>
//       </form>
//     </main>
//   );
// };

// export default Support;
// import React, { useState } from 'react';
// import ChatInterface from './ChatInterface';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faCommentDots, faGlobe } from '@fortawesome/free-solid-svg-icons';



// // Success Modal Component
// const SuccessModal = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="flex flex-col items-center px-12 py-12 bg-white rounded-3xl max-w-[755px]">
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ddd2562675a2aa8478ecddf7f14e6d649dea55f0f90f58579272653476886d9"
//           alt="Success confirmation icon"
//           className="w-40 mb-6"
//         />
//         <p className="text-center text-neutral-900 text-base font-semibold">
//           Your issue has been successfully submitted.
//           <br /> We will review your report and get back to you within 24 hours.
//         </p>
//         <div className="flex gap-4 mt-6">
//           <button onClick={onClose} className="px-5 py-3 border border-green-900 text-green-900 rounded-xl">
//             Close
//           </button>
//           <button className="px-5 py-3 bg-green-900 text-white rounded-xl">View your report</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // FormInput Component
// function FormInput({ label, type = "text", value, required, placeholder, options }) {
//   const id = `${label.toLowerCase().replace(/\s/g, '')}-input`;

//   return (
//     <div className="flex flex-col w-full mb-6">
//       <div className="flex gap-1.5 mb-2">
//         <label htmlFor={id} className="text-base font-medium text-black">
//           {label}
//         </label>
//         {required && <span className="text-lg text-red-600">*</span>}
//       </div>
//       <div className="relative">
//         {type === "select" ? (
//           <select
//             id={id}
//             required={required}
//             className="w-full px-5 py-4 bg-gray-50 rounded-[60px] appearance-none focus:outline-none focus:ring-2 focus:ring-green-900"
//             style={{
//               backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'right 1rem center',
//               backgroundSize: '1.5rem',
//             }}
//           >
//             {options.map((option, index) => (
//               <option key={index} value={option} className="hover:bg-green-100">
//                 {option}
//               </option>
//             ))}
//           </select>
//         ) : (
//           <input
//             type={type}
//             id={id}
//             value={value}
//             required={required}
//             placeholder={placeholder}
//             className="w-full px-5 py-4 bg-gray-50 rounded-[60px] focus:outline-none focus:ring-2 focus:ring-green-900"
//           />
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import ChatInterface from './ChatInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCommentDots, faGlobe } from '@fortawesome/free-solid-svg-icons';
import CustomerSupportImage from '../assets/customer-support.png';
import Faqs from './Faqs'


// Success Modal Component
const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center px-12 py-12 bg-white rounded-3xl max-w-[755px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ddd2562675a2aa8478ecddf7f14e6d649dea55f0f90f58579272653476886d9"
          alt="Success confirmation icon"
          className="w-40 mb-6"
        />
        <p className="text-center text-neutral-900 text-base font-semibold">
          Your issue has been successfully submitted.
          <br /> We will review your report and get back to you within 24 hours.
        </p>
        <div className="flex gap-4 mt-6">
          <button onClick={onClose} className="px-5 py-3 border border-green-900 text-green-900 rounded-xl">
            Close
          </button>
          <button className="px-5 py-3 bg-green-900 text-white rounded-xl">View your report</button>
        </div>
      </div>
    </div>
  );
};

// FormInput Component
function FormInput({ label, type = 'text', value, required, placeholder, options }) {
  const id = `${label.toLowerCase().replace(/\s/g, '')}-input`;

  return (
    <div className="flex flex-col w-full mb-6">
      <div className="flex gap-1.5 mb-2">
        <label htmlFor={id} className="text-base font-medium text-black">
          {label}
        </label>
        {required && <span className="text-lg text-red-600">*</span>}
      </div>
      <div className="relative">
        {type === 'select' ? (
          <select
            id={id}
            required={required}
            className="w-full px-5 py-4 bg-gray-50 rounded-[60px] appearance-none focus:outline-none focus:ring-2 focus:ring-green-900"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.5rem',
            }}
          >
            {options.map((option, index) => (
              <option key={index} value={option} className="hover:bg-green-100">
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={id}
            value={value}
            required={required}
            placeholder={placeholder}
            className="w-full px-5 py-4 bg-gray-50 rounded-[60px] focus:outline-none focus:ring-2 focus:ring-green-900"
          />
        )}
      </div>
    </div>
  );
}

export const contactSections = [
  {
    title: 'Email Us',
    content: 'Send us an email at [Companyemail@example.com] for detailed inquiries.',
    icon: <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-green-500" />,
    activeHours: null,
  },
  {
    title: 'Call Us',
    content: 'Reach out to our support team at +234 81315272582 during business hours:\nMonday to Friday 9 AM – 6 PM\nSaturday to Sunday 10 AM – 4 PM',
    icon: <FontAwesomeIcon icon={faPhone} className="h-6 w-6 text-green-500" />,
    activeHours: 'Monday to Friday 9 AM – 6 PM\nSaturday to Sunday 10 AM – 4 PM',
  },
  {
    title: 'Live Chat',
    content: 'Use our real-time chat option on the dashboard for instant support.',
    icon: <FontAwesomeIcon icon={faCommentDots} className="h-6 w-6 text-green-500" />,
    activeHours: 'Available 24/7',
  },
  {
    title: 'Visit Us',
    content: 'Our office is located at: Your Office Address',
    icon: <FontAwesomeIcon icon={faGlobe} className="h-6 w-6 text-green-500" />,
    activeHours: null,
  }
];

export function ContactSection({ title, content, icon, activeHours }) {
  return (
    <div className="flex flex-col w-full mb-8">
      <div className="flex items-center space-x-2 mb-4">
        {icon}
        <div className="text-base font-semibold tracking-tight leading-9 text-neutral-900">
          {title}
        </div>
      </div>
      <div className="text-xs tracking-tighter text-black">
        {content.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < content.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
      {activeHours && (
        <div className="mt-2 text-xs text-gray-500">
          <strong>Active Hours:</strong>
          <div>{activeHours}</div>
        </div>
      )}
      <hr className="my-6 border-gray-300" />
    </div>
  );
}

// Support Component
const Support = () => {
  const [activeButton, setActiveButton] = useState('chatSupport');
  const [showSuccess, setShowSuccess] = useState(false);
  const issueTypes = ['Technical Problem', 'Billing Issue', 'Feature Request', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true); // Show the success modal
  };

  const renderForm = () => {
    switch (activeButton) {
      case 'chatSupport':
        return <div className="mt-6 p-8 bg-gray-100 rounded-3xl"><ChatInterface /></div>;
      case 'faqs':
        return <div className="mt-6 p-8 bg-gray-100 rounded-3xl"><Faqs/></div>;
      case 'reportIssue':
        return (
          <form onSubmit={handleSubmit} className="mt-6 p-8 bg-gray-100 rounded-3xl">
            <p className="text-base text-neutral-900 mb-6">
              If you encounter any problems while using the platform, you can report them here.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput label="First Name" value="Mike" required={true} />
              <FormInput label="Last Name" value="Success" required={true} />
              <FormInput label="Email" type="email" value="Mike@gmail.com" required={true} />
              <FormInput label="Issue Type" type="select" required={true} options={issueTypes} />
            </div>
            <div className="mt-6">
              <label htmlFor="attachments" className="block text-base font-medium text-black mb-2">
                Attachments (Optional)
              </label>
              <input type="file" id="attachments" className="w-full" />
            </div>
            <div className="mt-6">
              <label htmlFor="description" className="block text-base font-medium text-black mb-2">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Briefly describe the problem"
                className="w-full px-5 py-4 bg-gray-50 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-900"
                rows={5}
              />
            </div>
            <div className="flex justify-center mt-8">
              <button type="submit" className="px-9 py-3 bg-green-900 text-white rounded-xl hover:bg-green-800 transition-colors">
                Submit
              </button>
            </div>
          </form>
        );
      case 'contactUs':
        return (
            <div className="mt-6 p-8 bg-gray-100 rounded-3xl flex justify-between gap-8">
              <div className="w-full md:w-1/2">
                {contactSections.map((section, index) => (
                  <ContactSection
                    key={index}
                    title={section.title}
                    content={section.content}
                    icon={section.icon}
                    activeHours={section.activeHours}
                  />
                ))}
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={CustomerSupportImage}
                  alt="Customer Support"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          );          
      default:
        return null;
    }
  };

  return (
    <main className="flex flex-col w-full p-6 max-w-7xl mx-auto">
      <nav className="flex flex-wrap gap-4 w-full">
        {['chatSupport', 'faqs', 'reportIssue', 'contactUs'].map((btn) => (
          <button
            key={btn}
            className={`flex-1 py-3 rounded-xl text-lg font-semibold transition-colors ${
              activeButton === btn ? 'bg-green-900 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
            onClick={() => setActiveButton(btn)}
          >
            {btn === 'chatSupport' ? 'Chat with Support' : btn === 'faqs' ? 'FAQs' : btn === 'reportIssue' ? 'Report an Issue' : 'Contact Us'}
          </button>
        ))}
      </nav>
      {renderForm()}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </main>
  );
};

export default Support;