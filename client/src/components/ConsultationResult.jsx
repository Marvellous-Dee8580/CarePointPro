import React, { useState } from 'react';

// Helper function to get file icon based on file extension
const getFileIcon = (fileType) => {
  if (fileType.includes('pdf')) {
    return 'https://cdn.icon-icons.com/icons2/2699/PNG/512/pdf_file_icon_168504.png'; // PDF icon
  } else if (fileType.includes('image')) {
    return 'https://cdn.icon-icons.com/icons2/2699/PNG/512/image_icon_168515.png'; // Image icon
  } else if (fileType.includes('word')) {
    return 'https://cdn.icon-icons.com/icons2/2699/PNG/512/word_icon_168513.png'; // Word icon
  } else {
    return 'https://cdn.icon-icons.com/icons2/2699/PNG/512/file_icon_168501.png'; // Default file icon
  }
};

// FileUpload Component with dynamic file icon
export function FileUpload({ onFileChange, fileName }) {
  const [fileIcon, setFileIcon] = useState(null);

  // Handle file change and update icon
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileChange(file);
      setFileIcon(getFileIcon(file.type)); // Set the correct file icon
    }
  };

  return (
    <div className="flex flex-col mt-5 w-full min-h-[114px]">
      <label htmlFor="file-upload" className="text-base font-medium tracking-tighter text-black">
        Upload Medical Result
      </label>
      <div className="relative flex items-center justify-center w-full bg-gray-50 rounded-xl border border-gray-300 p-5 cursor-pointer">
        <input
          type="file"
          id="file-upload"
          className="absolute inset-0 opacity-0 cursor-pointer"
          accept=".pdf,.jpeg,.png,.docx"
          aria-label="Upload Medical Result"
          onChange={handleFileChange}
        />
        <img
          src={fileIcon || 'https://cdn.builder.io/api/v1/image/assets/TEMP/1be3c2808f8a635ac3b5af114aaea5dd00b312af999d9b3af2390c031a91ac15?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36'}
          alt="Upload Icon"
          className="w-6 h-6"
        />
      </div>
      {fileName && (
        <div className="mt-2 flex items-center gap-2">
          <img src={fileIcon} alt="File Icon" className="w-6 h-6" />
          <span className="text-sm text-green-700">Selected: {fileName}</span>
        </div>
      )}
      <span className="text-sm text-zinc-400 mt-1">
        PDF, JPEG, PNG, DOCX (Max file size: 10 MB)
      </span>
    </div>
  );
}

// FormField Component
export function FormField({
  label,
  value,
  onChange,
  required,
  type = 'text',
  name,
  placeholder,
}) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-base font-medium text-black">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 mt-1 bg-gray-50 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-600"
        required={required}
      />
    </div>
  );
}

