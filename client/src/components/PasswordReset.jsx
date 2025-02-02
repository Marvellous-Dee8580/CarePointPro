import * as React from 'react';

export const PasswordInput = ({ label, id }) => {
  return (
    <div className="flex flex-col mt-3 w-full">
      <div className="flex flex-col items-start w-full max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[376px]">
          <label htmlFor={id} className="max-w-full text-black rounded-none">
            {label}
          </label>
          <div className="flex overflow-hidden flex-col w-full whitespace-nowrap text-zinc-400">
            <input
              type="password"
              id={id}
              className="px-5 py-5 bg-gray-50 rounded-[60px]"
              aria-label={label}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const PasswordReset = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const passwordFields = [
    { id: 'oldPassword', label: 'Old Password' },
    { id: 'newPassword', label: 'New Password' },
    { id: 'confirmPassword', label: 'Confirm New Password' }
  ];

  return (
    <form onSubmit={handleSubmit} className="flex overflow-hidden flex-col px-5 pt-7 pb-32 bg-white rounded-xl max-w-[730px] max-md:pb-24 border border-xl">
      <div className="flex flex-col font-medium min-h-[382px] max-md:max-w-full">
        <h1 className="text-xl tracking-tighter leading-tight text-black max-md:max-w-full">
          Change Password
        </h1>
        <div className="flex flex-col mt-8 w-full text-base tracking-tighter min-h-[325px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center px-16 pt-6 pb-1 w-full rounded-xl border border-gray-50 border-solid max-md:px-5 max-md:max-w-full">
            <div className="flex gap-10 items-start max-w-full min-h-[297px] w-[454px]">
              <div className="flex flex-col justify-center min-w-[240px] w-[454px]">
                {passwordFields.map((field) => (
                  <PasswordInput
                    key={field.id}
                    id={field.id}
                    label={field.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between self-center mt-6 w-full text-lg font-bold tracking-tighter leading-none whitespace-nowrap max-w-[627px] max-md:max-w-full">
        <button
          type="button"
          className="px-11 py-3 text-green-900 rounded-xl border border-green-900 border-solid max-md:px-5"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-11 py-3 text-white bg-green-900 rounded-xl max-md:px-5"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
