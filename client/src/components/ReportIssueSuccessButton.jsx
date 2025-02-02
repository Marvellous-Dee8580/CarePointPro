import * as React from 'react';

function ReportIssueSuccessButton({ text, variant, className }) {
  const baseStyles = 'flex overflow-hidden flex-col self-stretch my-auto whitespace-nowrap';
  const variantStyles = {
    outline: 'px-4 py-3 rounded-xl border border-solid border-green-900 border-opacity-50 max-md:px-5',
    solid: 'px-5 py-3 bg-green-900 rounded-xl max-md:px-5'
  };

  return (
    <button 
      className={`${baseStyles} ${className}`}
      tabIndex={0}
    >
      <div className={variantStyles[variant]}>
        {text}
      </div>
    </button>
  );
}

function SuccessMessage() {
  const buttons = [
    {
      text: 'Close',
      variant: 'outline',
      className: 'text-green-900 text-opacity-50 w-[161px]'
    },
    {
      text: 'View your report',
      variant: 'solid',
      className: 'text-white w-[205px]'
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center px-12 py-12 bg-white rounded-3xl max-w-[755px] max-md:px-5">
      <div className="flex flex-col max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ddd2562675a2aa8478ecddf7f14e6d649dea55f0f90f58579272653476886d9?placeholderIfAbsent=true&apiKey=91a57716fa0c4017b5d1b119afeacf36"
          alt="Success confirmation icon"
          className="object-contain self-center w-40 max-w-full aspect-[0.93]"
        />
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <div className="text-base font-semibold tracking-tight leading-9 text-center text-neutral-900 max-md:max-w-full">
            Your issue has been successfully submitted.
            <br />
            We value your feedback and are committed to resolving any problems
            as quickly as possible. Our support team will review your report and
            get back to you within 24 hours.
            <br />
            If you need immediate assistance, please don't hesitate to contact
            us directly at [support email or phone number].
          </div>
          <div className="flex gap-10 items-center self-center mt-8 text-lg font-bold tracking-tighter leading-none max-md:max-w-full">
            {buttons.map((button, index) => (
              <ReportIssueSuccessButton
                key={index}
                text={button.text}
                variant={button.variant}
                className={button.className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ReportIssueSuccessButton, SuccessMessage };