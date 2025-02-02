import React from 'react';

function LabResults({ labResults }) {
  return (
    <div className="flex flex-col items-start text-black">
      <div className="text-sm font-extrabold tracking-tight">Lab Results</div>
      <div className="self-start mt-2 text-xs font-bold tracking-tight">
        Blood Tests:
      </div>
      <div className="self-stretch mt-1.5 text-xs tracking-tight">
        <ul>
          {labResults.bloodTests.map((test, index) => (
            <li key={index}>
              <span className="font-medium">{test.test}</span>: {test.value} ({test.status})
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 text-xs font-bold tracking-tight">
        Imaging Tests
      </div>
      <div className="mt-2 text-xs tracking-tight">
        <ul>
          {labResults.imagingTests.map((test, index) => (
            <li key={index}>
              <span className="font-medium">{test.test}:</span> {test.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LabResults;