// ActionButton for Modal footer
function ActionButton({ text, variant, onClick }) {
  return (
    <div className="flex justify-center items-center flex-1 shrink basis-8 min-w-[240px]">
      <button
        className={`flex justify-center items-center px-4 py-2.5 w-full rounded-lg border border-solid shadow-sm ${
          variant === 'green'
            ? 'border-white bg-green-900 bg-opacity-50 text-white'
            : 'border-gray-200 bg-white text-slate-900'
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

// UploadArea Component for Modal body
export function UploadArea({ uploadButtons, dropzoneIcon }) {
  return (
    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
      <div className="flex overflow-hidden flex-col w-full bg-white rounded-none max-md:max-w-full">
        <div
          className="flex overflow-hidden flex-col justify-center items-center px-20 py-16 rounded-lg border border-dashed border-green-900 border-opacity-50 max-md:px-5 max-md:max-w-full"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              // Handle file upload
            }
          }}
        >
          <div className="flex flex-col items-center">
            <img
              loading="lazy"
              src={dropzoneIcon}
              alt=""
              className="object-contain aspect-square w-[43px]"
            />
            <div className="mt-1 text-base font-medium text-gray-900">
              Drop file or Browse
            </div>
            <div className="mt-1 text-sm leading-none text-stone-500">
              Format: pdf, docx, doc & Max file size: 25 MB
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-4 pb-2 w-full rounded-none bg-neutral-100 max-md:max-w-full">
          <div className="flex flex-wrap gap-4 justify-center items-center self-center max-w-full text-base font-semibold w-[564px]">
            {uploadButtons.map((button, index) => (
              <div key={index} className="flex items-start self-stretch my-auto w-[220px]">
                <button
                  className={`flex flex-1 shrink gap-2.5 justify-center items-center px-4 py-2.5 w-full border border-solid shadow-sm rounded-[100px] ${
                    button.variant === 'green'
                      ? 'border-white bg-green-900 bg-opacity-50 text-white'
                      : 'border-gray-200 bg-white text-slate-900'
                  }`}
                >
                  <img
                    loading="lazy"
                    src={button.icon}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <div className="self-stretch my-auto">{button.text}</div>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm leading-none text-center text-stone-500 max-md:max-w-full">
            Or Drop files in the drop zone above.
          </div>
        </div>
      </div>
    </div>
  );
}

// UploadProjects Modal Component
function UploadProjects({ uploadButtons, dropzoneIcon, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="flex flex-col p-6 max-w-screen-sm bg-white rounded-xl border border-gray-200 border-solid shadow-xl max-md:px-5">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-lg font-semibold leading-loose text-gray-900 max-md:max-w-full">
            Upload Projects
          </div>
          <div className="mt-1 text-sm leading-none text-stone-500 max-md:max-w-full">
            Please upload files in pdf, docx or doc format and make sure the
            file size is under 25 MB.
          </div>
        </div>

        <UploadArea uploadButtons={uploadButtons} dropzoneIcon={dropzoneIcon} />

        <div className="flex flex-wrap gap-3 items-start mt-8 w-full text-base font-semibold whitespace-nowrap max-md:max-w-full">
          <ActionButton text="Cancel" variant="white" onClick={onClose} />
          <ActionButton text="Done" variant="green" />
        </div>
      </div>
    </div>
  );
}

// Main Form Component
function ConsultationResult() {
  const [formData, setFormData] = useState({
    patientName: 'Mike Daniel',
    patientFileNumber: 'DD5386828466',
    patientEmail: '',
    description: '',
    file: null,
  });

  const [showModal, setShowModal] = useState(false); // Modal state

  // Handle text input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle file selection
  const handleFileChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setShowModal(true); // Show the modal on submit
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  const uploadButtons = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/03a82474349c01e07266e9b0975348a7141cf2000bf566dbb3c3458e989790fa?apiKey=91a57716fa0c4017b5d1b119afeacf36&',
      text: 'Upload from Drive',
      variant: 'white',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/7548e94477351ab775b5d8cab229297f75dace023d3f01a43e5310d69b1c089e?apiKey=91a57716fa0c4017b5d1b119afeacf36&',
      text: 'Browse',
      variant: 'green',
    },
  ];

  const dropzoneIcon =
    'https://cdn.builder.io/api/v1/image/assets/91a57716fa0c4017b5d1b119afeacf36/a943930d6224fef382d7e199e6ee82943bf40697c515e96c72bd40c5ce13ea12?apiKey=91a57716fa0c4017b5d1b119afeacf36&';

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-8 py-6 bg-white border border-gray-300 rounded-xl max-w-3xl mx-auto shadow-md"
    >
      <h1 className="text-lg font-semibold text-gray-900 mb-4">
        Please upload the consultation results here.
      </h1>

      {/* Patient Info Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Patient Name"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required={true}
        />
        <FormField
          label="Patient File Number"
          name="patientFileNumber"
          value={formData.patientFileNumber}
          onChange={handleChange}
          required={true}
        />
      </div>

      {/* Email Field */}
      <div className="mt-4">
        <FormField
          label="Patient's Email Address"
          name="patientEmail"
          type="email"
          value={formData.patientEmail}
          onChange={handleChange}
          placeholder="Enter email address"
        />
      </div>

      {/* File Upload */}
      <FileUpload
        onFileChange={handleFileChange}
        fileName={formData.file ? formData.file.name : ''}
      />

      {/* Description Field */}
      <div className="mt-4">
        <label htmlFor="description" className="text-base font-medium text-black">
          Add description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 mt-1 bg-gray-50 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Briefly describe"
          rows="4"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition"
      >
        Submit
      </button>

      {/* Modal for Upload Projects */}
      {showModal && (
        <UploadProjects
          uploadButtons={uploadButtons}
          dropzoneIcon={dropzoneIcon}
          onClose={closeModal}
        />
      )}
    </form>
  );
}

export default ConsultationResult;